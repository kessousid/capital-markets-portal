# Capital Markets Learning Portal

A full-stack web-based learning portal for capital markets education, built with React 18 + Vite on the frontend and Node.js + Express on the backend.

![Dashboard Preview](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react) ![Node](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=node.js) ![JWT](https://img.shields.io/badge/Auth-JWT-orange?style=flat) ![License](https://img.shields.io/badge/License-MIT-blue?style=flat)

---

## Features

- **Authentication** — Register / Login with JWT tokens persisted in localStorage
- **8 Curriculum Modules** — Sequentially unlocked; each requires passing the previous module's assessment
- **Animated Video Lessons** — Programmatic HTML5 scenes with SVG charts, timed bullet reveals, and Web Speech API narration (no video files)
- **Module Assessments** — 10 multiple-choice questions per module (80 total), instant feedback with explanations
- **Progress Tracking** — Per-user progress stored server-side; survives page refresh
- **Professional UI** — Navy + Gold financial design system, fixed sidebar, progress ring on dashboard
- **Certificate Banner** — Appears on the dashboard when all 8 modules are completed

---

## Curriculum

| # | Module | Topics |
|---|--------|--------|
| 1 | 🏦 Introduction to Capital Markets | Market structure, participants, primary vs secondary markets |
| 2 | 📈 Equity Markets & Stock Trading | Stocks, order types, valuation (DCF, P/E), indices |
| 3 | 💰 Fixed Income & Bond Markets | Bond pricing, yield curves, credit ratings, duration |
| 4 | 🏧 Money Markets & Short-Term Instruments | T-bills, repos, commercial paper, SOFR |
| 5 | 🔄 Derivatives: Options, Futures & Swaps | Calls/puts, futures, forwards, interest rate swaps |
| 6 | 📊 Portfolio Management & MPT | Modern Portfolio Theory, CAPM, factor investing |
| 7 | 🛡️ Risk Management & Risk Metrics | VaR, stress testing, Greeks, Expected Shortfall |
| 8 | ⚖️ Market Regulations & Compliance | SEC, Dodd-Frank, Basel III, ESG/SFDR, market abuse |

Each module contains **4 animated scenes (~3.5 min total)** plus a **10-question assessment** (70% pass threshold).

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, React Router v6 |
| Backend | Node.js, Express 4 |
| Auth | JSON Web Tokens (JWT), bcryptjs |
| Data | File-based (`server/data/users.json`) |
| Charts | Custom SVG components (12 chart types) |
| Audio | Web Speech API (browser TTS) |
| Styling | Custom CSS design system (no UI framework) |

---

## Project Structure

```
capital_Markets/
├── package.json                  ← root: concurrently runs both servers
├── server/
│   ├── index.js                  ← Express app (port 3001)
│   ├── routes/
│   │   ├── auth.js               ← POST /register, POST /login, GET /me
│   │   └── progress.js           ← PATCH /video, PATCH /quiz
│   └── data/
│       └── users.json            ← persistent user store
└── client/
    ├── vite.config.js            ← proxies /api → localhost:3001
    ├── src/
    │   ├── App.jsx               ← routing + protected route wrapper
    │   ├── App.css               ← complete design system
    │   ├── context/
    │   │   └── AuthContext.jsx   ← auth state + API helpers
    │   ├── data/
    │   │   ├── modules.js        ← 8 modules × 4 scenes, full SVG data
    │   │   └── assessments.js    ← 80 questions with explanations
    │   ├── components/
    │   │   ├── SceneRenderer.jsx ← 15 SVG chart component types
    │   │   ├── VideoPlayer.jsx   ← timer engine + TTS narration
    │   │   └── Navbar.jsx        ← fixed sidebar
    │   └── pages/
    │       ├── LoginPage.jsx
    │       ├── RegisterPage.jsx
    │       ├── Dashboard.jsx     ← module grid + progress ring
    │       ├── LearningPath.jsx  ← visual roadmap timeline
    │       ├── ModulePage.jsx    ← video player + assessment gate
    │       └── AssessmentPage.jsx
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/capital-markets-portal.git
cd capital-markets-portal

# Install all dependencies (root + server + client)
cd server && npm install && cd ../client && npm install && cd .. && npm install
```

### Running in Development

```bash
npm run dev
```

This uses `concurrently` to start:
- **Express API** on `http://localhost:3001`
- **Vite dev server** on `http://localhost:5173`

Open **http://localhost:5173** in your browser.

### First Time Setup

1. Open `http://localhost:5173`
2. Click **Create one** to register a new account
3. You'll land on the Dashboard — Module 1 is unlocked
4. Click a module card → watch the animated video lesson
5. When the video completes, the **Start Assessment** button unlocks
6. Score ≥ 70% to pass and unlock the next module

---

## API Reference

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| `POST` | `/api/auth/register` | No | Create account → `{token, user}` |
| `POST` | `/api/auth/login` | No | Login → `{token, user}` |
| `GET` | `/api/auth/me` | Bearer | Validate token, return user |
| `PATCH` | `/api/progress/video` | Bearer | Mark `{moduleId}` video watched |
| `PATCH` | `/api/progress/quiz` | Bearer | Save `{moduleId, score, passed}` |
| `GET` | `/api/health` | No | Server health check |

---

## Design Decisions

- **Sequential locking** — Module N requires Module N−1 to be completed (quiz passed)
- **Video gating** — Assessment button stays disabled until `VideoPlayer.onComplete` fires
- **File-based storage** — `users.json` is read/written per request; easy to swap to SQLite/PostgreSQL
- **No UI framework** — Pure CSS design system for zero bundle overhead
- **Web Speech API** — Browser-native TTS for narration; 🔊/🔇 toggle in player controls

---

## License

MIT
