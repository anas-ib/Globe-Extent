# Globe Extent LLP — Corporate Website

A premium, multi-page marketing website for **Globe Extent LLP**, a multi-service consulting firm with four specialized divisions.

## Overview

| Division | Services |
|---|---|
| **Business Solutions** | Corporate compliance, taxation, business setup, legal structuring |
| **Software Services** | Digital transformation, custom software, web & mobile platforms |
| **Products** | Private label manufacturing, automation systems, commercial products |
| **Event Management** | Luxury corporate events, product launches, celebrations |

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 7 + TypeScript |
| Styling | Tailwind CSS v4 |
| Routing | React Router DOM v7 |
| Animation | Framer Motion + Lenis smooth scroll |
| Icons | Lucide React |
| UI Primitives | shadcn/ui (Radix UI) |
| Package Manager | pnpm (workspace monorepo) |

## Project Structure

```
.
├── artifacts/
│   ├── globe-extent/          # Frontend React SPA (main website)
│   │   ├── src/
│   │   │   ├── pages/         # Home, BusinessSolutions, SoftwareServices,
│   │   │   │                  # Products, EventManagement, About, Contact
│   │   │   ├── components/
│   │   │   │   ├── layout/    # Navbar, Footer
│   │   │   │   ├── shared/    # PageHero, SectionHeading, CTASection, GlobeLogo…
│   │   │   │   └── ui/        # shadcn/ui primitives (subset actually used)
│   │   │   ├── hooks/         # useScrollAnimation, useLenis
│   │   │   └── App.tsx        # Router, AnimatePresence, Lenis init
│   │   └── public/            # favicon, robots.txt
│   └── api-server/            # Lightweight Express API (health check + future routes)
├── lib/
│   └── api-zod/               # Zod schemas shared between API server and clients
├── attached_assets/
│   └── generated_images/      # AI-generated hero/background images
└── scripts/
    └── post-merge.sh          # Post-merge setup script (pnpm install)
```

## Getting Started

### Prerequisites
- Node.js 24+
- pnpm 10+

### Install dependencies
```bash
pnpm install
```

### Run development server
```bash
# Website (http://localhost:21160)
pnpm --filter @workspace/globe-extent run dev

# API server (http://localhost:8080/api)
pnpm --filter @workspace/api-server run dev
```

### Type checking
```bash
pnpm run typecheck
```

### Build for production
```bash
pnpm run build
```

## Design System

| Token | Value |
|---|---|
| Primary (Dark Navy) | `#0D1F3C` |
| Accent (Premium Gold) | `#C9A84C` |
| Heading font | Playfair Display (serif) |
| Body font | DM Sans (sans-serif) |

## Pages

| Route | Page |
|---|---|
| `/` | Home — Hero, Divisions Preview, Trust section |
| `/business-solutions` | Business Solutions — Tabbed service explorer |
| `/software-services` | Software Services |
| `/products` | Products |
| `/event-management` | Event Management |
| `/about` | About Us |
| `/contact` | Contact — Lead capture form |

## Deployment

The site is deployed via **Replit Autoscale**. The `globe-extent` artifact serves as a static SPA; the `api-server` artifact handles `/api` routes.

- Production URL: `https://globe-extent--anazibrahim.replit.app`
- Static files: `artifacts/globe-extent/dist/public/`
- Health check: `GET /api/healthz`

## License

All rights reserved © Globe Extent LLP
