# Mehtai Shop

This is a production-ready, Next.js storefront built for Mehtai Shop, featuring a complete design system rooted in warm, traditional bakery aesthetics. It includes a functional "Order via WhatsApp" shopping cart flow that operates entirely on the client without needing a backend.

## 🛠 Tech Stack
- **Framework:** [Next.js 15 (App Router)](https://nextjs.org)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Icons:** Lucide React
- **Fonts:** Young Serif (Headings), Figtree (Body), Noto Nastaliq Urdu (Urdu Script)
- **Storage:** LocalStorage (for persisting the order drawer)

## 🚀 Getting Started

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

To build for production:

```bash
npm run build
```

## 📝 How to Edit Content

### 1. Configuration (Single Source of Truth)
All text, links, addresses, and phone numbers on the site are controlled from one file:
**File:** `src/config/site.ts`

- **To switch the WhatsApp number:** Open `src/config/site.ts` and change the `whatsappNumber` field. Make sure to use the international format without the `+` sign (e.g., `923000000000`).
- **To update hours or location:** Change the `hoursText`, `address`, and `mapsUrl`.

### 2. Products Data
The sweets menu and available units/prices are controlled here:
**File:** `src/data/products.ts`

- **To add a product:** Copy an existing object in the `products` array and change the values.
- **To update a price:** Edit the `price` number inside the `units` array for a given product.
- **Badges:** Add `badge: "Bestseller"` or `badge: "Seasonal"` to highlight a product.

### 3. Images
Product images are referenced via standard paths (e.g., `/images/products/gulab-jamun.webp`).
- Place your `.webp` or `.jpg` images in the `public/images/products/` folder.
- Ensure the filename exactly matches the `image` string defined in `src/data/products.ts`.
- *Note:* If an image is missing, the site gracefully falls back to a tasteful Nastaliq placeholder block.

## ☁️ How to Deploy to Vercel
Since this site uses Next.js with zero backend requirements, Vercel is the ideal host.
1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Go to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your repository.
4. Leave all build settings as default (Framework Preset: Next.js).
5. Click **Deploy**. Your site will be live and globally distributed in minutes.
