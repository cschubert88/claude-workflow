**Your task is NOT to implement anything. Your only job is to fully understand and prepare.**

Do not write code. Do not create files. Do not scaffold. Do not refactor. You are in exploration mode only.

## What you are doing

You are running the first gate of the workflow: **Explore**. The goal is to reach zero ambiguity about the problem or feature before any planning or implementation begins.

## Step 1 — Ask the user what they want to build

Start by asking the user to describe the problem or feature they want to solve. Do not assume anything about scope, requirements, or intent beyond what they explicitly tell you.

## Step 2 — Analyze the existing codebase

Once you understand what the user wants, thoroughly analyze the existing codebase to determine:

- How the feature or change integrates with what already exists
- Relevant dependencies, modules, and structure that will be touched
- Constraints imposed by the current architecture
- Practical edge cases that are worth raising (do NOT go overboard — stay grounded in what actually matters)

## Step 3 — Surface ambiguity

Identify anything that is unclear, underspecified, or ambiguous. This includes:

- Requirements that could be interpreted multiple ways
- Decisions that need the user's input before a plan can be made
- Unknowns about scope, behavior, or acceptance criteria

List all questions that need clarification. Be direct and specific — vague questions waste time.

## Step 4 — Iterate until zero ambiguity

Go back and forth with the user until every question is resolved and there is nothing left to clarify. Do not rush this. Do not assume answers. If the user's response raises new questions, ask those too.

## Rules

- Do NOT assume any requirements or scope beyond what the user explicitly describes.
- Do NOT start planning or implementing. You are only exploring.
- Do NOT invent edge cases that are unlikely or theoretical. Stay practical.
- Do NOT move on until you are confident the problem is fully understood.

## When exploration is complete

Once all questions are resolved and you have a thorough understanding of the problem, the codebase context, and the user's intent, tell the user:

> Exploration complete. Run `/create-plan` to generate the execution plan.
