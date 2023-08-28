---
# try also 'default' to start simple
theme: dracula

# https://sli.dev/custom/highlighters.html
highlighter: prism
# show line numbers in code blocks
lineNumbers: true
# page transition
transition: slide-left
---

# Front-end Forum

## 30th of August

Bobby Westberg

---
transition: fade-out
---

# Agenda

Source: https://github.com/Bellfalasch/frontend-forum

* Builders Core
* Deprecated Builders-packages
* Developer surveys
* FE News
* FE Inspiration
* FE Survey

---
transition: slide-up
---

# Builders Core

* Few weeks old (3?)
* New name: **Builders Core**
* *#builders-core* (new channel name!)
* Migration guide: https://www.gjensidige.builders/docs/core/?path=/docs/migrating-to-builders-core--about
* <twemoji-ring-buoy/> Old packages will live on (but not actively maintained)
* <twemoji-building-construction/> Huge improvements, and new way of using them - Compound Components

```js
// Current way
<ComponentX title="My title" description="My desc"/>

// New way - Compound Components
<ComponentX>
  <ComponentX.Title>My title</ComponentX.Title>
  <ComponentX.Description>My desc</ComponentX.Description>
</ComponentX>
```

---
transition: slide-up
---

# Builders Core

Looooads of updates and improvements already! Thanks community!

---
transition: slide-left
---

![Local Image](/images/2023-08-30/core3.png)

---
transition: slide-left
---

![Local Image](/images/2023-08-30/core2.png)

---
transition: slide-left
---

![Local Image](/images/2023-08-30/core1.png)

---
transition: slide-up
---

# <twemoji-headstone/> Sunsetted libraries

* **Grid** - what are people planning? Builders are considering smaller util components.
* **ESlint** - try defaults, create your own overwrites per repo or shared (usually pretty small).
* **Global CSS** - killed
* **Utils** - killed (use tokens instead)
* **Link Helper** - killed (used only locally)

---
transition: slide-left
---

# Vite

In the past years many teams have moved apps to Vite, it will probably be a thing for teams for some time.

* NO sales done it (thx Gaute) - https://github.com/gjensidige/salg-nettbutikk/pull/2015
* NO G+ done it (thx Jon) - https://github.com/gjensidige/salg-gpluss/pull/396
* Step-by-step inspo from (thx Ludovit)  https://blog.logrocket.com/vite-3-vs-create-react-app-comparison-migration-guide/

---
transition: slide-left
---

# Dev Surveys

* <twemoji-chart-increasing/> Many 2023-surveys have closed
* <twemoji-chart-decreasing/> Stackoverflow 2023 - https://survey.stackoverflow.co/2023/#ai
* <twemoji-bar-chart/> State of CSS 2023 - https://2023.stateofcss.com/en-US
  * <twemoji-film-projector/> Talk on SoCSS - https://www.twitch.tv/codeitlive

---
transition: slide-left
---

# FE News

**Dependabot** You can now group PRs 
https://github.blog/changelog/2023-08-24-grouped-version-updates-for-dependabot-are-generally-available/ 

```yml
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

**Devtools 117** Mostly interesting are local override improvements (have you tried?), and now ability to override XHR-requests
https://developer.chrome.com/blog/new-in-devtools-117/

**Chrome 116** Minor updates (like more improved UI for missing CSS-imports)
https://developer.chrome.com/blog/new-in-chrome-116/

---
transition: slide-left
---

# FE Inspiration

<twemoji-anchor/> CSS **Anchor Positioning**
```css
.anchor {
  anchor-name: --my-anchor;
}
```

```html
<a id="my-anchor" class="anchor"></a>
<div anchor="my-anchor" class="boat">I’m a boat!</div>
```

https://developer.chrome.com/blog/tether-elements-to-each-other-with-css-anchor-positioning/ 


<twemoji-window/> CSS **subgrid**
```css
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

# FE Survey

Gjensidige have done an amazing journey the last few years. From introducing **Slack** and **Github**, to **GAP** and **Builders Core**, to all the applications each one of you develop.

We're now interesting in understanding more about your experience as a *front-end developer*.

* What tools do you use,
* tools you cannot use,
* gaps in the practical day-to-day development,
* other pain-points,
* things that make you happy.

What could the community, the discipline, and Gjensidige do better?

