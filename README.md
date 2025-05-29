/* -----------------------------
   README.md (excerpt)
------------------------------ */
# TheScottish3D Website

Modern e‑commerce site built with **React**, **Vite**, **TailwindCSS**, and **Stripe Payment Links**.

## 1. Setup

```bash
# Install dependencies
npm install  # or pnpm install / yarn

# Start dev server
npm run dev
```

Create a `.env` file in the project root:

```bash
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_your_key_here
```

## 2. Stripe Payment Links

1. In your Stripe dashboard, create *Payment Links* for each product.
2. Copy each *Buy Button ID* and replace the placeholder `buy_btn_1P_PRODUCTX` in `src/routes/Products.jsx`.
3. Ensure your publishable key is set in `.env`.

No backend is required—Stripe hosts the checkout securely.

## 3. Contact Form

The example uses **Formspree**. Sign up at [formspree.io](https://formspree.io) and replace `yourFormId` in `src/routes/Contact.jsx`.

## 4. Deployment to Hostinger

Hostinger supports static sites via **hPanel → Websites → Import Website**.

```bash
npm run build  # generates /dist
```

Upload the `dist` folder contents to the root of your domain (or sub‑domain). Set your **Index File** to `index.html`.

For HTTPS (required by Stripe):
* Ensure SSL is enabled in Hostinger → SSL → Activate.

## 5. Custom Domain Env Vars

If you need different Stripe keys for dev/prod, set environment variables via Hostinger → Advanced → Environment.
