# Aru365 Website

Professional landing page for **Aru365** – Everything Aruba. 365 Days a Year.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Brand Colors

- Orange: `#ff8c00` (CTAs, accents)
- Cyan: `#00ced1` (secondary accent, borders, links)

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Booking / Viator affiliate

All "See options & book" links go to Viator Aruba. To use your affiliate link, set in `.env.local`:

```bash
NEXT_PUBLIC_VIATOR_ARUBA_URL=https://www.viator.com/...  # Your link from Viator Partner Selector
```

If unset, links use the default Viator Aruba destination page.

### Viator API (tour cards, prices, images)

Tour cards use the Viator Partner API when `VIATOR_API_KEY` is set (e.g. in Vercel env vars).

- **Production (live data):** default. No extra env needed if your key is a production key.
- **Sandbox (test key):** set the base URL so the app calls the sandbox API:
  ```bash
  VIATOR_API_BASE_URL=https://api.sandbox.viator.com/partner
  ```
  In Vercel: Project → Settings → Environment Variables → add `VIATOR_API_BASE_URL` with that value.

If the key is missing or the API returns no usable data, the site shows hardcoded placeholder tour cards so the pages never look empty.

## Build

```bash
npm run build
npm start
```

## Structure

- `app/` – Layout, global styles, main page
- `components/` – Hero, HowWePromote, Testimonials, ContactForm, Footer

CTAs and footer links use `#partner` and `#contact`; replace with real URLs when ready. The contact form submit is a placeholder (shows success state); wire to your API or form service (e.g. Formspree, Resend) as needed.
