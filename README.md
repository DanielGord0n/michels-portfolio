# Michel Vivier — Portfolio

Personal portfolio for Michel Vivier (Business & Data Analyst). Single-page app
built with **React 18 + TypeScript + Vite**.

## Develop

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # typecheck + production build to dist/
npm run preview  # preview the production build
```

## Structure

```
index.html              Vite entry (root)
public/assets/          images, PDFs, video, résumé
src/
  main.tsx              app bootstrap
  App.tsx               section composition + providers
  styles/               tokens.css (design tokens) + global.css
  data/                 static content (experience, projects, certs, dashboard)
  hooks/                useInView (IntersectionObserver helper)
  context/UIContext.tsx modal + lightbox state, scroll-lock, Escape handling
  components/           Nav, Hero, ImpactReport, About, ExperienceTimeline,
                        CaseStudies, Dashboard, Work, Certifications, Skills,
                        Contact, Footer, CountUp, Modal, ModalRoot, Lightbox
```

## Notes

- Type: **Space Grotesk** (display/numbers) + **Manrope** (body), via Google Fonts.
- **Safe defaults:** every number and chart renders at its real final value on
  first paint — animation (count-ups, the report build, dashboard transitions) is
  additive only.
- The interactive dashboard persists the selected view to `localStorage`
  (`mvDashView`).
- Headline KPIs and credentials are real (from the résumé); intermediate chart
  points are illustrative placeholders.
