# ✅ TypeScript Todo App

> *Built to learn TypeScript the right way — by actually building something.*

A full-stack Todo application with a React frontend and Express backend, fully written in TypeScript. Clean, fast, and (hopefully) crash-free.

🚀 **Live Demo** — *Coming soon on Vercel! Watch this space.*

---

## 📸 Preview

> *Screenshots / GIF coming soon once deployed*

---

## 🧠 Why This Exists

The best way to learn a language is to build something real with it. No hello worlds. No toy scripts. Just a full project — types, errors, and all.

This todo app started as a TypeScript learning exercise and turned into a proper full-stack application. Every file is typed. Every prop is declared. Every `any` was a lesson.

---

## ✨ Features

- 📝 Create, edit, and delete todos
- ✅ Mark todos as complete / incomplete
- 🔄 Persistent data — your tasks survive a page refresh
- ⚡ Fast and responsive UI with TailwindCSS
- 🔒 Type-safe from database to UI — end to end TypeScript
- 🌐 REST API backend with Express

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

### Database
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

### Deployment *(coming soon)*
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 📁 Project Structure

```
todo-app/
├── client/                  # React + TypeScript frontend
│   ├── src/
│   │   ├── components/      # UI components
│   │   ├── types/           # Shared TypeScript interfaces
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── tailwind.config.ts
│   └── tsconfig.json
│
├── server/                  # Express + TypeScript backend
│   ├── src/
│   │   ├── routes/          # API route handlers
│   │   ├── models/          # MongoDB models
│   │   ├── types/           # Type definitions
│   │   └── index.ts         # Entry point
│   └── tsconfig.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- A MongoDB instance (local or [MongoDB Atlas](https://www.mongodb.com/atlas))

---

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/todo-app.git
cd todo-app
```

---

### 2. Set up the backend

```bash
cd server
npm install
```

Create a `.env` file inside `/server`:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Start the dev server:

```bash
npm run dev
```

---

### 3. Set up the frontend

```bash
cd ../client
npm install
npm run dev
```

The app will be running at `http://localhost:5173`

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/todos` | Fetch all todos |
| `POST` | `/api/todos` | Create a new todo |
| `PATCH` | `/api/todos/:id` | Update a todo |
| `DELETE` | `/api/todos/:id` | Delete a todo |

---

## 🗺️ Roadmap

- [x] Basic CRUD operations
- [x] TypeScript throughout frontend and backend
- [x] MongoDB persistence
- [ ] Deploy on Vercel
- [ ] Authentication (JWT)
- [ ] Todo categories / priority levels
- [ ] Due dates and reminders
- [ ] Drag-and-drop reordering

---

## 🤝 Try It Out

Once deployed, the live link will be right here at the top. Feel free to use it — add your todos, complete them, delete them, judge the UI, and maybe even ⭐ the repo if you like what you see.

*You're welcome in advance. 😄*

---

## 📖 What I Learned

- Setting up TypeScript in both a Vite React project and an Express backend
- Writing typed API responses and sharing interfaces across frontend and backend
- Connecting Express to MongoDB with proper TypeScript models
- How much nicer it is to catch errors at compile time rather than runtime

---

## 📄 License

MIT — do whatever you want with it.

---

<div align="center">

Made with ☕ and a lot of TypeScript compiler errors

⭐ Star this repo if you found it useful!

</div>
