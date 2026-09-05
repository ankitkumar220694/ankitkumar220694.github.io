---
# the default layout is 'page'
icon: fas fa-info-circle
order: 5
---

I'm **Ankit Kumar** — a **Full-Stack AI & ML Engineer** with **6+ years** of
experience in the end-to-end design, development, and deployment of secure, scalable
AI and machine-learning applications across cloud environments. I currently work at
**Maruti Suzuki India Limited (MSIL)**, and I'm targeting **Senior ML / MLOps / GenAI
Engineer** roles.

{% assign resume_exists = false %}
{% for f in site.static_files %}{% if f.path == site.resume_url %}{% assign resume_exists = true %}{% endif %}{% endfor %}
{% if resume_exists %}
> **[⬇ Download my Résumé (PDF)]({{ site.resume_url | relative_url }})**{: .btn .btn-primary target="_blank" }
{% endif %}

## What I do

- **Agentic GenAI & MLOps platforms** — designed the **AgentX** DevSecOps automation
  platform (multi-agent **LangGraph** system automating CI/CD compliance and release
  pipelines via APIs and MCP, ~9% faster release cycles), and an end-to-end **MLOps
  framework** (data quality, drift, and model-health monitoring; 5+ production
  projects onboarded; ~20% lower deployment time and cloud opex). The MLOps work is
  the basis of a filed **patent** (App. No. 202411067665) — *Method and System for
  Managing Machine Learning Models Using Dynamic and Parallel Model Operation
  Platform*.
- **Production GenAI / LLMs** — an **Intelligent Enterprise Knowledge Engine**
  (LangChain + advanced RAG with a FastMCP ingestion/vectorization pipeline), a
  **GenAI Text-to-SQL** dashboard (schema-aware prompting + retrieval-augmented
  context), and a **voice-analytics** platform processing **100,000+ calls/day** (AWS
  Transcribe + OpenAI Whisper) for defect, agent-performance, and marketing KPIs.
- **Cloud cost & FinOps** — a custom multi-cloud (**AWS + Azure**) **FinOps** platform
  with an automated monitoring pipeline delivering executive cost insights; drove a
  **22%** opex reduction via EC2 rightsizing, Reserved Instances, and RDS Graviton
  migrations.
- **Applied ML** — an **RNN-based acoustic brake-diagnostics** system automating
  defect detection on **800+ daily recordings** (~30 engineering hours/week saved via
  MFCC/spectrogram feature engineering and per-brake retraining), and **customer
  clustering & propensity** models across **13 pan-India regions** enabling **2,500+
  dealers** to run personalized service offers.
- **Data engineering** (earlier, at Entytle) — a from-scratch **deduplication**
  pipeline (PySpark + NLP name/address matching, +80% address accuracy),
  **segmentation** via Zipf + Ramer–Douglas–Peucker, and automated ETL + Power BI
  dashboards.

## Skills

- **Languages & Frameworks:** Python, C++, SQL, Node.js (frontend), FastAPI
  (backend), FastMCP (MCP)
- **GenAI / ML / Data:** LangChain, LangGraph, RAG pipelines, Multi-Agent Systems,
  Model Context Protocol, semantic search & embeddings, PyTorch, TensorFlow,
  Scikit-learn, XGBoost, CNNs, RNNs, PySpark, Pandas, NumPy
- **Cloud, MLOps & DevSecOps:** AWS, Azure, MLflow, Docker, Terraform (IaC), GitHub
  Actions, Snyk (SCA/SAST/Container/IaC), SonarQube
- **Leadership & Product:** Certified **SAFe® 6.0 Product Owner / Product Manager**;
  Agile / Scrum / Kanban; cross-functional team collaboration and stakeholder
  management

## Education

- **Great Lakes Institute of Management** — Post Graduate Program in Data Science &
  Engineering (2020)
- **Goa College of Engineering** — B.E., Electrical & Electronics (2018)

## Elsewhere

- GitHub: [@ankitkumar220694](https://github.com/ankitkumar220694)
- LinkedIn: [ankitkumar220694](https://www.linkedin.com/in/ankitkumar220694)
- Email: [ankitkumar220694@gmail.com](mailto:ankitkumar220694@gmail.com)
