---
title: Projects
icon: fas fa-diagram-project
order: 1
toc: true
---

Selected work across **agentic GenAI & MLOps platforms**, **production LLM systems**,
**cloud cost / FinOps**, and **applied ML**, plus what I build for myself. Click a
card to expand the full *problem → approach → my role → stack → impact* write-up.

> Professional figures reflect production systems at Maruti Suzuki India Limited
> (MSIL) and Entytle. Approximate figures are marked "~".
{: .prompt-info }

# Professional Projects

<details class="ak-card" markdown="1">
<summary>
  <span class="ak-card-head">
    <span class="ak-card-title">AgentX — DevSecOps Automation Platform <em>· multi-agent GenAI</em></span>
    <span class="ak-card-sub">MSIL · LangGraph · FastAPI · FastMCP · AWS</span>
  </span>
  <i class="fas fa-chevron-down ak-chevron" aria-hidden="true"></i>
</summary>

**Problem.** CI/CD compliance and release pipelines across the MSIL Digital
Enterprise were manual and slow, with security/compliance gates bolted on late.

**Approach.** Designed the DevSecOps process and technical architecture, then built
an **AI-driven multi-agent LangGraph system** to automate CI/CD compliance and
release pipelines via APIs and **MCP**. Shipped it as a full-stack app on AWS — a
Node.js frontend, FastAPI backend, and a custom **FastMCP** server integrating
threat-modelling, Jira, Confluence (CMMI docs), GitHub, and Snyk.

**My role.** Architect + full-stack engineer — process design, multi-agent
orchestration, and the end-to-end application.

**Stack.** LangGraph, MCP/FastMCP, Node.js, FastAPI, AWS, Snyk, Jira, GitHub.

**Impact.** Accelerated application release cycles by **~9%** with automated,
auditable compliance.

</details>

<details class="ak-card" markdown="1">
<summary>
  <span class="ak-card-head">
    <span class="ak-card-title">MLOps Framework <em>· patented</em></span>
    <span class="ak-card-sub">MSIL · AI/ML Engineer · Aug 2022 – Present</span>
  </span>
  <i class="fas fa-chevron-down ak-chevron" aria-hidden="true"></i>
</summary>

**Problem.** ML teams had slow, inconsistent paths to production — no shared standard
for deployment, data-quality/drift monitoring, or model-health and cost visibility.

**Approach.** Spearheaded the design and deployment of an **end-to-end MLOps
framework** monitoring data quality, drift, and overall model health, with a single
dashboard across the model lifecycle.

**My role.** Design and delivery lead (SAFe® 6.0 PO/PM) — architecture, rollout, and
stakeholder alignment.

**Stack.** AWS, MLflow, Docker, Terraform, GitHub Actions, Python.

**Impact.** Onboarded **5+ production projects**, reducing deployment time and cloud
operational expense by **~20%**. Basis of a filed **patent** — *Method and System for
Managing Machine Learning Models Using Dynamic and Parallel Model Operation Platform*
(App. No. **202411067665**).

</details>

<details class="ak-card" markdown="1">
<summary>
  <span class="ak-card-head">
    <span class="ak-card-title">FinOps Platform — Cloud Cost Optimization</span>
    <span class="ak-card-sub">MSIL · AWS + Azure · multi-cloud</span>
  </span>
  <i class="fas fa-chevron-down ak-chevron" aria-hidden="true"></i>
</summary>

**Problem.** Cloud spend across the MSIL Digital Enterprise lacked cross-divisional
visibility, making cost accountability and optimization hard.

**Approach.** Designed a standardized **FinOps** process and built a custom
**multi-cloud (AWS & Azure)** web application for cross-divisional cost tracking, plus
an automated monitoring pipeline delivering data-driven cost insights to executive
leadership.

**My role.** Architect + engineer — FinOps process, multi-cloud app, and the
monitoring pipeline.

**Stack.** AWS, Azure, Python, automated cost-monitoring pipeline.

**Impact.** Drove a **~22%** reduction in operational expense via proactive EC2
rightsizing, Reserved Instance adoption, and RDS Graviton migrations.

</details>

<details class="ak-card" markdown="1">
<summary>
  <span class="ak-card-head">
    <span class="ak-card-title">Intelligent Enterprise Knowledge Engine <em>· RAG</em></span>
    <span class="ak-card-sub">MSIL · LangChain · RAG · FastMCP</span>
  </span>
  <i class="fas fa-chevron-down ak-chevron" aria-hidden="true"></i>
</summary>

**Problem.** Senior management spent too long retrieving answers from a large, mixed
corpus of enterprise documents, slowing data-driven decisions.

**Approach.** Architected an **Intelligent Enterprise Knowledge Engine** using
**LangChain** and advanced **RAG** architectures, with an automated data-ingestion
and vectorization pipeline built on **FastMCP** to standardize context delivery
across diverse document formats — ensuring deterministic LLM behavior and higher
semantic-search fidelity.

**My role.** Lead engineer — RAG architecture and the ingestion/vectorization
pipeline.

**Stack.** LangChain, RAG, FastMCP, embeddings / semantic search, Python.

