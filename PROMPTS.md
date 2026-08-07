# AI Usage Log

This file tracks the AI prompts and interactions used to build this project, as required by the hackathon rules.

## Feature 1: Project Initialization & Theme Setup
- **Date:** 2026-08-07
- **Prompt Summary:** "Read the ps1ABtalks.txt this is gonna be yr problem statement" (followed by AI planning phase).
- **What was implemented:** Initialized Next.js (App Router), created `src/data/mockDB.json`, and set up global `index.css` with the "Night Shift" dark mode aesthetics and micro-animations.
- **Files Changed:** `package.json`, `src/app/globals.css`, `src/data/mockDB.json`
- **Design Decisions:** Chose a deep dark mode with neon purple accents (`#7c3aed`) to reduce eye strain for late-night coding sessions. Built utility classes for glassmorphism (`.glass-card`).

## Feature 2: Landing Page (/)
- **Date:** 2026-08-07
- **Prompt Summary:** Autonomous execution based on approved implementation plan.
- **What was implemented:** Built the root landing page with a hero section ("60 Days to Get Noticed"), a 3-step "How it Works" visual timeline, and a call-to-action linking to the dashboard. Applied custom CSS for typography and micro-animations.
- **Files Changed:** `src/app/page.js`, `src/app/globals.css`
- **Design Decisions:** Used a vertical timeline with numbered circular nodes and connecting lines to visually explain the ABTalks process clearly. Removed default Next.js boilerplate.
