# Jai Nagle - Portfolio

My personal portfolio site: a single-page, responsive showcase of my background, experience, skills and projects.

## Sections

Hero, About, Experience, Education, Skills, Projects and Contact, with a light/dark theme toggle and a custom 404 page.

## Tech stack

- [Vite](https://vitejs.dev) + [React](https://react.dev) + TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (Radix primitives)
- React Hook Form + Zod for form handling and validation

## Getting started

```bash
npm install
npm run dev
```

The dev server prints the local URL (Vite's default is `http://localhost:5173`).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build into `dist/` |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint with ESLint |

## Editing content

All page copy (bio, experience, education, skills, projects and contact details) lives in [`src/data/content.ts`](src/data/content.ts). Edit that file to update the site; no component changes are needed for text or data changes.

## Project structure

```
src/
├── components/
│   ├── portfolio/   # section components (Hero, About, Projects, ...)
│   └── ui/          # shadcn/ui primitives
├── data/content.ts  # all site content
├── hooks/
├── lib/
└── pages/           # Index, NotFound
```

## Deployment

The site is a static build (`npm run build`) and can be hosted on any static host such as Netlify, Vercel or GitHub Pages.
