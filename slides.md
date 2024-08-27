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

## 28th of August

...
<twemoji-man-technologist/> Bobby Westberg

---
transition: slide-up
---

# <twemoji-spiral-notepad/> Agenda

* Intro
* Let's get all up to speed on:
  * Accessibility
  * Builders Core
  * Gjensidige-stuff
  * Other news, updates

---
transition: slide-up
layout: test
---

# Quick intro

<v-clicks>

Welcome back from a long summer break for FEF.

Hope you had a good vacation!

We'll continue the same format, same time <twemoji-nine-thirty/>, same day <twemoji-calendar/>, same place <twemoji-globe-showing-europe-africa/>, same host <twemoji-man-technologist/>.

## <twemoji-waving-hand/> Welcome

We can happily greet three new faces in Oslo:

</v-clicks>
<v-clicks>

* Welcome **Per Allan Johansson** - Sales, private

* Welcome **Samuel Mukunga Bakke** - Sales, private

* Welcome **Ulrik Røsby** - Claims

</v-clicks>

---
transition: slide-left
layout: center
---

# Accessibility

---
transition: slide-up
---

# <twemoji-wheelchair-symbol/> Accessibility-docs!

<v-clicks depth="2">

* Just before the summer, we went live with our [first take on an a11y-doc](https://www.gjensidige.builders/docs/core/?path=/docs/accessibility-introduction--about)
  * (I've been asked to explain that a11y is short for accessibility, "a + 11 characters + y")
* Hoping to get some feedback, help with missing parts
* Contains four pages: intro from Builders, WCAG-overview, tips on testing, code cheat sheet.

</v-clicks>
<v-clicks after>

<img src="/images/2024-08-28/a11y-guide.png" class="rounded shadow" style="max-width:85%;" alt="" />

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

* **1.15.0** came this summer (17th of June)
* **1.15.18** is the latest (2nd of August)
* Follow **#builders-core-announcements** for release notes.
* Their work on accessibility <twemoji-wheelchair-symbol/> improvements based on Inklud and team feedback is now **complete**!
* Use **#builders-core** for questions, bug reports, etc.

</v-clicks>


---
transition: slide-up
---

# <twemoji-notebook-with-decorative-cover/> Builders Core

## Reminder: "new" announcement-channel

Follow **#builders-core-announcements** for release notes!

The place to keep track on to be first on the latest fixes and features.

---
transition: slide-left
layout: center
---

# Gjensidige updates

<LogoGjensidige/>

---
transition: slide-left
---

# GitHub copilot

<v-clicks depth="2">

* Reminder to request it, and use it in VScode/YourTool
  * Request access role [GitHub Team: Copilot Users](https://myaccess.microsoft.com/@Gjensidige.onmicrosoft.com#/access-packages/49fd29da-f4ad-4527-8457-7d026e1dfb24)
* Employees will have many AI-session (workshops, hackathons, talks) throughout the year
  * Collaboration with our partners **Itera** and **Microsoft**
  * Meaning, all disciplines will be using more and more AI-tools

</v-clicks>

---
transition: slide-left
---

# Microsoft Copilot
## Not same as GitHub copilot ;P

<v-clicks>

* Reminder that you can use Microsofts AI "Copilot" for free
* Just go to https://copilot.microsoft.com/
* Log in with your Gjensidige-email (SSO) for full access
* Use it to get ideas, summaries, rewrites, suggestions, texts, images, whatnot

</v-clicks>

---
transition: slide-left
---

# Figma dev-mode

<v-clicks>

* Before summer we did a trial on **dev mode**, with the help of 8 persons from 8 teams across Gjensidige
* It was evaluated to not be an essential tool, but a helpful one, for some
* So, not everyone using Figma needs it, but if you feel limited - request dev mode
* These licences are for devs
* If you have "full seat" (like designers), you already have dev mode
* We got a total of 20+ licences for Dev-mode
* Just request it from Figma and it will be up for considerations
* Unsure? Don't need it no more? PM me as I maintain the dev-licences

</v-clicks>

---
transition: slide-left
---

# Updated Front-end-pages

Our front-end pages have been updated!

<v-clicks depth="2">

* More relevant links and information on the [landing page](https://www.gjensidige.builders/learn/frontend), and in the main navigation.
* [Principles for building web applications](https://www.gjensidige.builders/community/blog/principles) (new order, new items - now 26 in total, improved texts)
* Added some "candidate principles" to said page, things we're considering. What's your input?
* Rewrote the page [Supported browsers](https://www.gjensidige.builders/community/blog/supported-browsers) to assist you a bit better, while also giving some sane pointers.
* Created a brand new page dedicated to [automated testing](https://www.gjensidige.builders/community/blog/testing-principles) at Gjensidige, since this has been asked about for a while. With this being a new page, we're eager to hear your feedback
  * _Thank you Katarina Matysova for valuable feedback during writing._
* Updated the [universal design for developers](https://www.gjensidige.builders/learn/universal-design/code) page, refreshing some tips, and pointing readers to the brand new [accessibility guidelines in Storybook](https://www.gjensidige.builders/docs/core/?path=/docs/accessibility-introduction--about) instead.

</v-clicks>

<v-clicks after>

All changes are based on discussions, questions, comments, and requests, made by *you* - the community.

</v-clicks>

---
transition: slide-left
---

# Community poll

## Feature Toggling

Are you using (or used to use) feature toggling in your web applications?

* <twemoji-keycap-1/> I am currently using it at Gjensidige - using external tools, our something we built ourselves
* <twemoji-keycap-2/> I did in previous jobs, loved it, would use again but are not using it here today
* <twemoji-keycap-3/> I did in previous jobs, didn't love it and won't use here
* <twemoji-keycap-4/> I would love to use it, but have no experience with it
* <twemoji-keycap-5/> Isch, a bit of A/B-testing here and there, but could probably do more if we had tools
* <twemoji-keycap-6/> I know what it is but see no point in using it, we ship fast :boat:
* <twemoji-keycap-0/> What is feature toggling?

_Gjensidige currently have no official tooling or policy for this, but depending on needs and wants with the teams we can investigate further._

---
transition: slide-left
---

```mermaid
pie showData title Feature Toggling
    "1. Currently" : 12
    "2. Did, want to" : 4
    "3. Did, no like" : 0
    "4. Sounds cool" : 1
    "5. A/B-testing" : 3
    "6. Nah, meh" : 2
    "0. What is this?" : 3
```

---
transition: slide-up
---

# Feature Toggling

So, some context ...

Many years ago, a few persons wanted to explore FT, and created a proof of concept by buying one license for Unleash. These persons quit, but the admin-user remained. Teams found it, heard about it, or read about it in confluence.

We now have many users, and teams, using this, without it ever being intended for more than a one-user PoC.

Hence, we must see the true need and do a proper evaluation, and then properly buy it, with giving it an owner, a budget, and so on. Software must be owned at Gjensidige, like GitHub is owned by Team Platform.

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

## Smaller Faro tracing

### Henrik Lillengen

If anyone want tracing in grafana, but dont want to pull down the huge @grafana/faro-web-tracing -lib (think it increases our bundle size with about 7% in a already huge app), I have an example implementation here where i'm doing tracing manually: https://github.com/gjensidige/salg-core/pull/365/files

---
transition: slide-left
---

# <twemoji-recycling-symbol/> Worth sharing

## Unified Session ID

### Sigurd Falk (with help from Henrik)

Several apps generate a Session ID when a user is navigating around on our web portals.

This makes it hard to track user journeys across our apps and across open and logged in pages.

They came up with this solution everyone can use, as a best practice for session ids:
https://github.com/gjensidige/service/tree/main/packages/client-identification 

Example on consuming it:
https://github.com/gjensidige/service-oversikt-forsikring-privat/pull/33/files

---
transition: slide-left
layout: center
---

# <twemoji-rolled-up-newspaper/> News, <twemoji-cherry-blossom/> Inspiration, <twemoji-package/> Updates

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> CSS5 ... five!

**Let's talk about CSS5**

<v-clicks>

CSS3 came out in ...

2009!

It has since grown a lot. But with this liquid version, it is hard to know if you are doing CSS3 anno 2009, or CSS3 anno 2024, which are vastly different.

Big tech-voices are starting to ask for a new CSS-version, and they want to jump directly to 5.

<IconsWebsite/> [Debate started on CSS5](https://www.smashingmagazine.com/2024/08/time-to-talk-about-css5/)

</v-clicks>

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> State of CSS 2024

Speaking of CSS ... new survey out on the state of CSS!

Fun way to learn more on what is trending "out there", and help shape the future.

<IconsWebsite/> [Check out the State of CSS 2024 survey](https://survey.devographics.com/en-US/survey/state-of-css/2024)

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> React 19

Still in beta, no news since April/May.

**What's it about?**

Moving more logic to the server (components and actions), making it more of a fullstack framework than before. Introducing compiler. And more.

<IconsWebsite/> [Official React 19 website](https://19.react.dev/)

_Recommendation: Don't be early adopters, but keep an eye on it. It will - if fully utilized - change a lot on how you structure and code your apps._

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> jQuery 4 in beta

Some things never die. First beta was in February, second one came this summer.

<IconsWebsite/> [Beta 2 of jQuery 4](https://blog.jquery.com/2024/07/17/second-beta-of-jquery-4-0-0/)

> I thought jQuery was dead  
> _- The Internet_

---
transition: slide-left
---

# <twemoji-cherry-blossom/> Extensions

## VSCode: CSS-converter

Convert between `font-size: 12px;` (CSS-style) and `fontSize: "12px"` (JS-style) with a click.

<IconsWebsite/> [CSS Converter](https://marketplace.visualstudio.com/items?itemName=Lakkannawalikar.css-converter#css-converter)

<img src="/images/2024-08-28/demo-kebab-camel.gif" class="rounded shadow" style="max-width:75%;" alt="" />

---
transition: slide-left
---

# <twemoji-cherry-blossom/> Worth reading

## Browser baseline

* <IconsWebsite/> [CSS font-size-adjust is now in Baseline](https://web.dev/blog/font-size-adjust)
* <IconsWebsite/> [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API#browser_compatibility)
* <IconsWebsite/> [Popover API 101](https://www.amitmerchant.com/popover-api-101/)

## Other

* <IconsWebsite/> [Third-party cookies have to go](https://www.w3.org/blog/2024/third-party-cookies-have-got-to-go/)
* <IconsWebsite/> [Perfect Bug Report](https://www.perfectbugreport.io)

---
transition: slide-up
layout: two-cols-header
---

# <twemoji-package/> Updates

::left::

**[React](https://react.dev)**  
18.3.1 - [out since April](https://github.com/facebook/react/releases)

**[Vite](https://vitejs.dev/)**  
5.4.2 - [5.4 early August](https://github.com/vitejs/vite/blob/v5.4.2/packages/vite/CHANGELOG.md)

**[Vitest](https://vitest.dev/)**  
2.0.5 - [2.0 is out of beta, new beta: 2.1](https://github.com/vitest-dev/vitest/releases)

**[Biome](https://biomejs.dev/)**  
1.8.3

::right::

## Node.JS
<IconsWebsite/> https://nodejs.org/en
* 20.17.0 LTS - latest 22.7.0

## Bun
<IconsWebsite/> https://bun.sh/
* 1.1.26

---
transition: slide-up
layout: image
image: /images/2024-08-28/bun-outdated.jpeg
---

`bun outdated`

---
transition: slide-up
layout: center
---

# The end

That's all for now!

<twemoji-red-heart class="animate-ping"/>

--

<twemoji-spiral-calendar/> Next FEF will be held the **11th of September**
