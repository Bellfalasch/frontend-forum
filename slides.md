---
theme: the-unnamed

# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks?
lineNumbers: true
# default page transition
transition: fade-out

favicon: './favicon.png'

layout: cover
---

# Front-end Forum

## 24th of April

...
<twemoji-man-technologist/> Bobby Westberg

---
transition: slide-up
---

# <twemoji-spiral-notepad/> Agenda

* Accessibility
* Builders Core
* News/updates
* Inspiration

---
transition: slide-left
layout: center
---

# Accessibility

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Accessibility

## Expert advisor

* **Inklud**, experts on accessibility in Norway
* Service Private has visit today
* Builders had the first visit two weeks ago
* Last week, Private and Commercial Sales had one day each
* More sessions to come

I sit on for all of these sessions, and the stuff we learn ... I don't even know where to begin.

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Accessibility

## Good patterns

They have a lot of general feedback to us, and here are some things they find very positive with Gjensidige:

<v-clicks>

* The overall quality of the design system
* Excellent documentation
* That teams use it, and update it
* It's easy and welcome to contribute to the design system
* Strong community with many motivated and skilled people
* Good sharing-culture

</v-clicks>

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Accessibility

## Common errors/mistakes

We are far from worst in class, but some feedback/issues repeats:

<v-clicks>

* Putting actionable elements within actionable elements (checkbox within button, button within link)
* Not testing with real screen readers
* Only testing VoiceOver (Mac), as it behaves a lot different from other tools
* Breaking the "Jump to content"-functionality
* Miss-using `aria`, for example adding a `role` then also adding `aria` that the role added already
* Adding aria/roles to already semantic HTML, like `<main role="main">`
* If more than one `<nav>` exists on a page, each need a unique `aria-label` or `aria-labelledby`
* Introducing an element with `aria-live` into the DOM will **not** announce it
* Wrapping `<label>` around a `<HelpText>` is practically, but will announce A LOT in screen readers
* Breaking the logical flow of things, for example expandables that expand upwards

</v-clicks>

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Accessibility

## Other info worth sharing

...

<v-clicks>

* Aria is very powerful, if used right. Very destructive if used wrong.
* Assistive technology market is complex, "vendor + device + OS + browser" mix gives different results.
* On Windows, "everyone" uses NVDA.

</v-clicks>

---
transition: slide-left
layout: center
---

# Builders Core

---
transition: slide-left
---

# <twemoji-notebook-with-decorative-cover/> Builders Core

## Latest releases:

**@gjensidige/builders-components@1.4.1**  
**@gjensidige/builders-icons@1.2.0**  
**@gjensidige/core-navigation@3.3.3**  

Many handy improvements, fixes, and features!

Details in `#builders-core`

---
transition: slide-left
layout: center
---

# News, Inspiration, Updates

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> News

## Vite 6 - planning begun

<v-clicks>

* First three alphas are already out
* Aiming for release this year (instead of waiting for Node 18 reaching EOL)
* **Feature**: [Vite Runtime API](https://vitejs.dev/guide/api-vite-runtime.html) out of beta
* **Feature**: Maybe (a very weak maybe) Rolldown to replace esbuild
* More details: [Milestone in GitHub](https://github.com/vitejs/vite/milestone/17)

</v-clicks>

---
transition: slide-up
---

# <twemoji-cherry-blossom/> Inspiration

## xxx

---
transition: slide-up
layout: two-cols-header
---

# <twemoji-package/> Updates

::left::

#### [Biome](https://biomejs.dev/)
* 1.6.4 - [more on 1.6](https://biomejs.dev/blog/biome-v1-6/)

#### [Vite](https://vitejs.dev/)
* 5.2.8 - [see full changelog](https://github.com/vitejs/vite/blob/v5.2.8/packages/vite/CHANGELOG.md)

#### [Vitest](https://vitest.dev/)
* 1.4.0 - [out since March](https://github.com/vitest-dev/vitest/releases/tag/v1.4.0)

#### [TypeScript](https://www.typescriptlang.org/)
* 5.4 - [released in March](https://devblogs.microsoft.com/typescript/announcing-typescript-5-4/)

::right::

## Bun
<twemoji-globe-with-meridians/> https://bun.sh/
* 1.1.3 - [1.1 out last week](https://bun.sh/blog/bun-v1.1)

## Node.JS
<twemoji-globe-with-meridians/> https://nodejs.org/en
* 20.12.1 LTS - latest 21.7.2 - Also: **new website**

---
transition: slide-left
layout: center
---

# The end

That's all for now!

<twemoji-red-heart class="animate-ping"/>

--

<twemoji-spiral-calendar/> Next FEF will be held the **8th of May**
