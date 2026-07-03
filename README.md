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
| Package Manager | pnpm |

## Project Structure

```
.
├── src/
│   ├── pages/         # Home, BusinessSolutions, SoftwareServices,
│   │                  # Products, EventManagement, About, Contact
│   ├── components/
│   │   ├── layout/    # Navbar, Footer
│   │   ├── shared/    # PageHero, SectionHeading, CTASection, GlobeLogo…
│   │   └── ui/        # shadcn/ui primitives (subset actually used)
│   ├── hooks/         # useScrollAnimation, useLenis
│   ├── lib/
│   │   └── api-zod/   # Zod schemas shared between API server and clients
│   └── App.tsx        # Router, AnimatePresence, Lenis init
├── public/            # favicon, robots.txt
│   └── attached_assets/ # AI-generated hero/background images
├── server/            # Lightweight Express API (health check + future routes)
└── package.json       # Consolidated package config
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
# Website (http://localhost:3000)
pnpm dev

# API server (if needed)
cd server
pnpm install
pnpm dev
```

### Type checking
```bash
pnpm run typecheck
```

### Build for production
```bash
pnpm run build
```

The build output will be in the `dist` directory.

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

## License

All rights reserved © Globe Extent LLP
## ...