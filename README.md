Klar! Hier ist der vollständige Inhalt deiner `README.md` – direkt zum Kopieren und Einfügen:

```markdown
# ShopZilla

An e-commerce web application developed as the final project of my course.

---

## 📬 Contact Form

To activate the contact form, insert your **Webhook.site** URL into the following file:

```
src/data/contactData.ts
```

---

## 🚀 Getting Started

To run the project locally, execute the following commands in your terminal:

```bash
npm install
npm run build
npm run start
```

---

### 🐳 Docker Alternative

You can also run the project using Docker.

#### If you have `make` installed:

```bash
make build
make run
```

#### Without `make`, use Docker CLI:

```bash
docker build -t myshop .
docker run --rm -p 3000:3000 myshop
```

---

### ❗ Troubleshooting

1. Make sure you are in the correct directory:  
   The path in your terminal should end with `shopzilla`.

2. Ensure Node.js is installed:  
   You should be able to run `node -v` and `npm -v` in your terminal.

---

## 🧩 Application Structure

The entire source code is located in the `src` directory.

It includes the following subdirectories and one TypeScript file:

- `app`
- `components`
- `data`
- `lib`
- `ui`
- `interfaces.ts`

> Note: All HTML entity characters (e.g., `&quot;`) were suggested by the ESLint rules from the Next.js framework to follow best practices — they are not copied from any source.

---

### 📁 app

This folder contains the main application code. It includes the routing structure and integrates all other modules like components, types, and utility functions.

Each page has a `page.tsx` file that defines its content and imports components from other folders. Layouts are defined in `layout.tsx` files.

For more details, check the official documentation on the App Router:  
🔗 https://nextjs.org/docs/app/building-your-application/routing

> Note: File names follow Next.js conventions. The only exception is `StoreProvider.tsx`, which is related to Redux setup.

More about metadata file conventions:  
🔗 https://nextjs.org/docs/getting-started/project-structure#metadata-file-conventions

---

## 📄 Documentation

Documentation is included directly in the following files:

- `page.tsx` and `layout.tsx` within the `app` folder and its subfolders
- `StoreProvider.tsx` in the `app` folder

All non-self-explanatory components are also documented in the codebase.

---

## ⚠️ Runtime Errors

If your internet connection is unstable, you may encounter an error like:

```
TypeError: fetch failed
...
code: 'UND_ERR_CONNECT_TIMEOUT'
```

This indicates that a request (typically an image) has timed out due to network delays. Please check your internet connection and try again.

---

## 📦 Data

All data, including images, is retrieved from:  
🔗 [https://dummyjson.com/docs/products](https://dummyjson.com/docs/products)

> ⚠️ Note: Some product images may be low quality or not properly centered in their containers.
```

Einfach kopieren, in deine `README.md` einfügen, committen – fertig ✅  
Wenn du willst, mach ich dir auch die deutsche Version oder ein Markdown-Template für weitere Projekte.
