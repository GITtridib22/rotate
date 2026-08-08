# 🚀 ABTalks Redesign — Hackathon Submission

This repository contains our entry for **Problem Statement 1 (Redesign ABTalks)**. We've built a mobile-first, high-performance web experience focused on boosting student consistency and engagement.

---

## 🎨 Design & Aesthetic
To guarantee our redesign stands out and completely departs from the original ABTalks design, we implemented a custom **"Modern Soft UI"** aesthetic:
*   **Warm & Engaging Palette:** A sleek cream background (`#f7d3a6`) paired with vibrant green accents (`#3e8020`).
*   **Tactile Cards:** Translucent, glassmorphic glass cards (`backdrop-filter`) with 24px rounded corners and subtle, colorful drop-shadows.
*   **Polished Details:** Fluid micro-animations on interactive elements and custom 3D developer avatars for user profiles.

---

## 🗺️ Route Map
| Route | Page | Description |
| :--- | :--- | :--- |
| `/` | **Landing Page** | The entry point featuring a 3-step timeline outlining the challenge. |
| `/dashboard` | **Student Dashboard** | The heart of the app showing progress, current streak stats, and today's task. |
| `/day/[id]` | **Challenge Day** | A focused, distraction-free interface to view daily tasks and submit proof of work. |

---

## ✨ Key Features & Innovation

### 🧠 The "Thoughtful Idea": Dopamine-Boosting Micro-Animations
To keep students motivated during late-night grinds, we implemented satisfying rewards for consistency:
*   **Instant Gratification:** Submitting proof of work triggers a full-screen celebration sequence with custom animation effects.
*   **Consistency Loop:** Visual reinforcement when updating streaks, making consistency feel rewarding.

### 🕹️ Interactive Judge Controls
Testing edge cases should be frictionless. We built a floating **Judge Controls Panel** right into the `/dashboard` UI:
*   **Normal:** View the dashboard in its active state with streak statistics.
*   **Missed Day:** Simulates the warning state when a student has missed a challenge day.
*   **Empty Profile / Day 1:** Simulates the clean-slate environment of a student's very first day.
*   *(Alternatively, mock parameters can be customized manually inside [mockDB.json](file:///C:/Users/RASHMI/Documents/rotate/src/data/mockDB.json))*

---

## 🛠️ Tech Stack
*   **Framework:** Next.js (App Router)
*   **Styling:** Custom CSS (No external CSS frameworks for maximum flexibility)
*   **Data Layer:** Mock JSON DB ([mockDB.json](file:///C:/Users/RASHMI/Documents/rotate/src/data/mockDB.json))
*   **Deployment:** Vercel

---

## 🤖 AI Usage Log
Please see [PROMPTS.md](file:///C:/Users/RASHMI/Documents/rotate/PROMPTS.md) in the root directory for a full, atomic log of AI interactions, prompts used, and design decisions made throughout the project.
