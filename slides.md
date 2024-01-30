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

# <twemoji-flag-sweden/> Front-end Forum

## 31st of January

...
<twemoji-man-technologist/> Bobby Westberg

---
transition: slide-up
---

# <twemoji-spiral-notepad/> Agenda

* Builders Core
* News
* Inspiration
* Talk

---
transition: slide-up
---

## <twemoji-waving-hand/> Quick Welcome

Repeating this from last FEF because none of them were here then ...

Let's welcome a few new faces on our floor in Oslo:

<v-clicks>

* Welcome **Solveig Hergot Langås** - Private, sales (since Dec)

* Welcome **Oscar Selnes Bognæs** - Service, private (since Jan)

* Welcome **Forat Al-Hellali** - Service, private (just started)

</v-clicks>
<v-clicks>

Elise posted a bit of info on them in the #digitalization-and-design Slack-channel.

</v-clicks>

---
transition: slide-up
---

# <twemoji-wheelchair-symbol/> Accessibility

## #accessibility-code

<twemoji-baby/> New channel to at least start dicussing the coding-part of accessibility.

Please share, ask, etc. I'll try to re-post stuff I find elsewhere that is relevant.

---
transition: slide-up
---

# <twemoji-notebook-with-decorative-cover/> Builders Core

For details, see Slack: *#builders-core* - Keep the constructive feedback flowing! <twemoji-red-heart />

<v-clicks>

## Releases

* Latest is still *@gjensidige/builders-components@0.7.0*
* They're working on 1.0 to be released any day now:
  * Changes to icon naming (breaking)
  * Error -> Status
  * ButtonGroup deprecated (use Flex)
  * Migration script for many of the changes
  * And more ...

</v-clicks>

---
transition: slide-up
---

# <twemoji-rolled-up-newspaper/> News

## Figma beta for devs is over

Dev-mode will now be available only for subscribers. It was previously available in an open beta.

No news yet if we will buy licenses or not, but it is being investigated.

...

Sidenote: Some Figma dev-mode tips (in Norwegian):

https://uxnorge.no/figma-for-utviklere/

---
transition: slide-up
layout: two-cols-header
---

# <twemoji-package/> Updates

::left::

## Biome
<twemoji-globe-with-meridians/> https://biomejs.dev/
* 1.5.3

## Vite
<twemoji-globe-with-meridians/> https://vitejs.dev/
* 5.0.12 (5.1 in beta)

## Vitest
<twemoji-globe-with-meridians/> https://vitest.dev/
* 1.2.2

::right::

## Bun
<twemoji-globe-with-meridians/> https://bun.sh/
* 1.0.25

## Remix
<twemoji-globe-with-meridians/> https://remix.run/
* 2.5.1

## Node.JS
<twemoji-globe-with-meridians/> https://nodejs.org/en
* 20.11.0 LTS - latest 21.6.1

---
transition: slide-left
---

# <twemoji-cherry-blossom/> Inspiration

## Flex-less vertical alignment

This Webkit-feature snuck in under the radar in December:

<img src="/images/2024-01-31/github-webkit.png" class="rounded shadow" alt="" />

---
transition: slide-left
---

# <twemoji-cherry-blossom/> Inspiration

## Flex-less vertical alignment

This will now vertically align the contents in Webkit-based browsers. Without flex!

```css{all}
.container {
  display: block;
  align-content: center;
}
```

The PR to Webkit: https://github.com/WebKit/WebKit/pull/21522

---
transition: slide-left
---

# <twemoji-cherry-blossom/> Inspiration

## Entry and exit-animations

From *Johan Lindkvist*: Came in Chrome 116 and 117. Not that many animations in our solutions, but still:

```css{all}
@starting-style {
    .my-element {
        opacity: 0;
  }
}
```

And animating to `display: none` will behave that it is applied after, for example, opacity has reached 0.

<twemoji-link/> https://developer.chrome.com/blog/entry-exit-animations

---
transition: slide-up
layout: two-cols
---

# <twemoji-cherry-blossom/> Inspiration

## react-animate-height

Animating to `height: auto` using the [npm package react-animate-height](https://www.npmjs.com/package/react-animate-height)? Replace it with pure CSS:

Details: https://keithjgrant.com/posts/2023/04/transitioning-to-height-auto/

One less package off your bundle size =)

::right:: 

```css
.wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.5s ease-out;
}

.wrapper.is-open {
  grid-template-rows: 1fr;
}

.inner {
  overflow: hidden;
}
```

```html
<div class="wrapper">
  <div class="inner">Expandable content</div>
</div>
```

---
transition: slide-up
---

# <twemoji-spiral-calendar/> Next FEF

Next FEF will be the <twemoji-red-heart/> <twemoji-red-heart/> **14th of February** <twemoji-red-heart/> <twemoji-red-heart/> (from Oslo).

---
transition: slide-up
---

# <twemoji-studio-microphone/> Talk

## "Automation and internal tools in Sweden"

> Building simple but high-impact tools that automate old manual process for claim handlers in Sweden.
-- Adam Hassan

---
transition: slide-up
layout: center
---

# The end

That's all for me!

<twemoji-red-heart class="animate-ping"/>
