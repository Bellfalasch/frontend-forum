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

* React stats, revisited
* Accessibility
* Builders Core
* Inspiration

---
transition: slide-left
layout: center
---

# Gjensidige updates

<LogoGjensidige/>

---
transition: slide-left
---

# Gjensidige

## React at Gjensidige

Remember the research in May? **Let's compare with today!**

So, using GitHub search, I get some data across our repoes. The search is textual, requires there is a `package.json` or more in the repo.

Will count the rare config `"react": "17.x || 18.x",` as React 17.

All searches excludes archived repoes.

---
transition: slide-left
layout: two-cols
---

# Gjensidige

## React in May

* Meassured on the **6th of May**.
* We found `257` repoes
* 60% are on React 18 (double to 17)
* No one are on React 14
* Only one stuck on React 15

::right::

.  
.  

```mermaid
pie showData title Gjensidige React-landscape
    "18.*" : 152
    "17.*" : 73
    "16.*" : 27
    "15.*" : 1
```

---
transition: slide-left
layout: two-cols
---

# Gjensidige

## React in October

<v-clicks>

* Meassured on the **9th of October**.
* We found `224` repoes
* We've managed to delete/archive over **30 apps** since May
* Over **60%** are on **React 18** (over double to 17)
* We have stuff on **React 19**!
* **9** of React 17-apps are gone <twemoji-party-popper/>
* **2** of React 16-apps are gone <twemoji-party-popper/>

</v-clicks>

::right::

.  
.  

<v-clicks after>

```mermaid
pie showData title Gjensidige React-landscape
    "19.*" : 2
    "18.*" : 154
    "17.*" : 64
    "16.*" : 25
    "15.*" : 1
```

</v-clicks>

---
transition: slide-left
---

```mermaid
pie showData title React, detailed
    "19.*" : 2
    "18.3.1" : 61
    "18.2.0" : 132
    "18.1.0" : 2
    "18.0.0" : 1
    "17.0.2" : 105
    "17.0.1" : 23
    "16.14.0" : 22
    "16.13.1" : 8
    "16.10.1" : 1
    "16.9.0" : 2
    "16.5.2" : 1
    "16.4.2" : 1
    "16.4.0" : 1
    "16.3.2" : 1
    "16.2.0" : 3
    "15.4.1" : 1
    "0.14.2" : 1
```


---
transition: slide-left
---

# Gjensidige

## Agile ...

<v-clicks>

**Oh noe, not here too**

But just a short official word, since many have asked me in person:

</v-clicks>
<v-clicks after>

* My role lives on
* It changes name to reflect the `guild` lingo
* Front-end forum, and all my other forums, will remain more or less unchanged
* I will get a new manager and will be placed inside the new **Designsystem Team**
* All **Chapter Leads** will now have community-work as part of their work description
* And I hope we can get more guild-synergies with other guilds that will come
* That's all

</v-clicks>

---
transition: slide-left
layout: center
---

# <twemoji-wheelchair-symbol/> Accessibility

---
transition: slide-up
---

# <twemoji-wheelchair-symbol/> A11y docs

<v-clicks>

