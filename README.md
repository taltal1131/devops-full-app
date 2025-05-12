# 🐳 DevOps Fullstack Demo

A complete **DevOps-ready fullstack application** that demonstrates containerized microservices, CI/CD automation, and local orchestration using Docker Compose.

---

## 📦 Project Structure

devops-full-app/
├── frontend/ → Static HTML served via Nginx
├── backend/ → Node.js REST API
├── logger/ → Node.js logging microservice
├── docker-compose.yml
└── .github/workflows/docker-ci.yml

yaml
Copy
Edit

---

## 🚀 Features

- ✅ Dockerized microservices (`frontend`, `backend`, `logger`)
- ✅ `docker-compose` orchestration for local development
- ✅ GitHub Actions for CI/CD: Build & Push to Docker Hub
- ✅ Clean and readable project structure for portfolio/demo purposes
- ✅ Ready for deployment to **Render**, **Railway**, or **AWS ECS**

---

## 📂 Services

| Service  | Port | Description                          |
|----------|------|--------------------------------------|
| frontend | 8080 | Static HTML served with Nginx        |
| backend  | 3000 | Node.js Express API (`/` returns JSON) |
| logger   | 4000 | Node.js microservice with status API |

---

## ⚙️ Technologies

- Docker / Docker Compose
- Node.js + Express
- Nginx (as static file server)
- GitHub Actions (CI/CD)
- Docker Hub (registry)

---

## 🧪 How to Run Locally

```bash
git clone https://github.com/YOUR_USERNAME/devops-full-app.git
cd devops-full-app
docker-compose up --build