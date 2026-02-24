# Execute Plan

Read `tasks/todo.md` before doing anything else. If the file does not exist or contains no plan content (no `## Tasks` section, no task entries), stop and tell the user to run `/create-plan` first. Do not proceed without an approved plan.

Also read `tasks/lessons.md` if it exists. Apply any relevant lessons to avoid repeating past mistakes.

## Implementation rules

- Write elegant, minimal, modular code. Favor clarity over cleverness.
- Adhere strictly to existing code patterns, conventions, and best practices already present in the project. When in doubt, match what is already there.
- Include clear comments and documentation within the code where they add value — explain *why*, not *what*.
- Do not introduce new dependencies, frameworks, or architectural patterns unless the plan explicitly calls for them.

## Progress tracking

As you work through each task, update `tasks/todo.md` in real time:

1. **Starting a task:** Change its emoji from `🟥` to `🟨` (e.g., `- [ ] 🟨 **Step N: Name**`).
2. **Completing a subtask:** Flip its checkbox from `- [ ]` to `- [x]`.
3. **Finishing a task:** Change its emoji from `🟨` to `🟩` and check the box (e.g., `- [x] 🟩 **Step N: Name**`).
4. **Recalculate progress:** After each task completes, update the `**Overall Progress:** \`X%\`` line at the top. Calculate the percentage as `(completed tasks / total tasks) * 100`, rounded to the nearest whole number.

## Execution order

Work through the plan **step by step, in the order listed**. Do not skip ahead or parallelize tasks unless the plan explicitly marks them as independent. Finish one task entirely before moving to the next.

## When all tasks are complete

Once every task is marked `🟩` and progress is at 100%, tell the user the implementation is complete and suggest they run `/review` to review the results.
