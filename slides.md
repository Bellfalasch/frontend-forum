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

## 10th of April

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
* Talk & Quiz

---
transition: slide-left
layout: center
---

# Accessibility

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Accessibility

## Slack-changes

* #accessibility-code merged into #accessibility

## Expert advisor

**Inklud**, experts on accessibility in Norway, is here today! Joining **Team Builders** the entire day.

They'll return one day each week until **end of June**, to support our **teams in Oslo**.

The expert will do a lot of hands-on testing using screen readers, keyboard navigation and other tools. As well as discussing WCAG rules and active laws. They can also help with the code-part of it.

The goal is to strengthen our a11y *confidence*, and make our products more accessible in the process.

---
transition: slide-up
---

# <twemoji-wheelchair-symbol/> Accessibility

## Accessibility Champions

All Oslo-teams now have champions, one for **Front-end** and one for **UX** respectively. 

We also have these in Denmark and Sweden, while we haven't worked out details for the Polish or Slovakian staff yet.

Champions are *not experts*, but the go-to person for each team to focus on a11y and elevate questions in **the bi-weekly Accessibility Champions forum**. Here they share experiences and learnings, as well as discuss shared topics and issues.

---
transition: slide-left
layout: center
---

# Builders Core

---
transition: slide-left
---

# <twemoji-notebook-with-decorative-cover/> Builders Core

## Latest: 1.3.0

**@gjensidige/builders-components@1.3.0**

**@gjensidige/core-navigation@3.3.0**

A few handy improvements, fixes, and features!

Take a dive in *#builders-core* for details

## Around the corner: 1.4.0

* Fixes and improvements
* New `<Divider>` component

---
transition: slide-up
---

# <twemoji-notebook-with-decorative-cover/> Builders Core

<img src="/images/2024-04-10/core1-3.png" class="rounded shadow" alt="" />

---
transition: slide-left
layout: center
---

# News, Inspiration, Updates

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> News

## Slack #frontend

* Added a topic with quicklink to our sister-channel #accessibility
* Added a description
* Added a few handy bookmarks

<img src="/images/2024-04-10/slack-frontend.png" class="rounded shadow" alt="" />

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> News

## Figma dev-mode

<v-clicks>

* As you know we've stopped giving out licenses to developers ...
* ... to focus on a more dedicated trial-period
* I've hand-picked 7 developers to get dev-mode
* They are testing it, sharing pros and cons
* After April + May we'll see if we can pitch more licenses to managers 
* It's sadly not cheap, at 350 EUR per user/year

</v-clicks>

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
transition: slide-left
---

# <twemoji-cherry-blossom/> Inspiration

## Trying GitHub Actions (GHA) locally

This is a common pain. Not all areas can be covered, but some can be tested locally using `act`.

`act` has some GHA features, but not all, but worth trying out. Might assist you in leveling up your GHA game and speeding up getting your actions right.

* <twemoji-rolled-up-newspaper/> [Article on getting started](https://www.freecodecamp.org/news/how-to-run-github-actions-locally/)  

* <twemoji-globe-with-meridians/> [Here's the act docs](https://nektosact.com/)

---
transition: slide-up
---

# <twemoji-cherry-blossom/> Inspiration

## Scroll-driven animations in pure CSS

<v-clicks>

* New in vanilla CSS =D
* Bye-bye dependencies and libraries
* Relies on two new CSS-functions, `scroll()` and `view()`
* Native support is not awesome yet ... (Chromimium only)
* Still slightly above 70% support globally
* You do animation as usual, but with added features/functions
* <twemoji-rolled-up-newspaper/> [Nice intro-article](https://tympanus.net/codrops/2024/01/17/a-practical-introduction-to-scroll-driven-animations-with-css-scroll-and-view/)

</v-clicks>

---
transition: slide-left
---

# 1. The animation

The normal way of creating an animation to something. Will be played after load, and never end.

```css{all|1-6|8-14}
/* First create the animation: rotate something around the Y-axis 5 times */
@keyframes spin {
  to {
    transform: rotateY(5turn);
  }
}

/* Add this animation to an element, animate for 5 seconds, then loop it forever */
@media (prefers-reduced-motion: no-preference) {
  div {
    animation: spin 5s ease infinite;
    /* TODO: New fancy code will be inserted here */
  }
}
```

**Note**: Respect users that don't want a lot of motion using:
`@media (prefers-reduced-motion: no-preference) {`

---
layout: animation-1
transition: slide-left
---

# Spin me round, round, baby right round

---
transition: slide-left
---

# 2. The scroll-driven part

This is how to do it only as you scroll passed it (replacing the TODO-part in prev. slide).

```css{all|5-6|2}
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    div {
      animation: spin linear both;
      animation-timeline: view(); /* Here's the new thing */
      animation-range: contain; /* Make sure to start after ENTIRE element is in view */
    }
  }
}
```

---
layout: animation-2
transition: slide-left
---

# Scroll me round, using view()

---
transition: slide-left
---

# 3. The functions

<v-clicks>

### scroll()

* `scroll()` function contains the animation to the actual act of scrolling.
* Just scrolling starts the animation, going up reverses it - regardless if within viewport
* 0% is the top of the scrollbar
* 100% is the bottom of the scrollbar
* Thus, full animation is not played until you scroll to the bottom

### view()

* `view()` function contains the animation to crossing of a scrollport.
* 0% is when objects very bottom enters the viewport
* 100% is when the top exits the viewport
* `animation-range: contain` can be used to start after the entire element is in view

</v-clicks>

---
layout: animation-3
transition: slide-left
---

# Scroll me round, using scroll()

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

# Talk-time

---
transition: slide-up
---

# <twemoji-studio-microphone/> Talk

## "How to build a Kahoot-clone in VueJS"

> Technical overview of how I built an open source Kahoot-clone in VueJS.

-- Gaute Meek Olsen

## Quiz-time!

> Wrapping up with a live demo with a FE community-quiz.

-- Bobby Westberg


---
transition: slide-up
layout: center
---

# Quiz Time

Test your Front-end Forum (and front-end in general) knowledge. 12 questions!

1. Go to URL: [https://kuizzi.app](https://kuizzi.app/) (use any device)
2. Enter PIN: XXX
3. Create a user
4. Play!

---
transition: slide-up
layout: center
---

# The end

That's all for now!

<twemoji-red-heart class="animate-ping"/>

--

<twemoji-spiral-calendar/> Next FEF will be held the **24th of April**
