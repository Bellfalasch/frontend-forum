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

## 9th of October

...
<twemoji-man-technologist/> Bobby Westberg

---
transition: slide-up
---

# <twemoji-spiral-notepad/> Agenda

* Accessibility
* Builders Core
* Worth sharing
* Inspiration, etc

---
transition: slide-left
layout: center
---

# Accessibility

---
transition: slide-up
---

# <twemoji-wheelchair-symbol/> Accessibility

<v-clicks>

## a11y

</v-clicks>
<v-clicks after>

* Loads of PRs and issues being worked on by all teams <twemoji-flexed-biceps />

</v-clicks>
<v-clicks after>

## Docs!

</v-clicks>
<v-clicks after>

* Again, [check our a11y-doc](https://www.gjensidige.builders/docs/core/?path=/docs/accessibility-introduction--about)
* See something missing, typo, whatnot - [create a PR](https://github.com/gjensidige/builders-core/blob/next/docs/a11y/frontend.mdx) <twemoji-red-heart />

</v-clicks>
<v-clicks after>

<img src="/images/2024-08-28/a11y-guide.png" class="rounded shadow" style="max-width:85%;" alt="" />

</v-clicks>

---
transition: slide-left
layout: center
---

# Builders Core

<LogoGjensidige/>

---
transition: slide-left
---

# <twemoji-notebook-with-decorative-cover/> Builders Core

<v-clicks>

## Releases

### @gjensidige/builders-components

</v-clicks>
<v-clicks depth="2">

* **1.15.18** is the latest of the 1.15 (2nd of August)
* **1.16.0** came two weeks ago
  * **Loads of improvements!**
  * Multiple `<Datepicker>` improvements
  * New `<Breadcrumbs>` components
  * And more!

<Spacer/>

</v-clicks>

<v-clicks after>

* <IconsSlack/>Follow **#builders-core-announcements** for release notes!
* <IconsSlack/>Use **#builders-core** for questions, bug reports, etc.

</v-clicks>

---
transition: slide-left
layout: center
---

# Gjensidige updates

<LogoGjensidige/>

---
transition: slide-left
---

# Updated Front-end-pages

Front-end pages adjusted slightly after last forum.

<v-clicks depth="2">

* [Principles for building web applications](https://www.gjensidige.builders/community/blog/principles)
  * Added a bullet on "Consider [Preact](https://preactjs.com/)" (smaller and faster), used by Team Builders.
  * State-paragraph was missed, got an update mentioning [Zustand](https://zustand-demo.pmnd.rs/) and Valtio.
* [Principles on Automated testing](https://www.gjensidige.builders/community/blog/testing-principles)
  * Remove emphasis on Cypress, put [Playwright](https://playwright.dev/) in front.
  * Also worth mentioning [Puppeteer](https://pptr.dev/)
  * The choice is not given, they do close to same things, differently

</v-clicks>

<v-clicks after>

Thanks for feedback! Keep it coming!

</v-clicks>

---
transition: slide-left
layout: center
---

# <twemoji-recycling-symbol/> Worth sharing

<LogoGjensidige/>

---
transition: slide-left
---

# <twemoji-recycling-symbol/> Worth sharing

## CSS > SCSS

<IconsStar/> Per Allan Johansson

As vanilla CSS grows stronger, and Builders Core-support is going the same way, replacing as much Sass as possible with CSS makes sense.

Still some issues with nesting, &, mixins, etc, to fully remove Sass. So handle with care!

What you don't see: he have begun using code AI to assist with this task. And he breaks it into smaller PRs, not doing all the migration in one big chunk, but smaller diggestable pieces, one by one, fixing issues as they move.

<IconsWebsite/> [Example PR of one of the jobs](https://github.com/gjensidige/salg-nettbutikk/pull/5754)

---
transition: slide-left
---

# <twemoji-recycling-symbol/> Worth sharing

## postcss-nesting

<IconsStar/> Maria Lilleberg Holm

With this package used in your Vite-config, you can use native CSS nesting, ironing out all the issues some smaller browsers still have with it.

This work allowed them to remove **less** all together (and old Core's Grid).

<IconsWebsite/> [Example PR on app running on gjensidige.com](https://github.com/gjensidige/builders-ir-download-center/pull/95/files)

---
transition: slide-left
---

# <twemoji-recycling-symbol/> Worth sharing

## Big rewrite of claims chat and follow

<IconsStar/> Team Newton

The Gjensidige famous "slow chat" is getting a visual and technical lift.

Deleted 24,000 lines of code and written 12,300 new ones. Improved stack.

<IconsWebsite/> [Read more #team-claims](https://gjensidige.slack.com/archives/CT52GULG2/p1725628881124629)

---
transition: slide-left
---

# <twemoji-recycling-symbol/> Worth sharing

## Preact is faster and smaller than React

<IconsStar/> Team Builders

All our public facing websites run on the CMS **Enonic XP** and what is called the **Builders Platform**.

Builders Platform fully uses our design system, just like other teams' apps.

Some time ago the team decided that they don't need the full React, it contains to many features they never use, it supports too much legacy code they don't need.

So they tossed it out and went for Preact (with the React compat-package) instead. Without losing anything but a lot of build-time and bundle-size.

So far they are [the first and only team using Preact](https://github.com/search?q=org%3Agjensidige+%22preact%22+path%3Apackage.json&type=code).

* <IconsWebsite/> [Check the repo out](https://github.com/gjensidige/builders-platform/blob/main/views-api/package.json)
* <IconsWebsite/> [Read on migrating React to Preact](https://preactjs.com/guide/v10/switching-to-preact/)

---
transition: slide-left
layout: two-cols
---

# <twemoji-recycling-symbol/> Worth sharing

## You can "draw" in readme.md!

Markdown for GitHub has native [support for mermaid](https://mermaid.js.org/intro/getting-started.html) (that I also use in my slides). Have you used it?

Create pie charts, db-design, flow-charts, whatnot.

<img src="/images/2024-09-11/mermaid.png" class="rounded shadow" style="max-width:95%;" alt="" />

::right::

```js
\`\`\`mermaid
sequenceDiagram
    participant Enonic XP
    participant SSR
    participant React
    participant Storybook
    Enonic XP->>Enonic XP: Data is stored in XP
    Enonic XP->>SSR: Controller specifies Component name
    Enonic XP->>SSR: Controller passes data as props
    SSR->>React: Node packages of component is used
    React->>SSR: Pre-rendered component is returned
    SSR->>SSR: Server stores all needed files
    Storybook->>React: Uses components directly
    SSR->>Enonic XP: Returns path to all files to XP
    Enonic XP->>Enonic XP: Returns HTML, JS and CSS to browser
\`\`\`
```

[See example usage](https://github.com/gjensidige/builders-platform/blob/next/README.md)

---
transition: slide-left
layout: center
---

# <twemoji-rolled-up-newspaper/> News, <twemoji-cherry-blossom/> Inspiration, <twemoji-package/> Updates

---
transition: slide-left
---

# <twemoji-cherry-blossom/> Cloud-less API-testing

Using **Postman** and **Insomnia** for API-testing?

They're are storing a lot in the cloud, and they like it.

**Bruno** stores all as code, in your own repo, for the entire teams joy and benefit.

<IconsWebsite/> [Use Bruno](https://www.usebruno.com/)!
<Spacer/>

<IconsStar/> Thanks **Magnus Kjelland** for the tip!

---
transition: slide-left
---

# <twemoji-cherry-blossom/> oxc

<v-clicks>

Large, slow and hard-to-maintain ... tired of **eslint** and **prettier** (390 hits)?

[BiomeJS](https://biomejs.dev/) (6 repoes) wasn't for you? Maybe [oxc](https://oxc.rs/) (0 repoes) and their **oxlint** is!

Built on Rust, it is crazy fast. And it does both linting and formatting.

<img src="/images/2024-09-11/oxlint.png" class="rounded shadow" style="max-width:75%;" alt="" />

</v-clicks>

---
transition: slide-left
---

# <twemoji-cherry-blossom/> Zustand

## Want less pain in state-handling?

Do you have pains with state, especially with **Redux / Redux Toolkit**? (80+ repoes using it)

Two repoes already using [Zustand](https://zustand-demo.pmnd.rs/).

Zustand is lighter, faster, and many say [way more easy to work with](https://zustand.docs.pmnd.rs/getting-started/comparison#render-optimization-(vs-redux)) = less pain.

This spring it [passed Redux-toolkit in downloads](https://npm-stat.com/charts.html?package=zustand&package=jotai&package=valtio&package=%40reduxjs%2Ftoolkit&package=recoil).

1. Create a `store.ts` for [your state and their actions](https://zustand.docs.pmnd.rs/guides/updating-state)
2. Import the store, and just use it - no context providers
3. The rest just works

---
transition: slide-left
layout: two-cols
---

# <twemoji-cherry-blossom/> Zod

[Zod](https://zod.dev/) is being adopted by some teams (6 repoes so far).

It takes the schema type-checking to next level (beyond TypeScript) -  Define type of fields in a form, say what data to expect, required/optional, and more.

Zod takes care of validating it for you, throwing errors, messages, and more.

Full of utils/libs that can convert to from TS to Zod, for instance.

<IconsWebsite/> [Example PR by Stine](https://github.com/gjensidige/salg-nettbutikk/pull/5764/files)

::right::

```js
import { z } from 'zod';

const ansatteSchema = z.object({
  intent: z.literal('calculate'),
  antallAnsatte: z.coerce.number().max(10),
  arbeidsdyktighet: z
    .object({
      isWorking: z.union([z.literal('EVERYONE'), z.literal('SOME')]),
      inactiveEmployees: z.coerce.number().min(1).optional(),
    })
    .refine(
      (data) =>
        data.isWorking !== 'SOME' || data.inactiveEmployees !== undefined,
      {
        path: ['inactiveEmployees'],
      },
    ),
  ansatte: z
    .array(
      z.object({
        fodselsnummer: z.string().refine((val) => validateSsn(val)),
        firstName: z.string(),
        lastName: z.string(),
      }),
    )
    .nonempty(),
});
```

---
transition: slide-left
---

# <twemoji-cherry-blossom/> GitHub copilot

<v-clicks depth="3">

* Reminder to request [GitHub Team: Copilot Users](https://myaccess.microsoft.com/@Gjensidige.onmicrosoft.com#/access-packages/49fd29da-f4ad-4527-8457-7d026e1dfb24), and use it in VScode/YourTool
  * Also install both [copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) and the [chat extensions](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat)
* As Microsoft showed us two weeks ago, many different features:
  * As-you-type suggestions in code, relevant to that file, complete with `TAB`
    * Write the name of a **function**, **const**, or a **comment**, and it will try and generate code for you
  * `Cmd + Shift + I` to chat within your code
  * Current tab, tab next to it, other tabs, filename = super important context for the AI
  * Using `@workspace` to address entire list of files
  * `/explain` something, or `/new` to scaffold new files
  * `Cmd + I` to open a chat within your VSCode Terminal
  * And the side extension for chatting
  * Improve your prompt, or give more context and instructions = better results

</v-clicks>

---
transition: slide-up
layout: two-cols-header
---

# <twemoji-package/> Updates

::left::

**[React](https://react.dev)**  
18.3.1 - [out since April](https://github.com/facebook/react/releases)

**[Vite](https://vitejs.dev/)**  
5.4.3 - [Last week](https://github.com/vitejs/vite/blob/v5.4.3/packages/vite/CHANGELOG.md)

**[Vitest](https://vitest.dev/)**  
2.0.5 - [2.0 is out of beta, new beta: 2.1](https://github.com/vitest-dev/vitest/releases)

**[BiomeJS](https://biomejs.dev/)**  
1.8.3

::right::

## Node.JS
<IconsWebsite/> https://nodejs.org/en
* 20.17.0 LTS - latest 22.8.0

## Bun
<IconsWebsite/> https://bun.sh/
* 1.1.27

---
transition: slide-up
layout: center
---

# The end

That's all for now!

<twemoji-red-heart class="animate-ping"/>

--

<twemoji-spiral-calendar/> Next FEF will be held the **23th of October**
