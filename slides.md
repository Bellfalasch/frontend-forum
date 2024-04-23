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

## 24th of April

...
<twemoji-man-technologist/> Bobby Westberg

---
transition: slide-up
---

# <twemoji-spiral-notepad/> Agenda

* Talk
* Accessibility
* Builders Core

---
transition: slide-left
layout: center
---

# Talk-time

---
transition: slide-up
---

# <twemoji-studio-microphone/> Talk

## "Grafana superfueled with sourcemaps"

> Solving the hard-to-diggest wall of stacktrace in Grafana using sourcemaps while still making it secure.

-- Henrik Lilleengen from Sales, Private

---
transition: slide-left
layout: center
---

# Welcome

---
transition: slide-up
layout: test
---

## <twemoji-waving-hand/> Quick Welcome

Missed this the last forum ... 

<v-clicks>

* Welcome **Stine Hauge Danielsen** - Digitalization and Design / re-skill

</v-clicks>

---
transition: slide-left
layout: center
---

# Accessibility

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Accessibility

## Expert advisor

<v-clicks>

* **Inklud**, experts on accessibility in Norway
* Certified in accessibility
* Builders had the first visit two weeks ago
* Last week, Private and Commercial Sales had one day each
* Service Private has visit today
* More sessions to come
* I sit on for all of these sessions, I will do my best to share some things ...
* ... so here's 30+ hands-on tips from the expert!

</v-clicks>

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Accessibility

## Good patterns

They have a lot of general feedback to us, and here are some things they find very positive with Gjensidige:

<v-clicks>

* The overall quality of the design system and documentation
* That teams use it, and update it
* Our focus on accessibility goes beyond just FE or UX
* Good sharing-culture
* The numeric inputs he tested did not allow letters
* Autocomplete on the forms he tested was defined
* Navigation on website was very accessible on desktop
* Signaling with `aria-expanded="true|false"` the state of toggable elements on screen
* ... and a lot more!

</v-clicks>

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Accessibility

## Info worth sharing

So, some general things we learned, that all should know.

<v-clicks>

* Aria is very powerful, if used right. Very destructive if used wrong.
* Assistive technology market is complex, "vendor + device + OS + browser" mix gives different results.
  * [Good overview](https://a11ysupport.io/) (like a "caniuse" for a11y)
* On Windows, "everyone" uses NVDA
* VoiceOver on Mac tries to be more clever than others, it will accept more errors in code
* Valid HTML has its own WCAG-rule, [4.1.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html) - When did you check yours last? [Use a validator](https://validator.w3.org/#validate_by_input)!
  * **(1)** Correctly opened and closed  
  **(2)** Nested in a valid way  
  **(3)** Unique IDs **(4)** No duplicate attributes

</v-clicks>

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Accessibility

## Stuff we can learn/improve - part 1

We are far from worst in class, but some feedback/issues can be worth for everyone to pick up on:

<v-clicks>

* Test with real screen readers - extensions and tools are good, but not the same, don't skip it
* Only testing VoiceOver (Mac), as it behaves a lot different from other tools
* Breaking the logical flow of things, for example expandables that expand upwards
* Putting actionable elements within actionable elements (checkbox within button, button within link)
  * [More details on interactive/actionable elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#interactive_content)
* Breaking the "Jump to content"-functionality (no `#content`, or HashRouter overwriting it)
* Miss-using `aria`, for example adding a `role` then also adding `aria` that the role added already
* Adding aria/roles to already semantic HTML, like `<main role="main">`,  `<button role="button">`
* We should [visually hide information](https://webaim.org/techniques/css/invisiblecontent/) about "This opens a modal", "opens a tab", "calls this number", etc

</v-clicks>

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Accessibility

## Stuff we can learn/improve - part 2

<v-clicks>

* When a page is loading something using client, long waiting-time should be announced
  * We have both `aria-busy` on buttons and `aria-live` as tools here
* Table headings need to specify `scope="row"` or `scope="column"` to signal direction
* Tables should have a `<caption>` to explain the table - [element spec](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption)
* If more than one `<nav>` exists on a page, each need a unique `aria-label` or `aria-labelledby`
* Introducing an element with `aria-live` into the DOM will **not** announce it
  * You must insert an empty `aria-live` from first render, then dynamically inject new DOM into it
* Wrapping `<label>` around a `<HelpText>` is practical, but will announce A LOT in screen readers
  * Use the `for="${id}"` pattern - `<label for="myUniqueId">` + `<input id="myUniqueId">`
* Search-fields should use `aria-live="polite"` to announce hits in result as you type

</v-clicks>

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Accessibility

## Stuff we can learn/improve - part 3

<v-clicks>

* `aria-labelledby` is very handy, use it to re-use existing DOM-content as a label
  * `<x aria-labelledby="myUniqueId">` + `<y id="myUniqueId">`
* [Turn off spellchecking](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck) with `spellcheck="false"` on inputs/textarea/forms if not needed
* Using `inputmode="x"` on inputs to [control character ranges for input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#inputmode), like `numeric`, `email`, etc
* Using landmarks wrong, *too much to go over here but check* [the W3C examples](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/banner.html).
  * `<section>` is not a landmark unless it has a accessible name (using `aria-label` etc)
* The old semantic HTML `<dl>`, `<dt>`, `<dd>` has very poor support
* The `<footer>` is more or less useless within `<article>`, and other nested elements
* On errors in a form, put the focus on the first field with error
* The concept of tabs is a big problem for blind users - they are not familiar with the concept

</v-clicks>
---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Accessibility

## Stuff we can learn/improve - closure

* All these nice attributes etc work as expected on the latest builder components ...
* **Very old components might not support all attributes and aria**  
* The expert dared to state that lifting your app up to required legal standards is impossible without using the latest components. And if you managed without you'd be wasting a lot of time.

---
transition: slide-left
layout: center
---

# Builders Core

---
transition: slide-left
---

# <twemoji-notebook-with-decorative-cover/> Builders Core

## Latest releases:

**@gjensidige/builders-components@1.4.1**  
**@gjensidige/builders-icons@1.2.0**  
**@gjensidige/core-navigation@3.3.3**  

Many handy improvements, fixes, and features!

Details in `#builders-core`

---
transition: slide-left
layout: center
---

# The end

That's all for now!

<twemoji-red-heart class="animate-ping"/>

--

<twemoji-spiral-calendar/> Next FEF will be held the **8th of May**
