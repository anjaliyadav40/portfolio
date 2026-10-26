# Anjali Yadav — Y2K Neon Dreamscape Portfolio
React + Vite + Tailwind CSS + Framer Motion. Content lives in `src/data/*`. Supabase is optional and only powers the contact form.

## Run it
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview
```
Requires Node.js 18+. **The build has not been run yet** (the authoring sandbox had no network). Run `npm install && npm run build` and fix anything it reports.

## Update content
- Personal info and nav: `src/data/site.js`
- Projects: `src/data/projects.js` (leave unknown fields `null`; the UI shows empty states)
- Skills / profiles / journey: `skills.js`, `profiles.js`, `experiences.js`
- Certificates: drop the file in `public/assets/certificates/`, then set `file`, `issuer`, `date` in `certificates.js`
- Screenshots and stickers: see `public/assets/README.md`
- Resume: copy your PDF to `public/assets/resume.pdf`. Until then the Resume section shows setup instructions.

## Contact form (Supabase)
1. Create a project at supabase.com.
2. SQL editor: run `supabase/migrations/0001_schema.sql`.
3. Copy `.env.example` to `.env` and fill `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` (Project settings → API; use the anon/publishable key only).
4. Visitors can only call `submit_contact` (validation, honeypot, 3 messages/hour per email). They cannot read messages. Read them in the Supabase table editor.
5. Never put the service-role key in any `VITE_` variable.
Without credentials the form tells visitors to email you instead of faking success.

Admin policies exist in SQL (`app_metadata.role = 'admin'`), but there's no admin UI; manage rows in the Supabase dashboard. The site currently reads content from local files, not from the database tables.

## Deploy on Vercel
Push to GitHub → Import in Vercel → framework Vite (build `npm run build`, output `dist`) → add the two env vars under Settings → Environment Variables → deploy. Add a `vercel.json` rewrite `{"rewrites":[{"source":"/(.*)","destination":"/"}]}` so `/projects/...` URLs work on refresh.

## Troubleshooting
- Blank image slot: file path/name doesn't match `public/assets/README.md`.
- Form says "not connected": env vars missing; restart `npm run dev` after editing `.env`.
- "rate limit exceeded": more than 3 messages/hour from one email.
- 404 on refresh in production: add the `vercel.json` rewrite.
