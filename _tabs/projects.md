---
title: Projects
icon: fas fa-diagram-project
order: 1
toc: true
---

Selected work across **MLOps platforms**, **production GenAI/LLM systems**, and
**applied ML**. Each entry is framed as *problem → approach → my role → stack →
impact*.

> Numbers below reflect production systems at Maruti Suzuki India Limited (MSIL)
> and Entytle. Where a figure is approximate it is marked with "~".
{: .prompt-info }

---

## 🏗️ Unified MLOps Framework  *(patent-filed)*

**Problem.** ML teams at MSIL had slow, inconsistent paths from notebook to
production — no shared standard for deployment, monitoring, drift detection, or
cost visibility, so every model shipped as a one-off.

**Approach.** Designed an enterprise **Unified MLOps Framework** built on DataOps +
DevSecOps + MLOps principles: a dynamic, parallel model-operation platform with a
single monitoring dashboard for pipeline health, model performance, data drift, and
cloud cost. Standardized the deploy path so new models inherit CI/CD, observability,
and governance by default.

**My role.** Project owner / manager leading a **team of 12**; owned architecture,
delivery, and stakeholder alignment as a certified SAFe® 6.0 PO/PM.

**Stack.** AWS, MLflow, Docker, Jenkins/GitHub CI, Python, Terraform; drift &
cost-monitoring dashboarding.

**Impact.** Cut deployment time and operational cost by **~20%**. The design is the
basis of a filed **patent** — *Method and System for Managing Machine Learning
Models Using a Dynamic and Parallel Model Operation Platform* (App. No.
**202411067665**).

---

## 🎙️ Production GenAI — Voice Analytics at 100k calls/day

**Problem.** Contact-center calls held rich signal — product defects, agent
performance, recurring customer issues — but were unstructured audio that no one
could analyze at scale.

**Approach.** Built a **voice-analytics pipeline** transcribing and analyzing up to
**100,000 calls/day**. AWS Transcribe converts audio to text; Amazon Bedrock LLMs
extract defect analysis, agent-performance signals, and customer-issue KPIs, which
roll up into dashboards for quality and product teams. Designed for cost and
throughput at that volume (batching, prompt/token discipline, caching where the same
question recurs).

**My role.** Lead ML engineer — pipeline architecture, LLM prompt/eval design, and
the scale/cost engineering.

**Stack.** AWS Transcribe, Amazon Bedrock, Python, LangChain/LangGraph, S3, AWS
batch/serverless orchestration.

**Impact.** Turned a previously-opaque audio stream into daily, queryable KPIs at
**100k calls/day** — surfacing defect and CX trends that were invisible before.

---

## 🗃️ Text-to-SQL — Natural-language database interface

**Problem.** Business users needed answers from databases but couldn't write SQL,
bottlenecking every ad-hoc data question on the analytics team.

**Approach.** Built a **Text-to-SQL** system that turns a plain-English question into
a validated SQL query and returns the answer, exposed through a Streamlit interface.
Bedrock generates the query against a known schema; Athena executes it over the data
lake; Glue/SageMaker handle cataloging and supporting models.

**My role.** Lead engineer — schema-grounded generation, guardrails against invalid
queries, and the end-to-end app.

**Stack.** Amazon Bedrock, Athena, AWS Glue, SageMaker, Streamlit, Python.

**Impact.** Self-service data access for non-technical users — removed the analyst
bottleneck for routine questions.

---

## 🔊 Brake-Squeal Defect Detection  *(applied deep learning)*

**Problem.** Detecting brake-squeal defects from audio was manual and didn't scale to
production volumes.

**Approach.** Trained a **CNN** on spectrogram representations of brake audio to
classify defects, processing **~800 audio files/day** in an automated pipeline.

**My role.** ML engineer — data pipeline, model, and productionization.

**Stack.** PyTorch/TensorFlow, CNNs, audio/spectrogram preprocessing, Python.

**Impact.** Automated a manual QA step at **~800 files/day**.

---

## 📈 Customer Clustering & Service Propensity

**Problem.** Dealers needed to know which customers to prioritize for service
outreach, across a large and varied national footprint.

**Approach.** Built **customer clustering + service-propensity** models and deployed
them across **13 regions for 2,500+ dealers**, giving each dealer ranked outreach
targets.

**My role.** ML engineer — modeling and regional rollout.

**Stack.** Python, scikit-learn, PySpark, AWS.

**Impact.** Data-driven service prioritization deployed to **2,500+ dealers** across
13 regions.

---

## 🚗 Used-Car Pricing Engine

**Problem.** Used-car pricing ran on static business rules that couldn't adapt to the
market.

**Approach.** Replaced the rules engine with an **ML pricing model** deployed
pan-India.

**My role.** ML engineer — modeling and deployment.

**Stack.** Python, scikit-learn/gradient boosting, AWS.

**Impact.** Rules → ML pricing, live **pan-India**.

---

## 🧹 Data Engineering — Dedup & Segmentation  *(Entytle, 2020–2022)*

**Problem.** Dirty, duplicated customer/asset records undermined downstream
analytics.

**Approach.** Built **deduplication pipelines** (PySpark + XGBoost with NLP-based
name/address matching) and customer **segmentation** using Zipf distributions +
Ramer–Douglas–Peucker simplification; delivered insight through Power BI / Looker.

**My role.** Data Engineer / Analyst.

**Stack.** PySpark, XGBoost, NLP matching, Power BI, Looker.

**Impact.** Cleaner master data and clearer segments feeding the analytics stack.

---

*Want the technical deep-dive on any of these? See the [blog]({{ '/' | relative_url }})
or reach out via the links in the sidebar.*
