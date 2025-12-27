# 🚀 Quick Start Guide

## Single Command to Run Everything

### First Time Setup (One Time Only)
```bash
npm run setup
```

This will install all dependencies for both backend and frontend.

### Run the Website (Every Time)
```bash
npm start
```

That's it! This single command will:
- ✅ Start the backend server (port 5000)
- ✅ Start the frontend React app (port 3000)
- ✅ Show colored output for both servers

---

## What You'll See

After running `npm start`, you'll see:
- **SERVER** (cyan) - Backend API running on http://localhost:5000
- **CLIENT** (green) - Frontend app running on http://localhost:3000

Open your browser to: **http://localhost:3000**

---

## Alternative Commands

- `npm run dev` - Same as `npm start` (runs both servers)
- `npm run server` - Run only backend
- `npm run client` - Run only frontend
- `npm run build` - Build for production

---

## Troubleshooting

**If you get "command not found" errors:**
```bash
npm run setup
```

**If ports are already in use:**
- Change `PORT=5000` in `.env` file
- React will automatically use next available port

---

That's all you need! 🎉


