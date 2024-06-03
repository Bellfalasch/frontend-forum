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

## 5th of June

...
<twemoji-man-technologist/> Bobby Westberg

---
transition: slide-up
---

# <twemoji-spiral-notepad/> Agenda

* Accessibility
* Builders Core
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

<v-clicks>

* Inklud specialist have the final session with Claim teams today
* Only two sessions with Pension remains
* Accessibility Champion Forum to be our meeting ground now
* There's been some changes in the champion ranks
* Slovakia have trained and are now adding their own champions
* Storybook page, under principles, is on the way

</v-clicks>
<v-clicks after>

<img src="/images/2024-06-05/storybook-a11y.png" class="rounded shadow" style="max-width:85%;" alt="" />

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

# <twemoji-notebook-with-decorative-cover/> Releases

## @gjensidige/builders-components

<v-clicks>

* **1.12.0** out Friday
* **1.12.1** out Monday
* And many other releases
* Many accessibility <twemoji-wheelchair-symbol/> improvements

</v-clicks>

---
transition: slide-left
---

# <twemoji-notebook-with-decorative-cover/> builders-components 1.12

<img src="/images/2024-06-05/core1-12.png" class="rounded shadow" style="max-width:85%;" alt="" />

---
transition: slide-left
---

# <twemoji-notebook-with-decorative-cover/> builders-components 1.11.2

* **Fix:** `Textarea` always track only label - not value

---
transition: slide-left
---

# <twemoji-notebook-with-decorative-cover/> Builders Core

## New Slack-channel

Follow **#builders-core-announcements** for release notes!

This is the new place to keep track on to be first on the latest fixes and features. Based on community/user feedback.

---
transition: slide-left
layout: center
---

# Gjensidige-related

<LogoGjensidige/>

---
transition: slide-up
---

# Feedback App

Previously owned and developed by **Team Service**, it will now move over and be remade by **Team Builders**.

<img src="/images/2024-06-05/feedback.png" class="rounded shadow" style="max-width:30%;" alt="" />

---
transition: slide-left
layout: center
---

# <twemoji-rolled-up-newspaper/> News, <twemoji-cherry-blossom/> Inspiration, <twemoji-package/> Updates

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> State of HTML 2023

If you didn't click around the stats from the survey results announced on last FEF, perhaps a summary article can interest you?

<IconsWebsite/> [Sacha Greif's key takeaways from the State of HTML survey](https://frontendmasters.com/blog/state-of-html-2023-results-2/)  

Forgot to check the survey? The full stats are still there!

<IconsWebsite/> [Browse the state of HTML 2023](https://2023.stateofhtml.com/en-US)

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> Faster Edge

Microsoft wanna win more users over, obviously, makes Edge even faster \*

<IconsWebsite/> [Edge 122 released last week - summary](https://blogs.windows.com/msedgedev/2024/05/28/an-even-faster-microsoft-edge/)

_\* Well ... only the UI of Edge ..._

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> React Conference 2024

This was a big conference for React. First physical conference since 2019!


<v-clicks>

* In 2023 React was downloaded ... 1 billion times
* React 19 release candidate!
* The react compiler now open source
* Also a lot of React Native coverage
* All talks shared on Youtube

</v-clicks>
<v-clicks after>

<IconsWebsite/> [Official recap (with link to all talks)](https://react.dev/blog/2024/05/22/react-conf-2024-recap)

</v-clicks>

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> WCAG 3.0

<v-clicks>

**Global Accessibility Awarness day** was the **16th of May**.

**W3C** celebrated this by publishing their **latest draft** on **WCAG 3.0**.

</v-clicks>

<v-clicks after>

* Early early stages
* Details the unspoken information, like tone of voice etc
* Based on 174 "outcomes", moving away from the established "success criterias"
* This is up from translatable 78 found in WCAG 2.1 (A, AA and AAA)
* Focuses on "what did we miss in WCAG 2.x?"

</v-clicks>
<v-clicks after>

<IconsWebsite/> [Deque's article on it](https://www.deque.com/blog/w3c-unveils-174-new-outcomes-for-wcag-3-0/)

</v-clicks>

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> May 29th - Wordpress turned 21

<Tweet id="1795196552048173268" />

---
transition: slide-left
---

# <twemoji-cherry-blossom/> Curious on CSS layers?

Two weeks ago on **Smashing Magazine**, inspiring article on "do you really need that framework for that design", covering basically how powerful CSS have become as of late.

Many will, by old habits, boilerplate a new project using some standard packages and frameworks. CSS wanna eliminate the need for a lot of them.

Layers are not ready for production, but if you wanna peek into the future of CSS using layers, have a read!

<IconsWebsite/> [Complex layouts using only pure CSS](https://www.smashingmagazine.com/2024/05/modern-css-layouts-no-framework-needed/)

```css
@layer theme {
  :root {
    --some-color: #fff;
    --other-color: #bbb;
  }
}
```

---
transition: slide-up
layout: two-cols-header
---

# <twemoji-package/> Updates

TODO: as of 2023-06-03

::left::

**[React](https://react.dev)**  
18.3.1 - [out since April](https://github.com/facebook/react/releases)

**[Vite](https://vitejs.dev/)**  
5.2.12 - [see full changelog, also 6.0 alpha](https://github.com/vitejs/vite/releases)

**[Vitest](https://vitest.dev/)**  
1.6.0 - [also working on 2.0 beta](https://github.com/vitest-dev/vitest/releases)

**[Biome](https://biomejs.dev/)**  
1.7.3 - [1.7 released in April](https://biomejs.dev/blog/biome-v1-7/)

::right::

## Node.JS
<IconsWebsite/> https://nodejs.org/en
* 20.14.0 LTS - latest 22.2.0

## Bun
<IconsWebsite/> https://bun.sh/
* 1.1.12

---
transition: slide-up
layout: center
---

# The end

That's all for now!

<twemoji-red-heart class="animate-ping"/>

_Only one more FEF before the summer holidays July-Aug!_

_**19th of June**_