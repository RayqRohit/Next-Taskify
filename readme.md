# Taskify

A modern, responsive task and project management platform inspired by Trello. Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## Features

- **Responsive Landing Page:** Mobile-first layout with clean typography and custom spacing.
- **Optimized Typography:** Custom brand fonts (`Polymath Display` & `Figtree`) loaded via `next/font/local` for zero layout shift.
- **Modern Icons:** Tree-shaken SVG icons powered by `lucide-react`.
- **Modular Architecture:** Clean separation of landing page components.
- **Semantic & Accessible:** Built with semantic HTML elements and proper ARIA labels.

---

## Tech Stack

| Area | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| **UI Library** | [React 19](https://react.dev) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) |
| **Icons** | [Lucide React](https://lucide.dev) |
| **Fonts** | Figtree & Polymath Display |
| **Linting** | ESLint 9 |

---

## Project Structure

```plaintext
Next-Taskify/
├── public/
│   └── Taskify-logo.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, fonts, metadata
│   │   ├── page.tsx          # Home page
│   │   ├── globals.css       # Tailwind directives & theme styles
│   │   └── favicon.ico
│   ├── components/
│   │   └── landing/
│   │       ├── Navbar.tsx
│   │       ├── HeroSection.tsx
│   │       ├── FeaturesSection.tsx
│   │       ├── StatsSection.tsx
│   │       ├── CtaSection.tsx
│   │       └── Footer.tsx
│   └── fonts/                # Local font files
├── package.json
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 20 or later
- `npm`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/RayqRohit/Next-Taskify.git

# 2. Navigate to the project directory
cd Next-Taskify

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server with Turbopack |
| `npm run build` | Builds the application for production |
| `npm run start` | Runs the production build locally |
| `npm run lint` | Runs ESLint checks |

---

## Roadmap

- [x] Responsive landing page
- [x] Modular landing page architecture
- [ ] Authentication & User Accounts (Login / Register)
- [ ] Legal pages (Privacy, Terms, Contact)
- [ ] Interactive Dashboard (Boards, Lists, Cards)
- [ ] Drag-and-drop task management
- [ ] Team collaboration & assignments
- [ ] MySQL database persistence
