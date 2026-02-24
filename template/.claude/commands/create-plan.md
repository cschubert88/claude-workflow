Before generating a plan, check whether any exploration has happened in this conversation. If no `/explore` command was run and no substantive codebase investigation took place, stop and tell the user:

> "It looks like we haven't explored the codebase yet. Run `/explore` first so I have enough context to build an accurate plan."

Do not proceed further until exploration has been done.

---

## Generate the plan

Based on everything discussed so far in this conversation — the user's goal, the codebase exploration, and any decisions made — produce a markdown execution plan.

Write the plan to `tasks/todo.md`, overwriting any existing content. Create the `tasks/` directory if it does not exist.

Use this **exact** format:

```markdown
# Feature Implementation Plan

**Overall Progress:** `0%`

## TLDR
Short summary of what we're building and why.

## Critical Decisions
Key architectural/implementation choices made during exploration:
- Decision 1: [choice] — [brief rationale]
- Decision 2: [choice] — [brief rationale]

## Tasks

🟥 = To Do | 🟨 = In Progress | 🟩 = Done

- [ ] 🟥 **Step 1: [Name]**
  - [ ] 🟥 Subtask 1
  - [ ] 🟥 Subtask 2

- [ ] 🟥 **Step 2: [Name]**
  - [ ] 🟥 Subtask 1
  - [ ] 🟥 Subtask 2
```

## Rules for the plan content

- Keep steps clear, minimal, and concise.
- Design for modularity and elegance.
- Steps must integrate seamlessly within the existing codebase — respect current patterns, conventions, and structure.
- Do NOT add extra scope or unnecessary complexity beyond what was explicitly discussed during exploration. Stick to what was agreed upon.
- Fill in the TLDR with a one-to-two sentence summary of the feature.
- Fill in Critical Decisions with the key architectural and implementation choices that came up during exploration. If none were explicitly discussed, note the most important implicit decisions you are making.
- Break the work into logical, ordered steps. Each step should have concrete subtasks.
- All checkboxes start unchecked. All status indicators start as 🟥 (To Do).

## After writing the file

Tell the user:

> Plan written to `tasks/todo.md`. It's still not time to build. Review the plan, adjust if needed, then run `/execute` to implement.
