# Globe Extent LLP

A premium multi-page corporate website for Globe Extent LLP — a multi-service business consulting firm with four divisions: Business Solutions, Software Services, Products, and Event Management.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/globe-extent/src/pages/` — 7 page components (Home, BusinessSolutions, SoftwareServices, Products, EventManagement, About, Contact)
- `artifacts/globe-extent/src/components/layout/` — Navbar, Footer
- `artifacts/globe-extent/src/components/shared/` — PageHero, SectionHeading, ServiceCard, CTASection, AnimatedSection
- `artifacts/globe-extent/src/hooks/` — useLenis, useScrollAnimation (with typed EASE tuple)
- `attached_assets/generated_images/` — AI-generated hero and background images
- `artifacts/globe-extent/src/index.css` — Brand CSS variables (navy, gold palette)

## Architecture decisions

- **Frontend-only**: No backend required — pure React SPA with React Router DOM and static content.
- **React Router DOM** (not wouter) with `BrowserRouter` using `basename={import.meta.env.BASE_URL}` and `AnimatePresence` for page transitions.
- **Lenis** smooth scroll integrated via `useLenis` hook with Framer Motion's `useAnimationFrame`.
- **TypeScript fix**: `ease` in Framer Motion variants must be typed as `[number, number, number, number]` (4-tuple), not `number[]`, to satisfy the `Easing` type. Stored as a named constant.
- **cloneElement pattern**: Icon ReactElements passed as props use `as React.ReactElement<any>` cast in cloneElement — acceptable tradeoff for component flexibility.

## Product

7-page premium corporate website: Home (interactive animated hero + division preview), Business Solutions (tabbed/accordion service explorer), Software Services, Products, Event Management, About Us, and Contact Us (dynamic hero via `?service=` query params).

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
