# USK Software Solutions — Company Website

Production-ready company website for **USK Software Solutions — Software Products & Technology Solutions**.
Built with React 18, Vite, TypeScript, Tailwind CSS, React Router and Framer Motion (LazyMotion, small bundle).

## Quick start

```bash
npm install
cp .env.example .env     # optional – defaults work
npm run dev              # http://localhost:5173
npm run build            # type-check + production build → dist/
npm run preview          # serve the build locally
```

## Before you go live (important)

1. **Contact details** – edit `src/config/siteConfig.ts` (email, phone, address, GitHub/LinkedIn URLs, currency, legal jurisdiction). Placeholders are marked `PLACEHOLDER`.
2. **Contact form delivery** – by default `VITE_CONTACT_MODE=mock`: the form validates and shows success but **does not send anything**. Choose one:
   - `mailto` – opens the visitor's email app, pre-filled (works with no backend).
   - `api` – POSTs JSON to `VITE_API_BASE_URL + VITE_CONTACT_ENDPOINT` (e.g. a Spring Boot `@PostMapping("/api/v1/enquiries")`).
3. **Products, prices, plans** – currently placeholders (`USK Product One/Two/Three`, sample prices). Replace in `src/data/products.ts` and `src/data/pricing.ts`.
4. **Privacy Policy / Terms** – general templates, not legal advice. Have them reviewed and update `legal.lastUpdated` / `legal.jurisdiction`.
5. **Sitemap** – update `public/sitemap.xml` when product slugs change.
6. Replace `public/og-image.png` with a branded 1200×630 image if desired.

## Tech stack

React 18 · TypeScript · Vite 6 · Tailwind CSS 3 · React Router 6 · Framer Motion 11 · lucide-react · self-hosted Schibsted Grotesk font (`@fontsource-variable`).

## Folder structure

```
src/
├── components/
│   ├── common/    Button, Container, Section, SectionTitle, Badge, Card, FAQAccordion,
│   │              CTASection, PageHeader, Logo, Icon, Reveal, ScreenMock, LegalPage
│   ├── layout/    Navbar, MobileMenu, Footer
│   ├── home/ products/ services/ projects/ about/ contact/ pricing/
├── pages/         Home, Products, ProductDetails, Services, Projects, About,
│                  Pricing, Contact, Careers, PrivacyPolicy, Terms, NotFound
├── data/          products.ts, services.ts, projects.ts, pricing.ts, company.ts
├── config/        siteConfig.ts (brand/business info), env.ts
├── services/      contactService.ts, apiClient.ts   (backend-ready)
├── hooks/         useSeo, useScrolled, useLockBodyScroll
├── layouts/       MainLayout
├── routes/        AppRoutes (lazy-loaded pages)
├── types/ utils/
public/            favicon, og-image, robots.txt, sitemap.xml, _redirects, .htaccess
```

## How to add content

**Product** – append an object to `products` in `src/data/products.ts` (copy an existing one, new unique `id`). It appears on `/products`, and gets `/products/<id>`. Add real screenshots by setting `screens[].image`.

**Service** – append to `services` in `src/data/services.ts`. Set `contactOption` to a value from `contactServiceOptions` (`src/data/company.ts`) and `featured: true` to show it on Home.

**Project / case study** – append to `projects` in `src/data/projects.ts`. Use `category`:
`experience` (selected projects & development experience), `client` (client work — only with permission) or `product`.

**Pricing plan** – edit `src/data/pricing.ts` (plans per model; add a model by extending the type).
**Testimonials, team, job openings** – fill the arrays in `src/data/company.ts`; the sections show automatically when non-empty.
**Logo** – edit `src/components/common/Logo.tsx` (swap `LogoMark` for an SVG).

## Environment variables

See `.env.example`. Only `VITE_*` values reach the browser — never store secrets there.

## Deployment

The build output is `dist/`. SPA routing is pre-configured:

- **Vercel** – import the repo; `vercel.json` handles rewrites.
- **Netlify** – `netlify.toml` + `public/_redirects`.
- **Hostinger / Apache** – run `npm run build`, upload the contents of `dist/` to `public_html/` (includes `.htaccess`).

Point `usksoftwaresolutions.com` to the host and set `VITE_SITE_URL` accordingly.

## SEO note

Titles, descriptions, canonical and Open Graph tags are set per route at runtime (`useSeo`), with defaults and JSON-LD in `index.html`. Social crawlers that don't run JavaScript only see the homepage defaults; add pre-rendering (e.g. `vite-plugin-prerender`) later if per-page link previews matter.

## Accessibility & performance

Skip link, semantic landmarks, one `<h1>` per page, visible focus states, keyboard-operable menu/tabs/accordions, labelled form fields with `aria-invalid` and error messaging, reduced-motion support. Pages are code-split; images (when added) load lazily.
