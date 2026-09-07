# Ben Stokoe — Astro rebuild

Astro rebuild of the portfolio, moved off Prismic onto local content
(Astro Content Collections). This lives alongside the existing Next.js app
in `../` while it's being built out; nothing here is wired into the live
site yet.

## Content

All content is local under `src/content/`:

- `home/home.json` — homepage copy (hero taglines, about blurb, section
  titles, tech-stats dates).
- `pages/*.json` — title + meta for `work`, `about`, `contact`.
- `work/*.md` — one file per project. Frontmatter holds the structured
  fields (`name`, `description`, `role`, `technologies`, `date`,
  `mainImage`, `logo`, `showInClientLogos`); the Markdown body is optional
  extra copy for the project detail page.
- `blog/*.md` — one file per post. Frontmatter holds `postTitle`,
  `postImage`, `publishDate`, `tags`; the body is the post itself
  (headings, code fences, blockquotes — all plain Markdown, replacing the
  old Content/CodeSnippet/BlogQuote Prismic slices).

Everything currently in there is **placeholder copy** — the sandbox this
was built in can't reach the Prismic API to pull real content across, so
swap it for the real thing before this goes live. Image fields are plain
string paths (e.g. `/images/work/project-one.jpg`); drop the real files in
`public/images/...` and update the paths.

## Running it

```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## What changed vs. the Next.js/Prismic version

- No CMS, no API calls, no preview/revalidate routes, no Vercel KV — content
  and blog "votes" (now per-browser via localStorage) are local/static.
- Prismic slices became plain `.astro` components (`src/components/`),
  composed directly on each page instead of through a dynamic slice zone.
- Interactive bits (mobile nav, contact form, blog votes) are React islands
  via `@astrojs/react`; everything else ships zero client JS.
- Styling (Tailwind + daisyui + the `catppuccin-mocha` theme) is unchanged.
