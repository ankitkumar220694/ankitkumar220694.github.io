---
title: Projects
icon: fas fa-diagram-project
order: 1
toc: true
---

Selected work across **MLOps platforms**, **production GenAI/LLM systems**, and
**applied ML**, plus what I build for myself. Click a card to expand the full
*problem → approach → my role → stack → impact* write-up.

> Professional figures reflect production systems at Maruti Suzuki India Limited
> (MSIL) and Entytle. Approximate figures are marked "~".
{: .prompt-info }

# Professional Projects

<details class="ak-card" markdown="1">
<summary>
  <span class="ak-card-head">
    <span class="ak-card-title">Unified MLOps Framework <em>· patent-filed</em></span>
    <span class="ak-card-sub">MSIL · AI/ML Engineer · Aug 2022 – Present</span>
  </span>
  <i class="fas fa-chevron-down ak-chevron" aria-hidden="true"></i>
</summary>

**Problem.** ML teams had slow, inconsistent paths from notebook to production — no
shared standard for deployment, monitoring, drift detection, or cost visibility, so
every model shipped as a one-off.

**Approach.** Designed an enterprise **Unified MLOps Framework** on DataOps +
DevSecOps + MLOps principles: a dynamic, parallel model-operation platform with a
single dashboard for pipeline health, model performance, data drift, and cloud cost.
New models inherit CI/CD, observability, and governance by default.

**My role.** Project owner / manager leading a **team of 12** (SAFe® 6.0 PO/PM) —
architecture, delivery, and stakeholder alignment.

**Stack.** AWS, MLflow, Docker, Jenkins/GitHub CI, Python, Terraform.

**Impact.** Cut deployment time and operational cost by **~20%**. Basis of a filed
**patent** — *Method and System for Managing Machine Learning Models Using a Dynamic
and Parallel Model Operation Platform* (App. No. **202411067665**).

</details>

<details class="ak-card" markdown="1">
<summary>
  <span class="ak-card-head">
    <span class="ak-card-title">Voice Analytics at 100k calls/day <em>· production GenAI</em></span>
    <span class="ak-card-sub">MSIL · AWS Transcribe + Bedrock</span>
  </span>
  <i class="fas fa-chevron-down ak-chevron" aria-hidden="true"></i>
</summary>

**Problem.** Contact-center calls held rich signal — defects, agent performance,
customer issues — locked in unstructured audio no one could analyze at scale.

**Approach.** Built a pipeline transcribing/analyzing up to **100,000 calls/day** —
AWS Transcribe for ASR, Amazon Bedrock LLMs for defect analysis, agent-performance,
and customer-issue KPIs — engineered for cost and throughput at that volume.

**My role.** Lead ML engineer — pipeline architecture, LLM prompt/eval design, and
scale/cost engineering.

**Stack.** AWS Transcribe, Amazon Bedrock, LangChain/LangGraph, S3, Python.

**Impact.** Turned an opaque audio stream into daily, queryable KPIs at **100k
calls/day**.

</details>

<details class="ak-card" markdown="1">
<summary>
  <span class="ak-card-head">
    <span class="ak-card-title">Text-to-SQL — Natural-language DB interface</span>
    <span class="ak-card-sub">MSIL · Bedrock · Athena · Streamlit</span>
  </span>
  <i class="fas fa-chevron-down ak-chevron" aria-hidden="true"></i>
</summary>

**Problem.** Business users needed database answers but couldn't write SQL,
bottlenecking every ad-hoc question on the analytics team.

**Approach.** Schema-grounded **Text-to-SQL**: Bedrock generates a validated query,
Athena executes over the data lake, Glue/SageMaker support cataloging/models, served
through Streamlit.

**My role.** Lead engineer — schema-grounded generation, invalid-query guardrails,
end-to-end app.

**Stack.** Amazon Bedrock, Athena, AWS Glue, SageMaker, Streamlit, Python.

**Impact.** Self-service data access for non-technical users; removed the analyst
bottleneck for routine questions.

</details>

<details class="ak-card" markdown="1">
<summary>
  <span class="ak-card-head">
    <span class="ak-card-title">Applied ML — Defect Detection, Propensity & Pricing</span>
    <span class="ak-card-sub">MSIL · CNN · clustering · pricing</span>
  </span>
  <i class="fas fa-chevron-down ak-chevron" aria-hidden="true"></i>
</summary>

- **Brake-squeal CNN** — classified defects from brake audio (spectrogram CNN),
  automating a manual QA step at **~800 files/day**.
- **Customer clustering & service propensity** — ranked outreach targets, deployed
  across **13 regions for 2,500+ dealers**.
- **Used-car pricing engine** — replaced static rules with an ML model, live
  **pan-India**.

</details>

<details class="ak-card" markdown="1">
<summary>
  <span class="ak-card-head">
    <span class="ak-card-title">Deduplication & Segmentation</span>
    <span class="ak-card-sub">Entytle · Data Engineer / Analyst · 2020 – 2022</span>
  </span>
  <i class="fas fa-chevron-down ak-chevron" aria-hidden="true"></i>
</summary>

**Problem.** Dirty, duplicated customer/asset records undermined downstream
analytics.

**Approach.** Built **dedup pipelines** (PySpark + XGBoost, NLP name/address
matching) and customer **segmentation** (Zipf + Ramer–Douglas–Peucker), surfaced via
Power BI / Looker.

**Stack.** PySpark, XGBoost, NLP matching, Power BI, Looker.

**Impact.** Cleaner master data and clearer segments feeding the analytics stack.

</details>

# Personal Projects

<details class="ak-card" markdown="1">
<summary>
  <span class="ak-card-head">
    <span class="ak-card-title">Health Tracker — Medication + Wearable Analytics</span>
    <span class="ak-card-sub">Solo project · Python · Galaxy Watch 7</span>
  </span>
  <i class="fas fa-chevron-down ak-chevron" aria-hidden="true"></i>
</summary>

**Problem.** My health data is scattered — medication routines in my head, and
biometrics (heart rate, steps, sleep) trapped inside the Samsung Health app on my
**Galaxy Watch 7**, with no clean way to correlate the two over time.

**Approach.** A GitHub-ready **Python application** that unifies both:

- **Medication logging + adherence** — daily / weekly / as-needed schedules with an
  adherence-% report and threshold flags.
- **Wearable sync** — the Galaxy Watch 7 exposes **no cloud REST API** (data lives in
  Samsung Health), so v0.1 ingests **Samsung Health CSV exports** behind a pluggable
  `WatchConnector` interface, with a **BOM-tolerant, idempotent** parser (re-imports
  don't double-count). v0.2 is scoped as an **Android Health Connect companion**
  POSTing to a FastAPI ingest endpoint — the connector abstraction means the app
  doesn't change, only the source.
- **Analytics + reporting** — heart-rate / steps / sleep trends and a markdown health
  report with threshold flags.

**My role.** Sole engineer — architecture, implementation, tests, CI.

**Stack.** Python, Typer (CLI), SQLAlchemy + SQLite, Pydantic, pytest, ruff, GitHub
Actions.

**Engineering notes.** Pluggable connector pattern (ABC + registry) so new data
sources drop in without touching core logic; fully tested with a green CI pipeline;
`.gitignore` keeps config/health data out of version control by design.

</details>

---

*Want the technical deep-dive on any of these? See the [blog]({{ '/' | relative_url }})
or reach out via the links in the sidebar.*
