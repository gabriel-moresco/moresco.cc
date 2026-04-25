# AGENTS.md

This project is my personal website [moresco.cc](https://moresco.cc)

## Rules

- Prefer using arrow functions (`const myFunction = ({ arg1, arg2 }: MyType) => { ... }`)
- Prefer using `type` instead of `interface` when applicable.
- Never start the dev server (e.g., `pnpm dev`), since it's already running at `http://localhost:3000`. Just use the existing server.
- Do not edit files inside `**/components/ui/` directly. These are the shadcn/ui shared base components for the app; when a component needs visual adjustments, change the `className` where the component is used instead of modifying the base component file.
- All UIs must be responsive and work correctly on both mobile and desktop screen sizes.
- When defining the size of an element with Tailwind classes, use `size-{n}` instead of `w-{n} h-{n}` (e.g., `size-4` instead of `w-4 h-4`).
- Always use the `frontend-design` skill when designing or implementing UI.

## Commands

```bash
pnpm build       # Build the Next.js project
pnpm check       # Check the code with ESLint and Prettier
pnpm fix         # Fix the code errors with ESLint and Prettier
pnpm typecheck   # Type check the code with TypeScript
```
