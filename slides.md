---
theme: the-unnamed

# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks?
lineNumbers: true
# default page transition
transition: fade-out

favicon: './public/favicon.png'

layout: cover
---

# Front-end Forum

## 17th of January

...
<twemoji-man-technologist/> Bobby Westberg

---
transition: slide-up
---

# <twemoji-scroll/> Agenda

* Hi 2024, bye 2023
* Builders Core
* FE News
* FE Inspiration

---
transition: slide-left
layout: test
---

# <twemoji-fireworks/> 2024

A full year of Front-end Forums have come to pass.

<v-clicks>

Hope I'll see you for 15-some FeF this year.

If there's any suggestions, wishes, let me know. Otherwise I'll stick to the winning concept:

</v-clicks>

<v-clicks>

* Samhandlingssonen (and on Teams)
* Starts at 09:30
* Bi-weekly (odd-numbered weeks)
* 30-60 minutes
* Open for you to share

</v-clicks>

---
transition: slide-up
background: ./images/2024-01-17/wrapped.png
---

# <twemoji-wrapped-gift/> 2023 wrapped

Hope you checked the **2023 Wrapped** I did before Christmas?

https://bellfalasch.github.io/frontend-wrapped/

<v-clicks>

<Arrow x1="400" y1="350" x2="350" y2="230" />

### Key facts

</v-clicks>
<v-clicks>

* 111 slides created!
* 19 forums (3 collabs)
* 12 talkers

</v-clicks>
<v-clicks>

### Source code
It's using **Bun**, **Vite 5**, simple **Biome**, some **Three.js** ... and loads of CSS animations. Wanna see the source:
https://github.com/Bellfalasch/frontend-wrapped

</v-clicks>

---
transition: slide-left
---

# <twemoji-notebook-with-decorative-cover/> Builders Core

For details, see Slack: *#builders-core* - Keep the constructive feedback flowing! <twemoji-red-heart />

<v-clicks>

Read their "2023 Wrapped" - https://www.gjensidige.builders/community/blog/2023-wrapped

## Releases

#### @gjensidige/builders-components@0.7.0

Introduces breaking changes to how Analytics works.

https://www.gjensidige.builders/docs/core/?path=/docs/packages-builders-components-tracking--about

</v-clicks>

---
transition: slide-up
---

# Analytics with Builders Core 0.6.8 +

<v-clicks>

#### Prior to upgrade

```js
import { Tracker, TrackingProvider } from '@gjensidige/core-analytics';

const tracker = new Tracker({ ...tracker options here });

<TrackingProvider options={{ options: tracker.options }}>
  ...your app here
</TrackerProvider>
```

#### After upgrading

```js{2,6,10}
import { Tracker, TrackingProvider } from '@gjensidige/core-analytics';
import { BuildersComponentsTrackingProvider } from '@gjensidige/builders-components';

const tracker = new Tracker({ ...tracker options here });

<BuildersComponentsTrackingProvider options={{ options: tracker.options }}>
  <TrackingProvider options={{ options: tracker.options }}>
    ...your app here
  </TrackerProvider>
</BuildersComponentsTrackingProvider>
```

</v-clicks>

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> FE News & inspiration

## Biome
<twemoji-globe-with-meridians/> https://biomejs.dev/
It's a fast formatter for JavaScript, TypeScript, JSX, and JSON that scores 97% compatibility with Prettier, saving CI and developer time. It's also a linter! One tool to rule them all.
* Biome 1.5 is out (new logo and website too) - https://biomejs.dev/blog/biome-v1-5/
* Wins the 25k USD bounty on "a faster Rust-based prettier" - https://biomejs.dev/blog/biome-wins-prettier-challenge/
* 2024 promises even more speed, prettier-migration scripts - https://biomejs.dev/blog/roadmap-2024/

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> FE News & inspiration

## Qwik
<twemoji-globe-with-meridians/> https://qwik.builder.io/
With a new approach they (former Angular inventor) claim to have solved true instant apps. It eliminates the hydration-step, introducing something called "resumability". The code looks almost like React.
* 1.3.2 released two weeks ago - https://github.com/BuilderIO/qwik/releases/tag/v1.3.2
* Try the tutorial - https://qwik.builder.io/tutorial/welcome/overview/

---
transition: slide-left
layout: two-cols-header
---

# <twemoji-package/> Updates

::left::

## Next.js
<twemoji-globe-with-meridians/> https://nextjs.org/
* 14.0.4 is out since December (.5 comes soon)

## Astro
<twemoji-globe-with-meridians/> https://astro.build/
* 4.1 is out since two weeks - https://astro.build/blog/astro-410/

::right::

## Bun
<twemoji-globe-with-meridians/> https://bun.sh/
* 1.0.21 released recently

## Remix
<twemoji-globe-with-meridians/> https://remix.run/
* 2.4.1 (now using vite)

## Vue.JS
<twemoji-globe-with-meridians/> https://vuejs.org/
* 3.4 just out before end of 2023

---
transition: slide-up
layout: two-cols-header
---

# <twemoji-package/> Stuff we actually use

::left::

## Vite
<twemoji-globe-with-meridians/> https://vitejs.dev/
* 5.0.11 two weeks ago

## Vitest
<twemoji-globe-with-meridians/> https://vitest.dev/
* 1.1.3 is the latest, 1.1 release just before x-mas

::right::

## Yarn
<twemoji-globe-with-meridians/> https://yarnpkg.com/
* 4.0.2 is stable

## Node.JS
<twemoji-globe-with-meridians/> https://nodejs.org/en
* 20.11.0 LTS - latest 21.5.0

---
transition: slide-up
layout: center
---

# The end

That's all for me!

<twemoji-red-heart class="animate-ping"/>
