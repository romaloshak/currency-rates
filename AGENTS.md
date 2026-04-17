# Currency Rates

## Overview

A web application for tracking and displaying currency exchange rates.

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS v4
- React 19
- TanStack Query
- Vitest
- React Compiler (see `next.config.ts`)

## Project Architecture

FSD. Documentation - https://feature-sliced.design/docs/get-started/overview

## Code Conventions

- Use function components, not classes
- Follow existing naming patterns in the codebase
- Use ESLint and Prettier for code formatting
- Use Type as main type assertion
- Use classname library to keep clean class names
- Remember about accessibility and use at least sematic tags
- React Compiler is enabled: rely on automatic memoization by default—do not add `useMemo` / `useCallback` unless profiling shows a real hotspot or a non-React API requires a stable reference
- Split large screens: keep page components thin (data fetching + composition only).
  When a page grows beyond a small screenful of JSX or mixes several distinct UI blocks, extract sections into widgets/ or entities/ (one main component per file, clear names like FooSection).
  Prefer colocating feature-specific UI under a dedicated folder (e.g. widgets/currency-pair-screen/) rather than one oversized \*Page file.
- For page-specific state/derivations, create custom hooks in `src/fsd-pages/<page>/model/hooks/` and keep `ui.tsx` focused on declarative markup.

- To create a page:

1. Make a file for it and for page component;
2. Make another file in folder src/fsd-pages to follow FSD patterns

## Commands

- `pnpm run dev` - Start dev server
- `pnpm run lint` - Run linting
- `pnpm run build` - Build a production version

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->
