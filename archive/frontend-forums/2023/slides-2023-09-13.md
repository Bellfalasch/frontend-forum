---
# try also 'default' to start simple
theme: the-unnamed

# https://sli.dev/custom/highlighters.html
#highlighter: prism
# show line numbers in code blocks
lineNumbers: true
# page transition
transition: fade-out
---

# Front-end Forum

## 13th of September

...
<twemoji-man-technologist/> Bobby Westberg

---
transition: slide-up
---

# <twemoji-spiral-notepad/> Agenda

* Builders Core
* Migration guide
* Form patterns
* Piwik
* FE News & Inspiration
* Talks!

---
transition: slide-left
---

# Builders Core

New name: **Builders Core**!

## #builders-core

Loads of good feedback! <twemoji-red-heart />

Ask questions, come with constructive feedback (or even a PR!) - everything grows our collective toolkit.

Multiple minor releases since last FEF, check *#builders-core*!

---
transition: slide-left
---

<img src="/images/2023-09-13/core.png" class="rounded shadow" />

---
transition: slide-left
---

# <twemoji-building-construction/> Migration guide:

There's automatic upgrade-scripts, for tokens and more.

https://www.gjensidige.builders/docs/core/?path=/docs/migrating-to-builders-core--about


---
transition: slide-left
---

# <twemoji-check-mark-button/> Form patterns

Have you explored the new addition to Builders Core? **Form patterns**

https://www.gjensidige.builders/docs/core/?path=/docs/principles-forms--about

Principles to guide you on:
* Information overload
* Short vs long forms
* Columns
* Input field and group styling
* Buttons in forms
* Questions vs information
* Grid, spacing and layout

And many excellent examples of Do's and Dont's

---
transition: slide-left
---

# <twemoji-bar-chart/> Does Piwik change anything?

**No** 

(Since we use Telium/utag in front, your life and your code needs zero changes)

---
transition: slide-left
---

# <twemoji-headstone/> Deprecated libraries

Worth repeating: **Nothing** is deleted, unpublished or removed.

* "New" Builders Core is shipped as separate packages.
* No apps are forced to upgrade/migrate.
* Nothing existing/old breaks.
* You can migrate on a component-by-component basis.

---
transition: slide-left
---

# <twemoji-headstone/> Deprecated libraries

## <twemoji-coffin /> **ESlint**

**Vebjørn** was quick with a service-package with some quick rules.

https://github.com/gjensidige/service/pull/485

... or just go for bare defaults.

## <twemoji-coffin /> **Grid**

Early early thoughts, so early Builders don't want me to mention too much.

---
transition: slide-up
---

# <twemoji-headstone/> Deprecated libraries

## <twemoji-coffin /> **Utils**

Use tokens and migrate spacing to CSS instead.

* Put a `class` on the element instead
* replace each padding/margin util with the equivalent token in your SCSS/LESS
* use normal media queries to replace `md`, `sm`, etc
* app is now smaller and faster!

Some teams are looking at maybe trying **Tailwind** to ease the transition.

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> FE News

## Astro 3.0

Speedy framework Astro is out with version 3:
https://astro.build/blog/astro-3/

* Faster, smaller, smoother!
* View Transition API implemented!
* Better HMR
* Optimized build-output, images, rendering

## Chrome Devtools 117

Worth checking out, lofs of nice features. Like: override XHR-requests, see human readable status-codes, debug loading priorities, and more.

https://developer.chrome.com/blog/new-in-devtools-117/

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> FE News

## Chrome turns 15

https://blog.google/products/chrome/google-chrome-new-features-redesign-2023/

## Vite 5 ... soon

September marks the EOL for Node 16, which is the mark for when Vite-gang want to do version 5:
https://github.com/vitejs/vite/discussions/12466

---
transition: slide-up
---

# <twemoji-rolled-up-newspaper/> FE News

## Node-contender: Bun 1.0

Born this weekend!

New lightning fast runtime, build tool, bundler, package manage, and testing tool.

Can replace Node, npm, Yarn, pnpm, Vite and similar, and esbuild, webpack ++

https://bun.sh/

---
transition: slide-left
---

# <twemoji-cherry-blossom/> FE Inspiration

Small, not so new, but sometimes forgotten CSS-gems!

---
transition: slide-left
---

# <twemoji-cherry-blossom/> FE Inspiration

### CSS: **Margin Block Start**

```css{all|2}
p {
  margin-block-start: 1rem;
}

.my-block > * + * {
  margin-block-start: 1rem;
}
```

https://every-layout.dev/layouts/stack/

---
transition: slide-left
---

# <twemoji-cherry-blossom/> FE Inspiration

### CSS **hypen auto**

Consider these two:

```
Hejsan, hvordan
går det?
```

```
Hejsan, hvor-
dan går det?
```

```html
<html lang="da">
```

```css{all|2}
.longWordsButSmallSpace {
  hyphen: auto;
}
```

https://caniuse.com/mdn-css_properties_hyphens_auto_value

---
transition: slide-up
layout: center
---

# Time for talks!

That's all for me, time for talks!

<twemoji-red-heart class="animate-ping"/>

---
transition: slide-up
layout: center
---

# Katarina Matysova

Overview of Treatment insurance application, how a claim registration process looks like from a user perspective. Big code-base, contains a lot of technical debt, old dependencies and special conditions.

# Peter Jezik

Give an overview of the application we are working on (GPluss), techstack, some challenges we faced. Currently not on NCI.

# Pavol Repka

Share an example of new builders components and show how the changes helped developers life! With practical examples.