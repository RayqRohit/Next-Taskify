# Taskify

A modern, responsive landing page for **Taskify**, a Trello-inspired task and project management platform. Built with Next.js, React, TypeScript and Tailwind CSS.

> **Project status:** early development. The marketing landing page is complete. Authentication, the dashboard and the board UI are planned (see [Roadmap](#roadmap)). All numbers shown on the page (users, teams, uptime, rating) are **placeholder content** for design purposes.

<!-- Add a screenshot after deploying: -->
<!-- ![Taskify landing page](./docs/screenshot.png) -->

**Live demo:** _add your Vercel URL here_

---

## Features (current)

- Fully responsive landing page, built mobile-first
- Sticky, blurred navbar with login and sign-up actions
- Hero section with gradient headline and call to action
- Features grid (Intuitive Boards, Team Collaboration, Powerful Automations)
- Stats band and closing call-to-action section
- Custom brand fonts loaded with `next/font/local` (no layout shift)
- Lucide icons instead of a CDN icon font
- Semantic HTML and accessibility basics (`<main>`, `<nav aria-label>`, list markup)

## Tech Stack

| Area        | Technology                                  |
| ----------- | ------------------------------------------- |
| Framework   | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| UI Library  | [React 19](https://react.dev)               |
| Language    | [TypeScript 5](https://www.typescriptlang.org) |
| Styling     | [Tailwind CSS v4](https://tailwindcss.com)  |
| Icons       | [Lucide React](https://lucide.dev)          |
| Fonts       | Figtree and Polymath Display via `next/font/local` |
| Linting     | ESLint 9 with `eslint-config-next`          |

## Project Structure

```
Next-Taskify/
├── public/
│   └── Taskify-logo.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, fonts, metadata
│   │   ├── page.tsx          # Home page (composes landing sections)
│   │   ├── globals.css       # Tailwind import, theme tokens, base styles
│   │   └── favicon.ico
│   ├── components/
│   │   └── landing/
│   │       ├── Navbar.tsx
│   │       ├── HeroSection.tsx
│   │       ├── FeaturesSection.tsx
│   │       ├── StatsSection.tsx
│   │       ├── CtaSection.tsx
│   │       └── Footer.tsx
│   └── fonts/                # Local .ttf font files
├── next.config.ts
├── tsconfig.json             # "@/*" alias points to "./src/*"
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 20 or later
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/RayqRohit/Next-Taskify.git

# 2. Go into the project folder
cd Next-Taskify

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production build locally     |
| `npm run lint`  | Run ESLint                           |

## Roadmap

- [x] Responsive landing page
- [x] Component-based structure with typed data arrays
- [ ] Login and register pages
- [ ] Privacy Policy, Terms of Service and Contact pages
- [ ] Authentication
- [ ] Dashboard with boards, lists and cards
- [ ] Drag-and-drop between columns
- [ ] Team invites and task assignment
- [ ] Persistent storage (database and API)
- [ ] SEO: Open Graph image, `metadataBase`, sitemap

## Deployment

The easiest way to deploy is [Vercel](https://vercel.com/new):

1. Push the repository to GitHub.
2. Import the repo in Vercel.
3. Keep the default Next.js settings and deploy.

Note: font filenames in `src/fonts/` are lowercase on purpose. Linux servers are case-sensitive, so a case mismatch would break the build.

## Fonts and Licensing

- **Figtree** is open source (SIL Open Font License).
- **Polymath Display** is a commercial typeface. Make sure you hold a licence that allows redistribution before using this repository's font files elsewhere.

## License

_Add a license of your choice (for example MIT) by creating a `LICENSE` file, then update this section._