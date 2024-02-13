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

# <twemoji-red-heart/> Front-end Forum

## 14th of February

...
<twemoji-man-technologist/> Bobby Westberg

---
transition: slide-up
---

# <twemoji-spiral-notepad/> Agenda

* Accessibility
* Builders Core
* Figma Dev-mode
* Misc news
* GitHub Copilot
* Updates (packages/tools)

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Accessibility

## #accessibility-code

New channel for focused dicussion around accessibility-code.

## Future of UU at Gjensidige?

We are working on the hypothesis that we will need a Champion-role (like Security and GAP) for a11y, placed in a few teams for starters (before expanded).

Role is not established yet, we're still working on the details, and pitching the idea to DD leaders in a few hours.

This "gang" of UU-champs will get special training and be the go-to-person for UU in their team.

---
transition: slide-up
---

# <twemoji-wheelchair-symbol/> Accessibility

## What to start with?

The biggest jump (and "easiest") in a11y improving you can do: upgrade to latest builders-components, everything in Builders Core is of a very high a11y-standard.

**Use our design-system, use it right, and you're 80% there.**

## Already on latest?

Try navigating your application just using the keyboard. Were does it stop?

Then start with the "easy" stuff, `alt` to images, and `aria-hidden` to elements that are not meant to be read by screen-readers.

---
transition: slide-left
---

# <twemoji-notebook-with-decorative-cover/> Builders Core

For details, see Slack: *#builders-core* - Keep bringing feedback! <twemoji-red-heart />

<v-clicks>

## builders-components 1.0(.2) is out

> @gjensidige/builders-components@1.0.2

Upgrade notes:
https://www.gjensidige.builders/docs/core/?path=/docs/upgrading-builders-core--about

Short and detailed instructions, with some handy migration scripts.

</v-clicks>

---
transition: slide-left
---

# <twemoji-notebook-with-decorative-cover/> Builders Core: builders-components 1.0

<img src="/images/2024-02-14/core1_features.png" class="rounded shadow" style="max-width:40%;" alt="" />

---
transition: slide-left
---

# <twemoji-notebook-with-decorative-cover/> Builders Core: builders-components 1.0

<img src="/images/2024-02-14/core1_other.png" class="rounded shadow" style="max-width:60%;" alt="" />

---
transition: slide-left
---

# <twemoji-notebook-with-decorative-cover/> Builders Core: builders-components 1.0

<img src="/images/2024-02-14/core1_migration.png" class="rounded shadow" style="max-width:70%;" alt="" />

---
transition: slide-up
---

# <twemoji-notebook-with-decorative-cover/> Builders Core: builders-components 1.0.2

<img src="/images/2024-02-14/core1_fix.png" class="rounded shadow" style="max-width:70%;" alt="" />

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> News

## <twemoji-headstone/> /api-tools

<img src="/images/2024-02-14/api-tools.png" class="rounded shadow" style="max-width:70%;" alt="" />

R.I.P.

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> News

## The future is Faro <twemoji-desert/>

<img src="/images/2024-02-14/faro.png" class="rounded shadow" style="max-width:70%;" alt="" />

Builders and Denmark are using it. Examples shared in #frontend

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> News

## /service-customer-feedback

<img src="/images/2024-02-14/service-customer-feedback.png" class="rounded shadow" style="max-width:70%;" alt="" />

Work not finished for NCI, so users need to change to the new package to escape conflicts.

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> News

## Figma dev-mode

The open/free beta for Dev-mode is over. The feature will only be available for subscribers.

**Quick poll**:
* <twemoji-raised-hand/> who uses it  

* <twemoji-raised-hand/> who depends on it  

* <twemoji-raised-hand/> who couldn't be bothered?

* <twemoji-raised-hand/> not sure ...

<v-clicks>

All I can say is we're looking into costs, but need to know the needs.

**Dislaimer**: getting funding for tools in Gjensidige is very complicated ...

</v-clicks>

---
transition: slide-up
---

# <twemoji-robot/> GitHub Copilot

Copilot can complete your code, suggest new lines, and even whole functions. You can chat with it and have it generate entire applications, refactor your code, debug your code, or explain complicated code.

**Quick poll**:
* <twemoji-raised-hand/> who uses it  

* <twemoji-raised-hand/> who loves it  

* <twemoji-raised-hand/> who doesn't have it, but wanna know more  

* <twemoji-raised-hand/> who couldn't be bothered?

<v-clicks>

Also this is being looked into, and I personally see huge savings on having it and see it as a no-brainer that all should have it ... but I don't sit on the <twemoji-money-bag/>

**Dislaimer**: getting funding for tools in Gjensidige is very complicated ...

</v-clicks>

---
transition: slide-up
layout: two-cols-header
---

# <twemoji-package/> Updates

::left::

## Biome
<twemoji-globe-with-meridians/> https://biomejs.dev/
* 1.5.3 (no change since last FEF)

## Vite
<twemoji-globe-with-meridians/> https://vitejs.dev/
* 5.1 out last week - https://vitejs.dev/blog/announcing-vite5-1

## Vitest
<twemoji-globe-with-meridians/> https://vitest.dev/
* 1.2.2 (no change since last FEF)

::right::

## Bun
<twemoji-globe-with-meridians/> https://bun.sh/
* 1.0.26

## Remix
<twemoji-globe-with-meridians/> https://remix.run/
* 2.6.0 two weeks ago

## Node.JS
<twemoji-globe-with-meridians/> https://nodejs.org/en
* 20.11.0 LTS - latest 21.6.1 (no changes since last FEF)

---
transition: slide-up
---

# <twemoji-spiral-calendar/> Next FEF

This will be the <twemoji-flag-denmark/> **28th of February** hosted in our Copenhagen office.

---
transition: slide-up
layout: center
---

# The end

That's all for me!

<twemoji-red-heart class="animate-ping"/>
