# ABTalks Redesign - Hackathon Submission

This repository contains our submission for **Problem Statement 1 (Redesign ABTalks)**.

## Route Map
/
/dashboard
/day/12

## About the Project
We built a mobile-first, high-performance frontend using Next.js. To guarantee our redesign stood out and completely departed from the current ABTalks design, we implemented a custom **"Neo-Brutalist"** aesthetic. This features high-contrast light mode, thick black borders, solid primary colors, and bold typography—ensuring a completely fresh, modern direction.

### The Thoughtful Idea
To keep students motivated during late-night grinds, we implemented **Dopamine-Boosting Micro-Animations**. When a student successfully submits their GitHub and LinkedIn URLs on the Challenge Day page, the UI triggers a satisfying full-screen celebration sequence to reward their consistency.

### Testing Edge Cases
As per the requirements, we used mocked data instead of a production database. To test the edge cases (First day, Missed day, Empty profile), you can adjust the boolean values inside `src/data/mockDB.json`:
- Set `"hasMissedDay": true` to see the missed streak warning.
- Set `"firstDayState": true` to see the empty profile / Day 1 state.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Custom CSS Modules (No Tailwind)
- **Data:** Mock JSON

## AI Usage Log
Please see `PROMPTS.md` in the root directory for a full, atomic log of AI interactions and design decisions made during the build.
