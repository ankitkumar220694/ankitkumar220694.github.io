---
title: "Serving GenAI at 100K Calls a Day"
description: "The cost, caching, observability and failure-handling decisions behind a production voice-analytics pipeline operating at 100K+ calls per day."
date: 2026-09-03 09:00:00 +0530
tags: [genai, llm, bedrock, aws, cost-optimization, observability]
toc: true
---

{% include post-character.html
  label="Operator log 002 / GenAI at scale"
  image_hd="/assets/img/game/hd/char-surprised.png"
  alt="Pixel-art portrait reacting to production scale"
%}

A demo can transcribe one call and ask an LLM for a summary in an afternoon. A production system that handles **100,000+ calls a day**, stays inside budget and recovers from constant partial failure is a different engineering problem.

The system behind these lessons turns call audio into text with automatic speech recognition, extracts operational signals with language models, and rolls the result into dashboards for defect analysis, agent performance and customer issues.

> At this scale, prompt length is infrastructure, p99 latency determines capacity, and “rare” failures happen every day.
{: .prompt-info }

## Start with unit economics

At one model request per conversation, the pipeline can make roughly 100K model invocations every day. Small inefficiencies stop being small:

- A static prompt that is 30% longer creates a recurring token-cost penalty.
- Unbounded prose costs more to generate and is harder to validate downstream.
- Sending every task to the largest model pays premium rates for routine extraction.

I treat each stage as a measurable unit: **cost per processed call, tokens per task, latency per stage and useful output per request**. That turns optimization into engineering instead of guesswork.

## Token discipline is cost engineering

Three decisions consistently produce leverage:

1. **Shorten static instructions.** Keep only wording that changes evaluated behavior.
2. **Constrain the response.** A small documented schema is cheaper and safer than open-ended prose.
3. **Route by difficulty.** Use smaller models for extraction and classification; reserve stronger models for ambiguous reasoning.

Prompts should be versioned and evaluated like code. A token increase is a change with a price tag, not harmless copy editing.

## Cache meaning, not wording

Contact-center questions often repeat semantically even when the transcript wording changes. Exact-match caching misses that reuse.

A semantic cache embeds the relevant input, checks nearby historical requests and reuses an answer only when similarity clears a validated threshold. Two details decide whether it helps:

- **Threshold quality:** too loose returns plausible but incorrect answers; too strict adds lookup latency without enough hits.
- **Context scope:** cache the context needed to preserve meaning, not just the final utterance.

Every safe cache hit removes model latency and model cost at the same time.

## Observe the pipeline by stage

Aggregate success rates hide the part that needs attention. I monitor:

- **Cost per call and per day**, segmented by model and processing stage
- **Throughput plus p50 and p99 latency** for ASR, queues and LLM requests
- **Failure taxonomy** covering throttles, empty transcripts, schema failures and timeouts
- **Continuous quality samples** scored against a stable rubric

When batch completion slips, stage-level telemetry answers whether the constraint is transcription, queue pressure, model latency or retries.

## Assume partial failure

At 100K calls a day, malformed input and transient service errors are normal operating conditions.

- Retry throttled work with bounded exponential backoff.
- Make processing idempotent so recovery cannot duplicate results or billing.
- Move irrecoverable items to a dead-letter path instead of blocking the batch.
- Treat “no usable speech” as a valid outcome with an explicit status.

Graceful degradation is part of the product. A skipped, traceable call is better than a pipeline that stalls invisibly.

## Production checklist

1. Instrument cost before traffic grows.
2. Version prompts and schemas.
3. Tune caching against real distributions.
4. Route simple work away from premium models.
5. Measure every stage independently.
6. Design retry, idempotency and dead-letter behavior together.

The central lesson is not specific to one model provider: reliable GenAI looks like reliable distributed systems engineering. Measure it, bound it and design for failure.

Explore the related [project dossiers]({{ '/projects/' | relative_url }}) or browse the full [writing archive]({{ '/archives/' | relative_url }}).
