# 🚗 AutoGenie

AutoGenie is an AI-driven predictive maintenance system for the automotive domain that uses machine learning and agentic workflow automation to predict failures and autonomously trigger maintenance actions.

![powered by FastAPI](https://img.shields.io/badge/Powered%20By-FastAPI-green)
![workflow n8n](https://img.shields.io/badge/Workflow-n8n-orange)
![ML scikit-learn](https://img.shields.io/badge/ML-Scikit--learn-blue)
![license MIT](https://img.shields.io/badge/License-MIT-purple)

---

## Overview

AutoGenie enables proactive vehicle maintenance by analyzing real-time sensor data and predicting potential failures before they occur. Instead of reactive servicing, the system automatically orchestrates maintenance workflows such as diagnostics, service scheduling, customer notifications, and manufacturing feedback using an agent-based architecture.

The platform demonstrates how AI-driven decision-making and workflow automation can be combined to build scalable, intelligent systems for real-world industrial use cases.

---

## Key Features

- Real-time vehicle failure prediction using ML models  
- Risk-based decision routing via a Master Agent  
- Automated service scheduling  
- Customer engagement through notifications  
- Manufacturing feedback loop for OEM insights  
- Fully demonstratable end-to-end prototype  

---

## System Architecture

AutoGenie follows a modular, agentic architecture:

1. Vehicle sensor data is collected (engine temperature, RPM, load, wear)
2. ML Prediction Service (FastAPI) evaluates failure risk
3. Master Agent (n8n) routes the workflow
4. Predictive Maintenance Agent interprets failures
5. Service Scheduling Agent auto-books service
6. Customer Engagement Agent generates notifications
7. Manufacturing Feedback Agent logs failure patterns

---

## Tech Stack

- **Backend & ML:** Python, FastAPI, Scikit-learn, Joblib  
- **Workflow Automation:** n8n (Agentic workflows, Cron/Webhooks)  
- **APIs:** REST APIs, HTTP/Webhooks  
- **Architecture:** Microservices, Event-driven design  
- **Deployment:** n8n Cloud / Render  

---

## Demo Capabilities

- Live ML API predictions
- Real-time agent execution in n8n
- Automated service scheduling output
- Customer notification generation
- OEM feedback data logging

---

## Future Enhancements

- Fleet management dashboard
- IoT platform integration
- Email / SMS / WhatsApp notifications
- Advanced analytics and visualization

---


This project is licensed under the MIT License.
