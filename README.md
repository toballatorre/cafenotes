# ☕ CafeNotes

**CafeNotes** is a personal project focused on recording, analyzing, and sharing coffee brewing experiments and recipes.  
The project is organized as a **monorepo** with a **Next.js** frontend and a **NestJS** backend, powered by **PostgreSQL**.

---

## 🧱 Project Structure

cafenotes/   
├── cn-frontend/ # Web app (Next.js)   
├── cn-backend/ # REST API (NestJS)   
└── .env # Environment variables


---

## 🚀 Tech Stack

- **Frontend:** Next.js, TypeScript  
- **Backend:** NestJS, TypeScript  
- **Database:** PostgreSQL  
- **Package Manager:** pnpm  
- **Containers:** Docker + Docker Compose  

---

## 🧰 Prerequisites

- Node.js (v20+)
- pnpm
- Docker
- PostgreSQL

---

## 🧪 Development
Frontend: http://localhost:3000   
Backend API: http://localhost:4000

## 🧭 Roadmap

### Phase 1: Project Setup & Docker
- [x] Create backend project (NestJS) → Hello World
- [x] Create frontend project (Next.js) → Hello World
- [x] Prepare Backend Dockerfile
    - [x] Install dependencies
    - [x] Compile TypeScript
    - [x] Expose backend port
- [ ] Prepare Frontend Dockerfile
    - [ ] Install dependencies
    - [ ] Build Next.js production
    - [ ] Expose frontend port
- [ ] Configure Docker Compose
    - [ ] Include backend, frontend, PostgreSQL
    - [ ] Define volumes, ports, and networks
    - [ ] Test inter-service communication

### Phase 2: Backend Development
- [ ] Authentication & User Management
    - [ ] Implement JWT authentication (signup, signin)
    - [ ] Protect routes with JWT guards
    - [ ] Add password hashing
    - [ ] Define user roles
- [ ] Coffee Logs API
    - [ ] Design database schema
    - [ ] CRUD endpoints
    - [ ] Filtering and searching

### Phase 3: Frontend Development
- [ ] Pages for coffee logs
    - [ ] Create new log
    - [ ] Edit log
    - [ ] List logs with filters
- [ ] Authentication
    - [ ] Login/Signup forms
    - [ ] Protect routes based on JWT
- [ ] Data visualization (optional)

