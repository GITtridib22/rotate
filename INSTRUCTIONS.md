# Hackathon Operating Instructions

## Core Workflow Rules
1. **Repository & History**: The project must be built in this workspace. Commits should be regular and reflect the actual progress (no large imported codebase or massive final commits).
2. **AI Usage Log & Git History**: For every completed feature:
   - **Update `PROMPTS.md`** with: Date, Feature name, Prompt summary, What was implemented, Files changed. (Never overwrite, only append).
   - **Create a Git commit** with a clear, descriptive message.
   - **Push the commit to GitHub.**
   - **Never combine** unrelated features into one commit.
   - **Keep a clean** development history.
3. **Memory & State Tracking**: For every completed feature, **simultaneously** update `INSTRUCTIONS.md` with the new current state/architecture decisions, AND append the prompt log to `PROMPTS.md`.
4. **Live Demo**: Ensure the final product is fully deployable (e.g., to Vercel/Netlify).

## Hackathon Specific Constraints & Info
- **Scope**: We only need to solve **ONE** of the three problem statements. Depth over coverage.
- **Tools & Setup**: Templates and boilerplates (like `create-next-app`) are explicitly allowed. "Breeth" is completely optional.
- **Deadline**: Sunday 9 Aug, 8:00 PM IST.
- **Deliverables**: Public GitHub Repo, Live deployed URL (Vercel/Netlify), and `PROMPTS.md`.
- **Bonus**: A demo walkthrough (video or in README) is helpful but not mandatory.

## Current State
- **Completed**: Initialized project, built all required routes (`/`, `/dashboard`, `/day/12`), completely overhauled design from Night Shift to Neo-Brutalism.
- **In Progress**: Final Verification and Walkthrough updates.
- **Upcoming**: Hackathon Submission.

*(Note to AI: Read this file whenever restarting or resuming the session to regain context.)*
