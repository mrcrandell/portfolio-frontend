---
title: New API for Four Green Fields Farm - Part 3
description: Building a scalable Vue-powered email templating system with inline styles, server-side rendering, and component reuse for email client compatibility.
image: /img/blog/4-post.jpg
category: Emails
tags:
  - Vue
  - Email Templates
  - Server-Side Rendering
  - CSS Inlining
  - Juice
  - TypeScript
  - Mailgun
  - Developer Experience
date: 2025-08-26
published: true
---

## Building a Scalable Email System with Vue and Inline Styles

In Part [1](/blog/2025-06-26-fourgreenfieldsfarm-api-p1) and [2](/blog/2025-08-07-fourgreenfieldsfarm-api-p2), I walked through how I built a clean API with authentication, CSV imports, and recurring event logic. But one piece was still missing: **emails**. While Four Green Fields Farm’s website only has a simple contact form, I thought this was a good time to streamline everything. And let’s be real: building emails is rarely fun.

This post is about how I set up a Vue-powered email templating system, fully inlined for email client compatibility, and structured in a way that’s ready for growth.

---

## Why Vue for Emails?

I could have gone with static MJML or Handlebars templates, but Vue gave me two major advantages:

1. **Component reuse** — A shared `<EmailHeader />` and `<EmailFooter />` means every new template stays consistent.
2. **Developer experience** — Writing templates felt just like building small Vue apps, with props and scoped styles instead of coding like it’s 1994.

---

## Rendering Vue to Inline-Ready HTML

The magic happens in a `buildEmailTemplates.ts` script. Instead of serving Vue on the client, I used Vue’s `@vue/server-renderer` to convert `.vue` components into raw HTML. Then I ran that HTML through [Juice](https://github.com/Automattic/juice), which inlines all CSS for email client compatibility.

Here’s the gist:

```tsx
import { renderToString } from "@vue/server-renderer";
import juice from "juice";
import fs from "fs";
import path from "path";
import { createSSRApp } from "vue";

async function renderEmail(component: any, props = {}) {
  const app = createSSRApp(component, props);
  let html = await renderToString(app);
  return juice(html);
}

// Example: render ContactEmail.vue
```

The output is a **ready-to-send HTML string** with styles fully inlined. No more surprises in Gmail or Outlook.

---

## Headers, Footers, and Style Pain

Emails aren’t just isolated templates. They usually share structure — headers, footers, and consistent typography. I built a `<Header />` and `<Footer />` component and dropped them into each email layout. Easy enough, right?

Not quite. The styles immediately broke. Since I was compiling down to HTML, external CSS files weren’t going to cut it. I needed to inline everything. That’s where **Juice** came in — a library that takes a block of HTML + a CSS string and merges the two.

The catch? Vue components don’t just hand you a single CSS file. Each `.vue` file has its own `<style>` block, and I had to aggregate them all before Juice could inline them. Enter a little helper script:

```tsx
// scripts/collectVueStyles.ts
import { parse } from "@vue/compiler-sfc";
import fs from "fs/promises";
import fg from "fast-glob";
import path from "path";

export async function collectAllVueStylesFrom(
  globPattern: string
): Promise<string> {
  const files = await fg(globPattern, { absolute: true });
  let combined = "";

  for (const file of files) {
    const source = await fs.readFile(file, "utf-8");
    const parsed = parse(source);
    for (const style of parsed.descriptor.styles) {
      combined += style.content + "\n";
    }
  }

  return combined;
}
```

This little script crawls through every Vue file, rips out the `<style>` blocks, and stitches them together into one giant CSS string.

---

## The Build Command

Once styles were sorted, the build process became smooth. Here’s the core of it:

```tsx
// scripts/buildEmailTemplates.ts
const templates = [
  {
    name: "contact-email",
    component: ContactEmail,
    props: {
      name: "{{name}}",
      email: "{{email}}",
      phone: "{{phone}}",
      message: "{{message}}",
      year: "{{year}}",
    },
  },
  {
    name: "contact-thank-you-email",
    component: ContactThankYouEmail,
    props: { name: "{{name}}", year: "{{year}}" },
  },
];

async function renderEmailTemplate() {
  const css = await collectAllVueStylesFrom("src/emails/**/*.{vue,css}");
  for (const { name, component, props } of templates) {
    const app = createSSRApp(component, props);
    const html = await renderToString(app);
    const inlined = juice.inlineContent(html, css);

    const outPath = path.resolve(__dirname, `../src/templates/${name}.html`);
    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, inlined);

    console.log(`Rendered: ${name}.html`);
  }
}
```

The script runs during build, outputs fully inlined HTML templates, and drops them in `src/templates/` for Mailgun to use. Each prop gets Mustache-style placeholders so I can inject data later.

### Previewing Templates Locally

To make development easier, I added a small previewer you can run with:

```bash
npm run email:preview
```

This spins up a page with a `<select>` dropdown so I can toggle between templates (`ContactEmail`, `ContactThankYouEmail`, etc.) and see the final rendered result in the browser before sending.

### Dynamic Data

One nice touch was moving dynamic values (like the year in the footer) into runtime props instead of hardcoding them. For example:

```html
<template>
  <footer>
    <p>© {{ year }} Four Green Fields Farm</p>
  </footer>
</template>
```

When sending, I just pass `{ year: new Date().getFullYear() }`.

---

This system now gives me a scalable path forward but makes building emails a little less painful. Need a new email? Drop in a `.vue` file, update the preview and build commands, and you’re ready to rock.

Next time, I might wrap this up into a standalone package, but for now it’s doing exactly what I need.

[View the Four Green Fields Farm API on GitHub](https://github.com/mrcrandell/fourgreenfieldsfarm-api)