* Champions are now tasked at improving [our docs](https://www.gjensidige.builders/docs/core/?path=/docs/accessibility-introduction--about)
* Make sure to ask questions and throw ideas out in the open: <IconsSlack/>**#accessibility**
* One change is [the new "a11y hub" on gjensidige.builders](https://www.gjensidige.builders/learn/accessibility), our own "Learn" hub
* Methodology department will now list a11y as an official requirement
* We will create some new guides for teams testing and/or prioritizing tasks

</v-clicks>
<v-clicks after>

<img src="/images/2024-10-09/a11y-testing.png" class="rounded shadow" style="max-width:75%;" alt="" />

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

* **1.16.3** - last week
  * Misc improvements
  * Breaking change for those using `internal="small"` variant on input
  * Make sure to *not* run 1.16.2

* **1.16.1** - three weeks ago
  * **Loads of improvements!**
  * Potential breaking change in `ComboBox`
  * Make sure to *not* run 1.16.0 though

</v-clicks>

---
transition: slide-left
---

# <twemoji-notebook-with-decorative-cover/> Builders Core

## More releases

<v-clicks>

### @gjensidige/builders-icons

* **1.6.0** - three weeks ago
* *Breaking*, changes names on multiple icons

<Spacer/>

### @gjensidige/builders-tokens@1.0.15
### @gjensidige/core-navigation@3.6.20

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

## XXX

<IconsStar/> XX

XXX

<IconsWebsite/> [Example PR of one of the jobs](https://github.com/gjensidige/salg-nettbutikk/pull/5754)

---
transition: slide-left
layout: center
---

# <twemoji-rolled-up-newspaper/> News, <twemoji-cherry-blossom/> Inspiration, <twemoji-package/> Updates

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> CSS Grid Level 3 spec

Native CSS "Masonry", first public working draft by W3C.

* <IconsWebsite/> [The spec for CSS Grid Level 3](https://www.w3.org/blog/CSS/2024/09/24/css-grid-3-fpwd/)

* <IconsWebsite/> [Article diving into the topic](https://css-tricks.com/css-masonry-css-grid/)


---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> Misc news

<v-clicks>

* <IconsWebsite/> [W3C organization turned 30 years old two weeks ago](https://www.youtube.com/watch?v=0TfUBuIZkmQ)
* <IconsWebsite/> [VoidZero Inc is born, will own and drive Vite, Vitest, oxc and Rolldown](https://voidzero.dev/posts/announcing-voidzero-inc)
* <IconsWebsite/> [Deno 2 Release Candidate out not long ago](https://deno.com/blog/v2.0-release-candidate)
* <IconsWebsite/> [BiomeJS turned 1 years old, release 1.9](https://biomejs.dev/blog/biome-v1-9/)
* <IconsWebsite/> [ExpressJS, version 5 just around the corner](https://expressjs.com/en/guide/migrating-5.html)
* <IconsWebsite/> [State of HTML survey, check it out](https://survey.devographics.com/en-US/survey/state-of-html/2024)
* <IconsWebsite/> [React Router annonuces pre-release of v7, will merge with Remix](https://reactrouter.com/dev/guides)
* <IconsWebsite/> [Evan You announce VoidZero Inc, combining the best JS-tools](https://github.com/voidzero-dev/)
* <IconsWebsite/> [Evan You announce Rolldown (Rollup competitor) pushing for being done](https://rolldown.rs/)
* <IconsWebsite/> [Legal battle between WordPress and WP Engine](https://automattic.com/2024/10/03/meritless/)
* <IconsWebsite/> [OpenAI shifts from Next.JS to Remix for their website](https://dev.to/vuelancer/openais-transition-from-nextjs-to-remix-a-deep-dive-3dpl)

</v-clicks>

---
transition: slide-left
---

# <twemoji-cherry-blossom/> Cleaning inspiration?

## Killing moment.js

For the last **four years**, [not even developers of moment.js want you to use moment](https://momentjs.com/docs/#/-project-status/)!

<img src="/images/2024-10-09/moment.png" class="rounded shadow" style="max-width:95%;" alt="" />

* Gjensidige [still have 74 uses](https://github.com/search?q=org%3Agjensidige+%22%5C%22moment%5C%22%3A%22+path%3Apackage.json++NOT+is%3Aarchived&type=code) of `moment.js` (and two using `moment-mini.js`).

* _Not fan of `date-fns`? Try [luxon](https://moment.github.io/luxon/#/) or [day.js](https://day.js.org/) ... or just [go vanilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)!_

---
transition: slide-left
---

# <twemoji-cherry-blossom/> Cleaning inspiration?

## PRs killing moment.js

### For Claims

* [I did a mini-cleanup](https://github.com/gjensidige/claims-follow/pull/937) in `claims-follow`. It used `date-fns`, `moment-mini`, and a lot of string-based custom date functions. Replaced it all with [date-fns](https://date-fns.org/), for sanity.

### For Sweden

* [I then tried to repeat this for Sweden](https://github.com/gjensidige/sweden-parts/pull/558) in `sweden-parts` (a mono-repo). It used `date-fns`, `moment`, and a lot of string-based custom date functions.
  *  Replaced a lot of moment ... 
  *  ... until I found that it is required by dependencies, so had to keep it for now.
  *  Killed `date-fns` though, and a localization package for moment.

---
transition: slide-left
---

# <twemoji-cherry-blossom/> The slide I thought I'd never create ...

## The state of Gjensidige package.json is ... horrible

It looks like many struggle with `dependencies` and `devDependencies`

### Repeated mistakes

1. Not using `devDependencies` at all, everything goes into `deps`
2. Many repoes have same package, in both!
  * Locally, running `npm i` installs `deps` and `devDeps`*, 
  * In production (`NODE_ENV=production`) all `devDeps` are skipped
  * This opens for unforseen issues
3. Adding same packages to both `devDeps` and `deps`, but with different versions 
  * This will install only the highest version, but for production `devDeps` are skipped.

---
transition: slide-left
---

# devDependencies or dependencies?

* `eslint`, `estlint-*`, `prettier` - all **linting** things = `devDependencies`
* `typescript`, `@types/*` - all **typing** in your editor = `devDependencies`
* `vitest`, `cypress`, `playwright` - everything **testing** = `devDependencies`
* `sass`, `loader-*` - everything **build**-releated = `devDependencies`
* With a few exceptions ...
* Unsure? Check package npm-page/docs (`--save` = deps, `--save-dev` = devDeps)

## Does it matter?

* Treeshaking does a lot, hopefully, but it cannot fix everything
* Commonly leads to confusion later, updates to the wrong package, etc
* Higher risk of inconsistencies/bugs between localhost and production
* Risky policy to rely on something wrong solving itself down the line

---
transition: slide-left
---

# devDependencies or dependencies?

## Fun (more sad, tbh) examples

* **@types/node** is installed as a dep in over 40 repoes (180 doing it right)
* **typescript** is installed as a dep in over 60 repoes
* **prettier** is installed as a dep in 10 repoes

## Side note

* In 2024 I would suggest avoiding `peerDependencies` all together (for your own apps).

## Read more

* <IconsWebsite/> [Stackoverflow explains this very well](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencie).
* <IconsWebsite/> [dev.to](https://dev.to/writech/a-complete-guide-to-regular-dev-and-peer-dependencies-in-npm-57j9) (and [thousands more](https://dev.to/jha/save-and-save-dev-why-you-should-know-the-difference-j7p)) writes a blog on this.

---
transition: slide-left
---

# <twemoji-cherry-blossom/> Monorepo 2.0?

## Turborepo

**Commercial DK** and Pavol Repka tried out the old trusted "go-to" tools `lerna` and `nx` (same thing now since nx took over lerna years ago).

They failed to deliver the speed they needed.

So they tried [Turborepo](https://turbo.build/repo/docs) (from Vercel) which does monorepos smarter and faster.

It does rely on a remote cache mechanism, so you should be fully aware of what your app contains, does, and that it ends up in the cloud outside of Gjensidige.

PS: This team is already doing *React 19* ...

---
transition: slide-left
layout: two-cols
---

# <twemoji-cherry-blossom/> Tech debt

Refactoring, and working with tech debt is close to never in the backlog.

Here's an almost [ancient but very good article on an approach that actually works](https://ronjeffries.com/xprog/articles/refactoring-not-on-the-backlog/). Written by no other than Ron Jeffries, one of the founders of eXtreme Programming, and more.

> Clean up where you work, clean out the weeds implementing your feature, leave the rest (for now).

Another good article on [what it is, and why it happens](https://netgen.io/blog/how-to-cope-with-legacy-code-and-technical-debt).

::right::

**Tech debt versus working in it**:
<img src="/images/2024-10-09/tech-debt.jpg" class="rounded shadow" style="max-width:50%;float:left" alt="" /><img src="/images/2024-10-09/tech-debt-workaround.jpg" class="rounded shadow" style="max-width:50%;" alt="" />

**A better way of approaching it**:
<img src="/images/2024-10-09/refactoring.jpg" class="rounded shadow" style="max-width:65%;" alt="" />

---
transition: slide-left
---

# <twemoji-cherry-blossom/> Reading tips

<v-clicks>

* <IconsWebsite/> [Ever in need to win an argument for your a11y-efforts?](https://www.smashingmagazine.com/2024/06/how-make-strong-case-accessibility/)
* <IconsWebsite/> [We don't have many images, but in general web, a few tips on defering their loading](https://www.debugbear.com/blog/defer-offscreen-images)
* <IconsWebsite/> [Improve performance of pages using content-visibility](https://nolanlawson.com/2024/09/18/improving-rendering-performance-with-css-content-visibility/) (more [on web.dev](https://web.dev/articles/content-visibility))
* <IconsWebsite/> [CSS so big even Wes Bos just found out about display: contents](https://www.instagram.com/p/DAbU5YoqMux/)
* <IconsWebsite/> [Guide to everything-Anchors in CSS](https://css-tricks.com/css-anchor-positioning-guide/)
* <IconsWebsite/> [Kent C. Dodds' cheat sheet for React 19](https://www.epicreact.dev/react-19-cheatsheet)
* <IconsWebsite/> [Article on refactoring, and when it can be bad](https://www.builder.io/blog/good-vs-bad-refactoring)

</v-clicks>

---
transition: slide-up
layout: two-cols-header
---

# <twemoji-package/> Updates

::left::

**[Vite](https://vitejs.dev/)**  
5.4.8 - [Last week](https://github.com/vitejs/vite/blob/v5.4.8/packages/vite/CHANGELOG.md)

**[Vitest](https://vitest.dev/)**  
2.1.2 - [2.1 is out of beta](https://github.com/vitest-dev/vitest/releases)

**[Prettier](https://prettier.io/)**  
3.3.3 - [latest stable](https://prettier.io/versions)

**[Eslint](https://eslint.org/)**  
9.11.1 - [v8 just hit EOL](https://eslint.org/version-support/)

**[TypeScript](https://www.typescriptlang.org/)**  
5.6.2 - [5.6 out a few weeks back](https://devblogs.microsoft.com/typescript/announcing-typescript-5-6/)

**[clsx](https://github.com/lukeed/clsx?tab=readme-ov-file#readme)**  
2.1.1 - Same clsx, still [faster](https://github.com/lukeed/clsx/tree/master/bench) than `classnames` ([50 repoes](https://github.com/search?q=org%3Agjensidige+%22%5C%22classnames%5C%22%3A+%5C%22%5E%22+path%3Apackage.json++NOT+is%3Aarchived&type=code))

::right::

## React  
<IconsWebsite/> https://react.dev
* 18.3.1 - [v19 still in beta](https://19.react.dev/)

## Node.JS
<IconsWebsite/> https://nodejs.org/en
* 20.17.0 LTS - latest 22.9.0

## Bun
<IconsWebsite/> https://bun.sh/
* 1.1.29

---
transition: slide-up
layout: center
---

# The end

That's all for now!

<twemoji-red-heart class="animate-ping"/>

--

<twemoji-spiral-calendar/> Next FEF will be held the **23th of October**
