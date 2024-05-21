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

## 22th of May

...
<twemoji-man-technologist/> Bobby Westberg

---
transition: slide-up
---

# <twemoji-spiral-notepad/> Agenda

* Accessibility
* Builders Core
* Poll/vote results
* Other news, updates

---
transition: slide-left
layout: center
---

# Accessibility

---
transition: slide-up
---

# <twemoji-wheelchair-symbol/> Accessibility

* Many builders-components improvements done, more to come
* Separate notes in many component docs, like `<Cards/>`
* More docs to come

---
transition: slide-left
layout: center
---

# Builders Core

---
transition: slide-left
---

# <twemoji-notebook-with-decorative-cover/> Latest components

## builders-components

* 1.10 released yesterday
* 1.9 released just before 17th of May
* 1.8 released soon after last FEF
* Many handy improvements, fixes, and features!
* Many accessibility <twemoji-wheelchair-symbol/> improvements
* Take a dive in *#builders-core* for details

---
transition: slide-left
---

# <twemoji-notebook-with-decorative-cover/> builders-components 1.8

<img src="/images/2024-05-22/core1-8.png" class="rounded shadow" style="max-width:85%;" alt="" />

---
transition: slide-left
---

# <twemoji-notebook-with-decorative-cover/> builders-components 1.8

> **Note:** Moving forward, both **ValidationMessage** and **HelpText** should be moved outside label elements for better accessibility. This is changed in all documentation, all components will add a console.warn about the change if used incorrectly, but the update is visually backwards compatible so you can do updates gradually


```js
// Recommended way of explicitly binding labels and helptexts to an input:
const uniqueId = 'MySuperUniqueID';
<Label htmlFor={uniqueId}>Label text</Label>
<HelpText htmlFor={uniqueId}>Help text</HelpText>
<Input id={uniqueId} />

// Stop using implicit binding using wrapping, example:
<Label>
  <HelpText/>
  <Input/>
</Label>
```

---
transition: slide-left
---

# <twemoji-notebook-with-decorative-cover/> Builders Core

## Polls

We ran two polls in #frontend for two weeks. Here's the results ...

---
transition: slide-left
---

# <twemoji-notebook-with-decorative-cover/> Builders Core

## Breaking changes

Vote using emojis, stick to one vote per person, comment in the thread.

* <twemoji-unicorn/> - We expect a perfect product that never changes
* <twemoji-stop-sign/> - Break 1-2 times a year, collect as much as possible for each break (= fewer but bigger breaks)
* <twemoji-warning/> - Break 4-6 times a year, collecting a few breaking changes and grouping them together so we don't need to change the code too often or much.
* <twemoji-green-heart/> - For all I care you could break stuff in every release, I handle stuff like that for breakfast, just let me know the details (edited) 

---
transition: slide-left
---

```mermaid
pie showData title Breaking changes
    "Never" : 0
    "1-2 times" : 4
    "4-6 times" : 6
    "Bring it!" : 7
```

---
transition: slide-left
---

# <twemoji-notebook-with-decorative-cover/> Builders Core

## Release notes

* I prefer finding release notes collected for all releases in one place - for me that's Storybook (like today)
* I prefer finding release notes for all releases in one place - for me that's Github and the releases-section
* I would like to read a blog/article with release notes and some more information on gjensidige.builders
* Spawn a changelog.md (or similar) file with every package, I'll dig into it if needed
* Break down the release using beautiful emojis highlighting the updates in Slack (separate channel)
* Additional guides and more code examples on certain components, or upgrade jobs
* It would be nice with short videos on certain components, or upgrade jobs
* More information about the releases on Front-end Forum

---
transition: slide-up
---

```mermaid
pie showData title Release notes
    "Storybook" : 2
    "Github" : 6
    "Blog" : 0
    "Changelog.md" : 4
    "Slack-channel" : 20
    "More guides" : 4
    "Videos" : 0
    "FEF" : 1
```

---
transition: slide-left
layout: center
---

# Gjensidige-related

<LogoGjensidige/>

---
transition: slide-left
---

# Application Portal

Using **Application Portal**? You can now activate **Faro**!

[Release notes](https://github.com/gjensidige/application-portal/releases/tag/v20240516122201-cfff3fcb)

<img src="/images/2024-05-22/ap-faro.png" class="rounded shadow" style="max-width:85%;" alt="" />


---
transition: slide-left
layout: center
---

# News, Inspiration, Updates


---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> News

## State of HTML 2023

[State of HTML 2023](https://2023.stateofhtml.com/en-US)

* Less than 175 Norwegians voted
* Ran Sept - Oct 2023
* Close to 21k responses

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> News

## Google I/O 2024

[10 highlights from the conference](https://developer.chrome.com/blog/web-at-io24)

* A lot of AI
* AI-powered DevTools for debugging 

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> News

## Safari's webkit 17.5

[Release notes](https://webkit.org/blog/15383/webkit-features-in-safari-17-5/)

* `text-wrap: balance` now works
* `light-dark()` function for easier light-dark mode

```css
:root {
  color-scheme: light dark;
  --background: light-dark(black, white);
}
body {
  background: var(--background);
}
```

---
transition: slide-up
layout: two-cols-header
---

# <twemoji-package/> Updates

::left::

**[React](https://react.dev)**  
18.3.1 - [out since April](https://github.com/facebook/react/releases)

**[Vite](https://vitejs.dev/)**  
5.2.11 - [see full changelog](https://github.com/vitejs/vite/releases)

**[Vitest](https://vitest.dev/)**  
1.6.0 - [also working on 2.0 beta](https://github.com/vitest-dev/vitest/releases)

**[Biome](https://biomejs.dev/)**  
1.7.3 - [1.7 released in April](https://biomejs.dev/blog/biome-v1-7/)

::right::

## Node.JS
<twemoji-globe-with-meridians/> https://nodejs.org/en
* 20.13.1 LTS - latest 22.2.0

## Bun
<twemoji-globe-with-meridians/> https://bun.sh/
* 1.1.8

---
transition: slide-up
layout: center
---

# The end

That's all for now!

<twemoji-red-heart class="animate-ping"/>

--

<twemoji-spiral-calendar/> Next FEF will be held the **5th of June**

**Temporary location change**: Claims stole Samhandlingssonen, so I have booked two rooms:
* *Jenterommet* - Sales Private, Service Private, Claims
* *Musikkrommet* - Builders & App, Sales Commercial, Service Commercial  

Use the TV in the room to tune into the show.

_Next after that will be **19th of June**, last before summer holidays July-Aug_
