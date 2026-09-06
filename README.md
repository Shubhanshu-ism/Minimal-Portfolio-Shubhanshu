<div align="center">

# Shubhanshu Jain — Minimal Portfolio & Case Studies

[![Live Demo](https://img.shields.io/badge/Live_Demo-minimal--portfolio-blue?style=for-the-badge&logo=vercel)](https://minimal-portfolio-shubhanshu-dark-l.vercel.app/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

A clean, minimalist, high-performance developer portfolio built with React 19, Vite, and Tailwind CSS. Showcasing production engineering case studies, scalable backend systems, autonomous AI agents, and competitive programming achievements.

[**Explore Live Portfolio ↗**](https://minimal-portfolio-shubhanshu-dark-l.vercel.app/)

</div>

---

## ⚡ Key Highlights & Metrics

- **20s → 0.3s Latency Reduction**: Eliminated N+1 queries, optimized multi-table joins, and streamlined encrypted data processing in fintech payment panels.
- **1.5M+ Rows In-Memory Export**: Engineered high-throughput CSV export service streaming 1.5M+ rows in under 15s with global concurrency locks.
- **60% Support Overhead Reduction**: Designed and deployed autonomous multi-agent LLM systems (LangGraph, Flowise) for Vedix and SkinKraft.
- **GoPaisa Report ([myreport.gopaisa.com](http://myreport.gopaisa.com))**: Production campaign analytics dashboard tracking 92 campaigns and 228K+ clicks with Google OAuth 2.0 and RBAC.
- **Competitive Programming Credentials**:
  - **CodeChef**: 2029 (5 Star) · Global Rank 14/32K (Starters 199)
  - **LeetCode**: 2010 (Knight) · Global Rank 77/31K (Weekly 463)
  - **Codeforces**: 1527 (Specialist) · Top 2.5% (Round 1054)
  - **IIT (ISM) Dhanbad**: B.Tech in Electrical Engineering · JEE Advanced: Top 0.7%

---

## ✨ Features

- **Apple-Inspired Minimalist Aesthetics**: Refined typography, subtle borders, custom scrollbar, and clean layout hierarchy.
- **Seamless Dark & Light Mode**: Instant theme switching powered by Tailwind CSS and React Context with zero flash of unstyled content (FOUC).
- **In-Depth Case Studies**: Dedicated case-study routing for professional work (GoPaisa, TableSprint, IncNut) and personal products (PM2 Auto Recovery Alerts, AI Compare, MegaBlog).
- **Route-Level Code Splitting**: Accelerated initial page loads via `React.lazy` and `Suspense`.
- **Fluid Page Transitions**: Animated route transitions orchestrated using Framer Motion `AnimatePresence`.
- **SEO & OpenGraph Ready**: Complete metadata tags, Twitter cards, and responsive favicons for clean social link sharing.
- **Accessible & Responsive**: Semantic HTML tags (`<nav>`, `<main>`, `<section>`, `<header>`), keyboard-friendly focus outlines, and mobile-optimized layouts.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend** | React 19, Vite, Tailwind CSS, Lucide React, Framer Motion |
| **State & Navigation** | React Router v7, React Context API |
| **Backend & Infra (Showcased)** | Node.js, Express, MongoDB, PostgreSQL, Docker, PM2, Nginx, Redis |
| **AI / ML (Showcased)** | LangChain, LangGraph, Flowise, Google Gemini API, DeepSeek |

---

## 📂 Project Structure

```
├── public/
│   ├── favicon.svg          # Custom minimalist SVG favicon
│   └── vite.svg
├── src/
│   ├── assets/              # Static media assets
│   ├── components/
│   │   ├── Footer.jsx       # Global footer with social links & email copy
│   │   ├── PageWrapper.jsx  # Framer motion page transition wrapper
│   │   ├── PillNav.jsx      # Floating navigation pill with theme toggle
│   │   └── ThemeProvider.jsx# Dark/light theme context & persistence
│   ├── data/
│   │   └── user.js          # Centralized data model (experience, projects, skills)
│   ├── pages/
│   │   ├── AboutPage.jsx    # Bio, technical skills, education & CP stats
│   │   ├── ContactPage.jsx  # Direct contact details & inquiry form
│   │   ├── HomePage.jsx     # Hero, impact metrics, works & featured products
│   │   ├── ProjectDetailsPage.jsx # Deep-dive case studies & architecture
│   │   └── WorkPage.jsx     # Timeline of professional experience & side projects
│   ├── App.jsx              # App root with lazy routes & transitions
│   ├── index.css            # Tailwind directives & CSS variables
│   └── main.jsx             # React entry point
├── index.html               # SEO metadata, OpenGraph tags, theme color
├── package.json
└── tailwind.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed on your machine
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shubhanshu-ism/Minimal-Portfolio-Shubhanshu.git
   cd Minimal-Portfolio-Shubhanshu
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Create a production build:**
   ```bash
   npm run build
   ```

---

## 📬 Contact & Connect

- **Portfolio**: [minimal-portfolio-shubhanshu-dark-l.vercel.app](https://minimal-portfolio-shubhanshu-dark-l.vercel.app/)
- **GitHub**: [@Shubhanshu-ism](https://github.com/Shubhanshu-ism)
- **LinkedIn**: [shubhanshu-jain-iit-ism](https://www.linkedin.com/in/shubhanshu-jain-iit-ism)
- **Codeforces**: [Tanjiro_cp](https://codeforces.com/profile/Tanjiro_cp)
- **Email**: [shubhanshujain2233@gmail.com](mailto:shubhanshujain2233@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE) — feel free to use it as inspiration for your own portfolio.
