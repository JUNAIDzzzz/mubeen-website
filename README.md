# Mubeen's Kulche Nihari — React Site

A React + Vite rebuild of the Mubeen's Kulche Nihari site, with a richer
Lucknowi visual language: a maroon/gold/emerald palette, jaali (lattice)
texture, an Amiri + Cormorant Garamond + Mukta type system, and a framed,
boutique-menu-card layout.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

`npm run build` outputs static files to `dist/`, which you can deploy anywhere
(Netlify, Vercel, GitHub Pages, your own server, etc).

## Structure

```
src/
  App.jsx                 — composes all sections
  index.css               — the whole design system (variables, layout, responsive)
  components/
    Nav.jsx                — sticky nav + mobile menu
    Hero.jsx                — hero with the single entrance animation
    VideoPlaceholder.jsx    — animated placeholder where a real video goes
    Legacy.jsx               — the founding story + timeline
    Gallery.jsx              — illustrated dish icons
    Menu.jsx                 — the framed menu card
    Reviews.jsx              — testimonial cards
    Contact.jsx              — location, timings, contact details, message form
    Footer.jsx
    Ornament.jsx             — reusable corner-flourish / arcade-divider / arch-icon
    DishIcons.jsx            — inline SVG icons for each dish
```

## Things still marked as placeholders

Search the components for `ph-tag`, "add price", "add number" etc. — these are
every spot where real restaurant details (exact GPS pin, phone, timings,
prices, social handles, real reviews) should replace the placeholder text.
The video and gallery are illustrated/animated placeholders too — drop in real
photos and a real video file whenever you have them.