**Impact.** Cut complex document-retrieval time for senior management, enabling
faster decision-making.

</details>

<details class="ak-card" markdown="1">
<summary>
  <span class="ak-card-head">
    <span class="ak-card-title">GenAI Text-to-SQL Dashboard</span>
    <span class="ak-card-sub">MSIL · LLM query generation · RAG</span>
  </span>
  <i class="fas fa-chevron-down ak-chevron" aria-hidden="true"></i>
</summary>

**Problem.** Non-technical business stakeholders couldn't extract data insights
without writing SQL, bottlenecking every ad-hoc question.

**Approach.** Enhanced a **natural-language-to-SQL** dashboard by integrating
LLM-based query generation with **schema-aware prompt engineering** and
retrieval-augmented context, letting stakeholders query data directly.

**My role.** Engineer — schema-aware generation and retrieval-augmented context.

**Stack.** LLM query generation, schema-aware prompting, RAG, SQL.

**Impact.** Self-service data access for non-technical users; removed the analyst
bottleneck for routine questions.

</details>

<details class="ak-card" markdown="1">
<summary>
  <span class="ak-card-head">
    <span class="ak-card-title">Voice Analytics Platform <em>· 100k+ calls/day</em></span>
    <span class="ak-card-sub">MSIL · AWS Transcribe + OpenAI Whisper</span>
  </span>
  <i class="fas fa-chevron-down ak-chevron" aria-hidden="true"></i>
</summary>

**Problem.** Rich signal in inbound/outbound calls — defects, agent performance,
marketing intel — was locked in unstructured audio at a scale no one could analyze.

**Approach.** Developed an enterprise audio-processing engine leveraging **AWS
Transcribe and OpenAI Whisper** to analyze **100,000+ (1 Lakh+) daily** voice calls,
delivering real-time KPIs for defect analysis, agent performance, and cross-vertical
marketing strategy.

**My role.** Lead ML engineer — pipeline architecture and scale/cost engineering.

**Stack.** AWS Transcribe, OpenAI Whisper, Python, AWS.

**Impact.** Turned an opaque audio stream into real-time, queryable KPIs at **100k+
calls/day**.

</details>

<details class="ak-card" markdown="1">
<summary>
  <span class="ak-card-head">
    <span class="ak-card-title">Acoustic Brake Diagnostics <em>· RNN</em></span>
    <span class="ak-card-sub">MSIL · RNN · MFCC / spectrograms</span>
  </span>
  <i class="fas fa-chevron-down ak-chevron" aria-hidden="true"></i>
</summary>

**Problem.** Brake-defect detection was manual and didn't scale to daily recording
volumes.

**Approach.** Built an **RNN-based** system automating defect detection for **800+
daily recordings**, with automated audio feature engineering (**MFCCs, spectrograms**)
and per-brake-system model retraining.

**My role.** ML engineer — model, feature pipeline, and retraining automation.

**Stack.** RNNs, MFCC / spectrogram feature engineering, Python.

**Impact.** Saved **~30 engineering hours/week** by automating a manual QA step.

</details>

<details class="ak-card" markdown="1">
<summary>
  <span class="ak-card-head">
    <span class="ak-card-title">Customer Propensity & Clustering</span>
    <span class="ak-card-sub">MSIL · unsupervised · 13 regions · 2,500+ dealers</span>
  </span>
  <i class="fas fa-chevron-down ak-chevron" aria-hidden="true"></i>
</summary>

**Problem.** Service centers needed to prioritize the right customers for retention
across a large, varied national footprint.

**Approach.** Trained and deployed **unsupervised clustering** models across **13
pan-India regions**, enabling **2,500+ MSIL dealers** to run highly personalized
vehicle-service offers based on historical consumer behavior.

**My role.** ML engineer — modeling and regional rollout.

**Stack.** Python, scikit-learn, unsupervised clustering.

**Impact.** Increased service-center retention through personalized, data-driven
outreach.

</details>

<details class="ak-card" markdown="1">
<summary>
  <span class="ak-card-head">
    <span class="ak-card-title">Data Engineering — Dedupe & Segmentation</span>
    <span class="ak-card-sub">Entytle · Data Engineer · Jun 2020 – Aug 2022</span>
  </span>
  <i class="fas fa-chevron-down ak-chevron" aria-hidden="true"></i>
</summary>

**Problem.** Unstructured, duplicated customer/address data undermined analytics and
cost manual man-hours.

**Approach.** Built a **deduplication** pipeline from scratch (PySpark preprocessing +
NLP-based name/address matching) and automated **customer segmentation** (Zipf Law →
Ramer–Douglas–Peucker for complexity reduction), plus automated ETL ingestion
(PySpark, SQL) feeding interactive **Power BI** dashboards.

**My role.** Data Engineer — pipelines, matching, and dashboards.

**Stack.** PySpark, SQL, NLP matching, rdp, Pandas, NumPy, Power BI.

**Impact.** Improved unstructured-address accuracy by **~80%**, cut manual man-hours,
and reduced weekly reporting time.

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
