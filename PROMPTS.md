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

## Feature 3: Student Dashboard (/dashboard)
- **Date:** 2026-08-07
- **Prompt Summary:** Autonomous execution based on approved implementation plan.
- **What was implemented:** Built the Dashboard page rendering mock data (simulating a student). Handled dynamic UI states: first day empty state, active streak progress bar, missed day warning, and today's task card.
- **Files Changed:** `src/app/dashboard/page.js`, `src/app/globals.css`
- **Design Decisions:** Used a large, neon-glowing circular stat for the current streak. Added distinct visual flags for edge cases (missed days). Included server-side reading of `mockDB.json` for realistic mock data binding.

## Feature 4: Challenge Day (/day/12)
- **Date:** 2026-08-07
- **Prompt Summary:** Autonomous execution based on approved implementation plan.
- **What was implemented:** Built the Challenge Day page with a distraction-free reading zone and a form to submit GitHub/LinkedIn URLs. Implemented the 'Thoughtful Idea': a dopamine-boosting success micro-animation when the form is submitted.
- **Files Changed:** `src/app/day/[id]/page.js`, `src/app/globals.css`
- **Design Decisions:** Leveraged Next.js App Router dynamic routes (`[id]`). Made the page a Client Component to handle form state and conditional rendering of the success celebration animation, directly tying into the "late night coding morale boost" concept.

## Feature 5: Edge Case Demo Controls & Next.js 15 Fixes
- **Date:** 2026-08-07
- **Prompt Summary:** User caught that judges test on live URLs, so mock data needed UI toggles. Also caught a Next.js 15 dynamic route bug.
- **What was implemented:** Added a floating "Judge Controls" panel to `/dashboard` to toggle between Normal, Missed Day, and Empty Profile states directly on the live deployment. Created `route-map.txt`. Fixed a Next.js 15 breaking change where `params` must be unwrapped with `React.use()`.
- **Files Changed:** `src/app/dashboard/page.js`, `src/app/globals.css`, `src/app/day/[id]/page.js`, `route-map.txt`
- **Design Decisions:** Built the demo panel specifically for hackathon judging convenience without needing a real backend to trigger edge cases.

## Feature 6: Complete UI Overhaul (Pivot to Neo-Brutalism)
- **Date:** 2026-08-07
- **Prompt Summary:** User stated the dark mode neon aesthetic was 99% similar to the current ABTalks website. Requested a full UI/UX change.
- **What was implemented:** Completely rewrote `globals.css` to pivot the entire application to a "Neo-Brutalist" design. Switched from dark mode to a stark cream light mode. Replaced soft glowing shadows and glassmorphism with thick black borders, solid flat colors, and sharp offset drop-shadows. Updated all tracking files to reflect this change.
- **Files Changed:** `src/app/globals.css`, `README.md`, `PROGRESS.md`, `INSTRUCTIONS.md`
- **Design Decisions:** Chose Neo-Brutalism to guarantee a "completely new, clean, and modern direction" that acts as the polar opposite of a typical dark mode site, ensuring no accusations of cloning.

## Feature 7: Final Design Polish (Modern Soft UI)
- **Date:** 2026-08-07
- **Prompt Summary:** User found the Neo-Brutalism aesthetic too harsh and retro, but loved the unique color palette. Requested a more modern look while keeping the colors.
- **What was implemented:** Completely rewrote `globals.css` again to pivot to a "Modern Soft UI" aesthetic. Retained the Cream, Hot Pink, and Electric Blue palette. Replaced the harsh 4px solid black borders with subtle 1px translucent borders. Replaced blocky black shadows with premium, diffuse, colored drop-shadows. Increased border radiuses to 24px and softened the typography with text gradients instead of aggressive text-shadows.
- **Files Changed:** `src/app/globals.css`
- **Design Decisions:** Blended the playfulness of the custom color palette with the premium "soft UI" feel of top-tier modern apps (like Stripe or Vercel) to satisfy the "completely new, clean, and modern direction" requirement without looking dated.
