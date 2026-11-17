# Ganesh B – Portfolio

React + Redux Toolkit + Redux Saga. Vite build.

## Run locally
    npm install
    cp .env.example .env     # optional: add your Formspree endpoint
    npm run dev

## Edit your content
Everything personal lives in `src/data/profile.js`. Replace the Upwork and Fiverr URLs there, and replace `public/Ganesh_B_Resume.pdf` with your latest resume.

## Deploy (Vercel, free)
1. Push this folder to GitHub (replace the old portfolio repo).
2. vercel.com > Add New Project > import the repo. Framework: Vite.
3. Add `VITE_CONTACT_ENDPOINT` under Environment Variables.
4. Deploy. Add a custom domain under Settings > Domains.
