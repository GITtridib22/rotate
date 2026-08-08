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

## Feature 8: Final Design Polish (Orange & White Minimalist)
- **Date:** 2026-08-07
- **Prompt Summary:** User requested a crisp Orange, White, and Black theme, and wanted the buttons to be more "proper" and standard.
- **What was implemented:** Completely rewrote `globals.css` to adopt a crisp, energetic Orange and White palette. Changed backgrounds to pure white, text to deep black, and used a vibrant Orange (`#FF5722`) for highlights. Standardized the `.btn-primary` class to industry standards: solid orange background, white text, 8px border radius, and clean hover shadows. Removed gradients to maintain a clean, professional aesthetic.
- **Files Changed:** `src/app/globals.css`
- **Design Decisions:** Chose a highly energetic color scheme that perfectly fits a "Daily Challenge" / productivity app, ensuring a clean, modern, and completely distinct look from the original ABTalks dark-mode design.

## Feature 9: Git Repository Clean-up & Root Link
- **Date:** 2026-08-08
- **Prompt Summary:** "connect this rotate folder to the github repo https://github.com/GITtridib22/rotate.git"
- **What was implemented:** Restructured the project directory by moving all repository files and the `.git` directory from the nested `rotate/rotate` folder up to the workspace root `C:\Users\RASHMI\Documents\rotate`, and removed the empty nested folder. Verified the workspace root is directly connected to the remote repository.
- **Files Changed:** None (moved all files to workspace root, deleted nested folder).
- **Design/Technical Decisions:** Resolved a nested clone structure to align the git repository root with the active workspace directory, ensuring clean version control and straight-forward Vercel deployments.

## Feature 10: Custom Profile Avatar & Styling
- **Date:** 2026-08-08
- **Prompt Summary:** "Now, when the website is deployed on vercel, the users click on "Start the challenge" button. On clicking it, a page appears with a profile logo on the top right corner. Change it without changing anything else in the UI/UX and make sure the change is reflected in the github repo and obviously on the vercel deployed site"
- **What was implemented:** Generated a high-quality 3D developer avatar asset and saved it to the public folder. Updated the database to use the new avatar and optimized the avatar's CSS styling. Committed and pushed the changes to GitHub to trigger Vercel deployment.
- **Files Changed:** `src/data/mockDB.json`, `src/app/globals.css`, `public/avatar_3d.png`
- **Design/Technical Decisions:** Replaced the generic placeholder image with a premium custom-generated 3D developer avatar asset matching the green theme. Enhanced the CSS styling (`object-fit: cover`) to ensure the avatar fits the circular frame perfectly without distortion.

## Feature 11: Visually Enhancing README Documentation
- **Date:** 2026-08-08
- **Prompt Summary:** "update the readme on github and make it visually attractive while retaining the information about the project"
- **What was implemented:** Completely revamped `README.md` to be visually striking and modern. Added emoji headings, a clear route map layout table, descriptive lists for the "Dopamine-Boosting Micro-Animations" feature, interactive judge controls guidance, and clean visual structure.
- **Files Changed:** `README.md`
- **Design/Technical Decisions:** Updated obsolete design descriptions (such as old Neo-Brutalist references) to align with the final **Modern Soft UI** design details (cream background, green highlights, translucent panels) to ensure documentation matches the actual deployed product perfectly.

## Feature 12: Theme-Matched Minecraft Avatar
- **Date:** 2026-08-08
- **Prompt Summary:** "update the profile avatar to a minecraft character, but it should match the rest ofthe UI. Also update the prompts.md file with the last 2 prompts"
- **What was implemented:** Generated a custom pixelated Minecraft-style character head avatar that matches the site's green accent theme (`#3e8020`) and warm cream aesthetic. Replaced the profile avatar in the database with the new asset, and logged these interactions in `PROMPTS.md`.
- **Files Changed:** `src/data/mockDB.json`, `public/minecraft_avatar.png`, `PROMPTS.md`
- **Design/Technical Decisions:** Maintained aesthetic harmony by matching the color scheme of the generated pixel character to the site's design tokens (warm cream background, green accents), fitting within the soft UI design system.

## Feature 13: Interactive Minecraft Stats Modal
- **Date:** 2026-08-08
- **Prompt Summary:** "okay now make sure that when the user clicks on the profile icon, it shows their performnce and platform usage analytics, and make sure this matches the UI and also, the minecraft part of the logo. Update the prompts.md"
- **What was implemented:** Added an interactive "Developer Character Sheet" modal overlay triggered by clicking the user's Minecraft profile avatar. Designed stats tracking (Tasks Solved, Streak Blocks, Server Rank, and Efficiency) alongside an XP progress bar and Minecraft-themed achievements (Wood Age, Iron Age, Diamond Age). Updated global CSS with modal styles (blur background, glass card, grids, bar transitions).
- **Files Changed:** `src/app/dashboard/page.js`, `src/app/globals.css`, `PROMPTS.md`
- **Design/Technical Decisions:** Implemented gaming-inspired mechanics (leveling, XP tracking, block/ore milestones) to align with the Minecraft pixel logo. Used Geist Mono font for retro data readouts. Styled with custom glassmorphism and theme-matching green accents to fit the Modern Soft UI system.

## Feature 14: Enhanced Stats Contrast
- **Date:** 2026-08-08
- **Prompt Summary:** "make the stat box opacity darker since it is not visible clearly, update thee prompts.md"
- **What was implemented:** Modified the `.stat-box` background style to use a darker translucent panel styling (`rgba(0, 0, 0, 0.05)`) with an outline border to improve visual contrast and readability inside the glassmorphic modal overlay.
- **Files Changed:** `src/app/globals.css`, `PROMPTS.md`
- **Design/Technical Decisions:** Solved contrast issues between the white stat box backgrounds and the white translucent modal card background by changing to a slightly darker, recessed panel style.




