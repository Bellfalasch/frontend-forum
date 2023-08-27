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

* New Builders Core
* Deprecated packages
* Dev survey results
* FE News
* FE Inspiration


---
transition: slide-up
---

# Core Components

* *#builders-core*
* New name!
* Slack-channel new name
* Huge improvements, and new way of using them
* Old packages will live on (but not actively maintained)

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

# Sunsetted libraries

* **Grid** - what are people planning? Builders are considering smaller util components.
* **Prettier** - try defaults, create your own overwrites per repo or shared (usually pretty small).

---
transition: slide-left
---

# Dev Surveys

* 2023 surveys have closed
* Stackoverflow - https://survey.stackoverflow.co/2023/#ai
* State of CSS - https://2023.stateofcss.com/en-US
* Excellent talk on SoCSS - https://www.twitch.tv/codeitlive

---
transition: slide-left
---

# FE News

* Dependabot, grouped - https://github.blog/changelog/2023-08-24-grouped-version-updates-for-dependabot-are-generally-available/ 
* https://developer.chrome.com/blog/new-in-chrome-116/
* Mest intressant, override XHR-requests & local overrides - https://developer.chrome.com/blog/new-in-devtools-117/

---
transition: slide-left
---

# FE Inspiration

* CSS Anchor Positioning - https://developer.chrome.com/blog/tether-elements-to-each-other-with-css-anchor-positioning/
* CSS subgrid - https://ishadeed.com/article/learn-css-subgrid/
