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
* Dev surveys
* FE News
* FE Inspiration


---
transition: slide-up
---

# Builders Core

* Few weeks old (3?)
* *#builders-core* (new channel name!)
* New name: **Builders Core**
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
* **Prettier** - try defaults, create your own overwrites per repo or shared (usually pretty small).
* More?

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
