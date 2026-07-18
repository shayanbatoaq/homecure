# Home Cure

Empty Next.js app ready for development.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contact Form

The booking form sends email through Resend. Add these values to `.env`:

```bash
RESEND_API_KEY=re_xxxxxxxxx
RESEND_FROM_EMAIL="HomeCure <info@homecure.com.pk>"
RESEND_TO_EMAIL=info@homecure.com.pk
NEXT_PUBLIC_SITE_URL=https://homecure.com.pk
```

`RESEND_FROM_EMAIL` and `RESEND_TO_EMAIL` default to `info@homecure.com.pk`.
`RESEND_TO_EMAIL` can be a comma-separated list for multiple recipients.
Restart the dev server after changing `.env`. In Resend, `homecure.com.pk`
must be added and verified before `info@homecure.com.pk` can send reliably.
# homecure
