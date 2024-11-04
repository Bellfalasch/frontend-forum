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

## 6th of November

<Spacer/>
<twemoji-man-technologist/> Bobby Westberg

---
transition: slide-up
---

# <twemoji-spiral-notepad/> Agenda

* Accessibility
* Builders Core
* Tech debt
* News
* Inspiration

---
transition: slide-left
layout: center
---

# Gjensidige updates

<LogoGjensidige/>

---
transition: slide-left
layout: center
---

# <twemoji-wheelchair-symbol/> Accessibility

---
transition: slide-up
---

# <twemoji-wheelchair-symbol/> A11y docs

Ideas, questions, what not? <IconsSlack/>**#accessibility**

<v-clicks depth="2">

* Last Accessibility forum we discussed `<Modal/>` in length.
  * There will be some new recommendations on this, but takes time to research.
* ...

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

# <twemoji-notebook-with-decorative-cover/> Squad Designsystem

<v-clicks depth="2">

* A brand new **squad** is born <twemoji-baby/> at Gjensidige - **Designsystem**
* Gjensidige's **Designsystem** is owned by this squad
* **Team Builders** is no more <twemoji-headstone/>
* There's 2 developers on this team, me and Maria Lilleberg Holm <twemoji-flexed-biceps/>
  * But we will start recruiting for a third dev soon ...
* Slack-channels, documentation, etc, will change *gradually* to reflect new ownership
* The word **Builders**, as part of naming (packages, domain name, ++), is **not planned** to change

</v-clicks>

---
transition: slide-left
layout: two-cols-header
---

# <twemoji-notebook-with-decorative-cover/> Builders Core

Latest and greatest versions from the **Builders Core** suit of packages:

::left::

## <twemoji-brick/> Components: 1.18.0

`@gjensidige/builders-components` <twemoji-new-button />

## <twemoji-disguised-face/> Icons: 1.0.15

`@gjensidige/builders-tokens`

## <twemoji-bar-chart/> Analytics: 16.0.21

`@gjensidige/core-analytics`

::right::

## <twemoji-world-map/> Navigation: 3.6.23

`@gjensidige/core-navigation` <twemoji-new-button />

## <twemoji-input-latin-letters/> Fonts: 1.0.12

`@gjensidige/builders-fonts`

## <twemoji-japanese-congratulations-button/> Tokens: 1.0.15

`@gjensidige/builders-tokens`

---
transition: slide-left
---

# <twemoji-notebook-with-decorative-cover/> Releases: Builders Core

<v-clicks>

## @gjensidige/builders-components

</v-clicks>
<v-clicks depth="2">

* **1.18.0** - last week
  * <twemoji-glowing-star/> `<PopoverMenu/>` now have the possibility to align itself `left` or `right`
  * <twemoji-glowing-star/> `<Alert/>` can now control if you want to show or hide icon
  * <twemoji-hammer-and-wrench/> `<Status/>` didn't look good with symbol and text overflow on bigger screens (potential breaking change for styling - added wrapper around children). (thanks @Magnus Kjelland)
  * <twemoji-hammer-and-wrench/> `<Alert/>`, improvements to styling, especially on mobile.
  * <twemoji-wheelchair-symbol/> `<Expandable/>` now adds `aria-hidden` on its chevron
  * <twemoji-notebook-with-decorative-cover/> Added principals for state for `<Button/>` docs
  * <twemoji-notebook-with-decorative-cover/> [New page](https://www.gjensidige.builders/docs/core/?path=/docs/principles-icons-and-symbols--about) "*Icons and symbols*" under principles (some taken from icons-package, plus added info)

</v-clicks>

---
transition: slide-left
---

# <twemoji-notebook-with-decorative-cover/> Releases: Builders Core

<v-clicks>

## @gjensidige/core-navigation

</v-clicks>
<v-clicks depth="2">

* **3.6.23** - last week
  * <twemoji-hammer-and-wrench/> minor styling adjustments in navigation
  * <twemoji-hammer-and-wrench/> system messages does not show when both _application_ and _location filter_ is set
  * <twemoji-hammer-and-wrench/> Use correct logo in navigation (thanks @james-christian.rugaard)

</v-clicks>
<v-clicks after>

<Spacer/>

* <IconsSlack/>Follow **#builders-core-announcements** for release notes!
* <IconsSlack/>Use **#builders-core** for questions, bug reports, etc.

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

<v-clicks>

##  Monorepo 2.0? Turborepo

</v-clicks>
<v-clicks after>

<IconsStar/> **Commercial DK, Pavol Repka**

</v-clicks>
<v-clicks after>

xxx

xxx

</v-clicks>

---
transition: slide-left
layout: center
---

# <twemoji-rolled-up-newspaper/> News, <twemoji-cherry-blossom/> Inspiration, <twemoji-package/> Updates

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> Xxxx

Xxx

* <IconsWebsite/> [The spec for CSS Grid Level 3](https://www.w3.org/blog/CSS/2024/09/24/css-grid-3-fpwd/)

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> Misc news

<v-clicks>

Potential news to write:

* Vercel's v0, GitHub's X?, StackBlitz X? It's all AI
* Turborepo "done"
* Vite pushing for architecture change
* Node.JS 23 new version, so 22 takes over from 20 as LTS - effective from last week - [Release](https://nodejs.org/en/blog/release/v22.11.0)

* <IconsWebsite/> [xxx](#)

</v-clicks>

---
transition: slide-left
---

# <twemoji-cherry-blossom/> Reading tips

<v-clicks>

* <IconsWebsite/> [xxx](#)

</v-clicks>

---
transition: slide-up
layout: two-cols-header
---

# <twemoji-package/> Updates

::left::

**[Vite](https://vitejs.dev/)**  
5.4.8 - [Last week](https://github.com/vitejs/vite/blob/v5.4.8/packages/vite/CHANGELOG.md) (and new website!)

**[Vitest](https://vitest.dev/)**  
2.1.2 - [2.1 is out of beta](https://github.com/vitest-dev/vitest/releases)

**[Prettier](https://prettier.io/)**  
3.3.3 - [latest stable](https://prettier.io/versions)

**[Eslint](https://eslint.org/)**  
9.11.1 - [v8 just reached EOL](https://eslint.org/version-support/)

**[TypeScript](https://www.typescriptlang.org/)**  
5.6.2 - [5.6 out a few weeks back](https://devblogs.microsoft.com/typescript/announcing-typescript-5-6/)

**[clsx](https://github.com/lukeed/clsx?tab=readme-ov-file#readme)**  
2.1.1 - Still [faster](https://github.com/lukeed/clsx/tree/master/bench) than `classnames` ([50 repoes](https://github.com/search?q=org%3Agjensidige+%22%5C%22classnames%5C%22%3A+%5C%22%5E%22+path%3Apackage.json++NOT+is%3Aarchived&type=code))

::right::

## React  
<IconsWebsite/> https://react.dev
* 18.3.1 - [v19 still in beta](https://19.react.dev/)

## Node.JS
<IconsWebsite/> https://nodejs.org/en
* 22.11.0 LTS - latest 23.1.0

## Bun
<IconsWebsite/> https://bun.sh/
* 1.1.34

---
transition: slide-up
layout: center
---

# The end

That's all for now!

<twemoji-red-heart class="animate-ping"/>

--

<twemoji-spiral-calendar/> Next FEF will be held the **20th of November**
