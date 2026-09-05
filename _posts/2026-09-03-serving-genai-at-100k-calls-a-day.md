---
title: "Serving GenAI at 100k Calls a Day: What Scales, What Breaks, and What It Costs"
date: 2026-09-03 09:00:00 +0530
categories: [GenAI, MLOps]
tags: [genai, llm, bedrock, aws, cost-optimization, observability]
toc: true
---

I spent a good chunk of the last year building a voice-analytics system that runs up
to **100,000 calls a day** through automatic speech recognition and a large language
model. The demo version — transcribe a call, ask an LLM to summarize it — takes an
afternoon. The version that survives 100k calls a day, stays inside a budget, and
doesn't page you at 2 a.m. is a different engineering problem. This post is about
that gap.

> The system: AWS Transcribe turns call audio into text, Amazon Bedrock LLMs extract
> defect analysis, agent-performance signals, and customer-issue KPIs, and the
> results roll up into dashboards. The numbers and lessons below are from operating
> it in production.
{: .prompt-info }

## The demo-to-production gap

A single call through the pipeline is trivial. The trouble starts when you multiply
by 100,000 and add the constraints nobody mentions in a tutorial:

- **Cost is now a first-class metric.** At one LLM call per conversation you are
  making ~100k model invocations a day. Token count *is* your bill. A prompt that is
  30% longer than it needs to be is a 30% larger invoice, every day, forever.
- **Latency compounds.** ASR latency + LLM latency + ret\[ries\] + queue wait — at
  volume, the p99 is what defines whether the daily batch finishes before the next
  one starts.
- **Failure is constant, not exceptional.** At 100k/day something is always failing:
  a malformed transcript, a throttled API, a call with no speech. "Handle the happy
  path" is not a strategy.

## Lever 1 — Token discipline is cost engineering

The single highest-leverage thing I did was treat the prompt as a cost surface, not
just a correctness surface.

- **Trim the system prompt ruthlessly.** Every token in a static instruction block is
  paid on every one of 100k calls. I moved verbose instructions to the shortest form
  that still passed eval.
- **Bound the output.** Ask for structured, capped output (JSON with named fields)
  rather than free prose. You pay for output tokens too, and structured output is
  cheaper to parse downstream.
- **Right-size the model per task.** Not every extraction needs the largest model.
  Routing simpler classifications to a smaller/cheaper model and reserving the big
  model for genuinely hard reasoning is a large, boring, effective cost win.

## Lever 2 — Semantic caching for repeated questions

In a contact center the same *kinds* of questions recur constantly — "what defect is
this customer describing?" over near-identical calls. An exact-match cache misses
because the wording differs every time.

A **semantic cache** keys on meaning instead of exact text: embed the query, do a
vector-similarity lookup against past queries, and if you're within a distance
threshold, return the cached answer and skip the LLM call entirely. The tradeoffs
that actually matter in production:

- **The threshold is the whole game.** Too loose and you serve a wrong-but-similar
  answer; too strict and your hit rate collapses and you've added latency for
  nothing. This needs tuning against real traffic, not a guessed constant.
- **Context-awareness.** In a multi-turn setting, cache on the relevant conversation
  window, not just the last utterance, or you'll return an answer that's correct in
  isolation and wrong in context.

Every cache hit is an LLM call you did not pay for and did not wait on — it improves
both levers above at once.

## Lever 3 — Observability or it didn't happen

At 100k/day you cannot eyeball outputs. What I instrument:

- **Cost per call and per day**, broken down by model and by stage — so a regression
  in prompt size shows up as a line going up, not as a surprise invoice.
- **Throughput and p50/p99 latency** per stage (ASR vs LLM) — so you know *which*
  stage to fix when the batch runs long.
- **Failure taxonomy** — throttles, empty transcripts, parse failures, each counted
  separately, because they have different fixes.
- **Output quality sampling** — a small, continuous sample scored against a rubric,
  so silent quality drift is caught before a stakeholder catches it.

## Lever 4 — Design for constant failure

- **Retries with backoff** on throttling, with a dead-letter path so one bad call
  doesn't stall a batch.
- **Idempotency** so re-processing after a failure doesn't double-count or
  double-bill.
- **Graceful degradation** — a call with no usable speech should be flagged and
  skipped, not crash the run.

## What I'd tell someone starting this

1. **Instrument cost from day one.** You cannot optimize a bill you can't see.
2. **The prompt is infrastructure.** Version it, eval it, and treat a token increase
   as a change with a price tag.
3. **Cache before you scale the model.** The cheapest LLM call is the one you didn't
   make.
4. **Small model + routing beats one big model** for most of the volume.

Serving GenAI at scale is less about clever prompting and more about the same
discipline as any production system: measure it, bound it, and assume it will fail.

*I write about MLOps and production GenAI. More on the [Projects]({{ '/projects/' |
relative_url }}) page.*
