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

## 30th of August

...
<twemoji-man-technologist/> Bobby Westberg

---
transition: slide-up
---

# <twemoji-spiral-notepad/> Agenda

Source: https://github.com/Bellfalasch/frontend-forum

* Builders Core
* Deprecated Builders-packages
* CRA to Vite
* Developer surveys
* FE News
* FE Inspiration
* Gjensidige FE Survey

---
transition: slide-up
---

# Builders Core

New name: **Builders Core** ("*Builders Components*" is one of many builders-packages, like "*Builders Icons*" and "*Builders Tokens*").

* *#builders-core* (new channel name!)
* <twemoji-baby/> Few weeks old
* <twemoji-ring-buoy/> Old packages will live on (but not actively maintained)
* <twemoji-building-construction/> Migration guide: https://www.gjensidige.builders/docs/core/?path=/docs/migrating-to-builders-core--about

---
transition: slide-left
---

# Builders Core

Huge improvements, and new way of using them - **Compound Components**

```js
// Old way
<ComponentX title="My title" description="My desc"/>

// New way
<ComponentX>
  <ComponentX.Title>My title</ComponentX.Title>
  <ComponentX.Description>My desc</ComponentX.Description>
</ComponentX>
```

---
transition: slide-left
---

# Builders Core

Looooads of updates and improvements already!

Thanks community for feedback! <twemoji-red-heart/>

---
transition: slide-left
---

<img src="/images/2023-08-30/core3.png" class="rounded shadow" />

---
transition: slide-left
---

<img src="/images/2023-08-30/core2.png" class="rounded shadow" />

---
transition: slide-left
---

<img src="/images/2023-08-30/core1.png" class="rounded shadow" />

---
transition: slide-up
---

# <twemoji-headstone/> Sunsetted libraries

* <twemoji-coffin /> **Grid** - what are people planning? Builders are considering smaller util components.
* <twemoji-coffin /> **ESlint** - try defaults, create your own overwrites per repo or shared (usually pretty small).
* <twemoji-coffin /> **Global CSS** - it was just getting in the way
* <twemoji-coffin /> **Utils** - use tokens and CSS instead
* <twemoji-coffin /> **Link Helper** - used only locally

---
transition: slide-left
---

# <twemoji-racing-car/> Vite

In the past years many teams have moved apps to Vite, it will probably be a thing for teams for some time.

* <twemoji-shopping-cart/> NO nettbutikk done it (thx Gaute) - https://github.com/gjensidige/salg-nettbutikk/pull/2015
* <twemoji-shopping-cart/> NO G+ done it (thx Jon) - https://github.com/gjensidige/salg-gpluss/pull/396
* <twemoji-clipboard/> Step-by-step inspo (thx Ludovit) - https://blog.logrocket.com/vite-3-vs-create-react-app-comparison-migration-guide/

---
transition: slide-left
---

# <twemoji-bar-chart/> Dev Surveys

Many 2023-surveys have closed recently, and the reports are in.

* <twemoji-chart-decreasing/> Stackoverflow 2023 - https://survey.stackoverflow.co/2023/#ai
* <twemoji-chart-increasing/> State of CSS 2023 - https://2023.stateofcss.com/en-US
  * <twemoji-cinema/> Talk on SoCSS - https://www.twitch.tv/codeitlive

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> FE News

## Dependabot
You can now group PRs!

https://github.blog/changelog/2023-08-24-grouped-version-updates-for-dependabot-are-generally-available/ 

```yml{all|3|4-7|8-10|3-10}
# .github/dependabot.yml

groups:
  development-dependencies:
    dependency-type: "development"
    exclude-patterns:
    - "somepattern*"
  whatever-name:
    patterns:
    - "somepattern*"
```

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> FE News

## Chrome news

### Devtools 117
Most interesting are local override improvements (have you tried?), and new ability to override XHR-requests.

https://developer.chrome.com/blog/new-in-devtools-117/

### Chrome 116
Minor updates (like more improved UI for missing CSS-imports)

https://developer.chrome.com/blog/new-in-chrome-116/

---
transition: slide-left
---

# <twemoji-cherry-blossom/> FE Inspiration

### <twemoji-anchor/> CSS **Anchor Positioning**
```css{all|2}
.anchor {
  anchor-name: --my-anchor;
}
```

```html
<a id="my-anchor" class="anchor"></a>
<div anchor="my-anchor" class="boat">I’m a boat!</div>
```

https://developer.chrome.com/blog/tether-elements-to-each-other-with-css-anchor-positioning/ 

### <twemoji-window/> CSS **subgrid**
```css{all|4}
.grid {
  display: grid;
  grid-column: 1 / 3;
  grid-template-columns: subgrid;
}
```

https://ishadeed.com/article/learn-css-subgrid/

---
transition: slide-left
---

# <twemoji-ballot-box-with-ballot/> FE Survey

Gjensidige have done an amazing journey the last few years. From introducing **Slack** and **Github**, to **GAP** and **Builders Core**, to all the applications each one of you develop.

We're now interesting in understanding more about your experience as a *front-end developer*.

* What tools do you use,
* tools you cannot use,
* gaps in the practical day-to-day development,
* other pain-points,
* things that make you happy.

What could the community, the discipline, and Gjensidige do better?

---
transition: slide-up
layout: center
---

# That's all

...
<twemoji-red-heart class="animate-ping"/>

Share the invite!

See you next time