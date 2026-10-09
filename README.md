# Apply Varsity Users Dashboard UI/UX

## Overview

Standalone frontend UI/UX prototype for the Apply Varsity education consultancy platform.

## Purpose

Establish a scalable engineering foundation for future role-specific dashboard experiences. This repository currently contains route placeholders only, with no backend or authentication.

## Planned User Panels

- **Admin** — first dashboard to be implemented in later sprints.
- **Counsellor** — planned.
- **Student** — planned.

## Technology Stack

React, Vite, JavaScript, Tailwind CSS, React Router, Lucide React, and Recharts. ESLint checks JavaScript and React code. Lucide and Recharts are installed for future sprints and are not yet used in the UI.

Tailwind uses the official `@tailwindcss/vite` plugin and the CSS import in `src/styles/globals.css`; no legacy PostCSS or Tailwind configuration is needed.

## Local Setup

Use Node.js 22.12+ on the 22.x line, or Node.js 24+. Bootstrap verified with Node.js 24.14.0 and npm 11.9.0.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. Directly visit `/`, `/admin`, `/counsellor`, or `/student` to inspect the placeholders. Unknown routes show a minimal not-found page.

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build production assets into `dist/` |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |

Production hosting must serve `index.html` for application routes so browser-history routing works on direct visits and refreshes. Vite's development and preview servers handle this locally.

## Project Structure

```text
docs/                      # Product context and implementation guidance
src/
  app/router.jsx           # Route configuration
  assets/
  components/
    ui/
    layout/
    dashboard/
  data/
  hooks/
  layouts/
  pages/
    FoundationPage.jsx
    NotFoundPage.jsx
    admin/AdminPage.jsx
    counsellor/CounsellorPage.jsx
    student/StudentPage.jsx
  styles/globals.css       # Tailwind entry
  utils/
  App.jsx                  # Application composition
  main.jsx                 # React mount and global stylesheet
```

Empty future directories contain only `.gitkeep` files. Add shared components, layouts, hooks, utilities, and data when their use cases arrive.

## Current Development Status

**Sprint 0.1:** Complete — Repository Bootstrap & Engineering Foundation.

**Sprint 0.2:** Product context/documentation established.

**Next:** Sprint 1 — Design System & UI Primitives (not started).

**Current implementation:** Engineering foundation only.

Admin, Counsellor and Student dashboard UI implementation has NOT started. The role routes are plain engineering placeholders, not dashboard designs. No API integration, authentication, business features, datasets, or theme system exists yet.

## Development Roadmap

- **Sprint 0:** Foundation & Context (0.1 and 0.2 complete).
- **Sprint 1:** Design System & UI Primitives.
- **Sprints 2–9:** Shared shell, Admin overview/operations/analytics, responsive polish, multi-role preparation and Admin QA.
- **Phases II–V:** Counsellor, Student, cross-role polish and main Apply Varsity integration planning.

See the [Implementation Roadmap](docs/IMPLEMENTATION_ROADMAP.md) for objectives, deliverables, non-goals and checkpoints. Future work starts only when requested.

## Project Documentation

The supplied product context describes the wider Apply Varsity ecosystem; planned modules are not claims of functionality in this prototype. Read the relevant documents before implementation.

- [Product Context](docs/PRODUCT_CONTEXT.md) — ecosystem, lifecycle and known operational context.
- [Module Architecture](docs/MODULE_ARCHITECTURE.md) — domains, relationships, navigation baseline and frontend responsibilities.
- [Role Experiences](docs/ROLE_EXPERIENCES.md) — distinct Admin, Counsellor and Student priorities.
- [Admin Dashboard Requirements](docs/ADMIN_DASHBOARD_REQUIREMENTS.md) — management questions, information hierarchy and operational states.
- [UX Design Principles](docs/UX_DESIGN_PRINCIPLES.md) — brand direction, accessibility, responsive behavior and prototype data rules.
- [Implementation Roadmap](docs/IMPLEMENTATION_ROADMAP.md) — scoped sprint and phase checkpoints.
- [Terminology](docs/TERMINOLOGY.md) — domain vocabulary and legacy-to-target UI mapping.
- [Codex Working Rules](docs/CODEX_WORKING_RULES.md) — implementation, validation and Git constraints.
