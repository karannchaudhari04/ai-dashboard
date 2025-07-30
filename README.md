# 🧠 AI-Powered Analytics Dashboard

A sleek, full-stack AI-powered analytics dashboard built using **React**, **Tailwind CSS**, **Chart.js**, **Node.js**, and **MongoDB Atlas**. It features **JWT-authenticated login**, **admin/user role-based access control**, and **real-time data visualization** using dynamic charts.

## 🌐 Live Demo
🔗 [Click here to view the live demo](https://ai-dashboard-nine-topaz.vercel.app/)  

---

## 🧠 AI Tools Used

| Tool | Purpose |
|------|---------|
| **ChatGPT (GPT-4)** | Core assistant for backend logic, JWT role-based auth, UI components, and bug fixes |
| **GitHub Copilot** | Accelerated development with code suggestions and boilerplate generation |
| **Figma / Dribbble / v0.dev** | UI design inspiration for layout, color schemes, and responsive structure |
| **Cursor IDE** | AI-powered coding experience with smart JSX suggestions and debugging |

---

## 💻 Tech Stack

### 🔹 Frontend
- [React (Vite)](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chart.js](https://www.chartjs.org/)
- [Axios](https://axios-http.com/)
- Zustand (for state management)

### 🔹 Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [JWT Authentication](https://jwt.io/)
- Role-based Access Control (RBAC)

### 🔹 Deployment
- Frontend: [Vercel](https://vercel.com/)
- Backend: [Render](https://render.com/)

---

## 📊 Key Features

- 🔐 **Secure Authentication** – Signup/Login with JWT tokens
- 👥 **Role-Based Access** – Admin-only protected analytics routes
- 📈 **Real-Time Analytics Dashboard** – Simulated using `setInterval()` with mock API data
  - 📦 Inventory Utilization
  - 📣 Campaign Engagement
  - 💰 Channel ROI
  - 🕵️ Viewability Fraud
  - 📊 CTR vs Budget (×2)
- 📅 **Date Range Filters** – (Last 7 / 30 days / custom)
- 📱 **Responsive Layout** – Mobile-friendly, minimal dark UI
- ⚙️ **Axios Interceptors** – Auto logout on token expiry (401)

---

## ⚙️ Installation & Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/karannchaudhari04/ai-dashboard.git
cd ai-dashboard

# 2. Start Frontend
cd client
npm install
npm run dev

# 3. Start Backend (in another terminal)
cd ../server
npm install
npm run dev
