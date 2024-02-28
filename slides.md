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

# <twemoji-flag-denmark/> Front-end Forum

## 28th of February

...
<twemoji-man-technologist/> Bobby Westberg

---
transition: slide-up
---

# <twemoji-spiral-notepad/> Agenda

* Accessibility
* GitHub copilot
* Builders Core
* News/updates
* Inspiration
* Talk

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Accessibility

## Status at Gjensidige

Me and one of the *discipline leaders for design* - **Marlene Garred** - have been hard at work on the state of accessibility at Gjensidige the last few months.

Last week, and the week before, we visited leaders both for **DD** and the larger **TI** to raise awareness on a11y.

We're pitching the idea of an "experts group" and an up-skilling program.

So far, the response has been very positive.

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Accessibility

## A11y-responsibles

We believe there needs to be a smaller group of a11y experts at Gjensidige. Preferably one in each team.

The most motivated employees should be empowered to help lead the work on a11y for Gjensidige, gathering reguraly on the topic, sharing what they find.

DD and discipline leaders will help up-skill this group, and we can discuss and solve tasks together, and then bring this back to their teams.

Call it "champion" or "responsible" or "ambassador" or "expert" - we're still working on the details.

Collectively we can get to the next level!

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Accessibility

## The law: Norway

We've been under WCAG 2.0 for some time now, and is enforced by norwegian law. While public sector needs to follow 2.1.

https://www.gjensidige.builders/learn/universal-design/code

## The law: Denmark & Sweden

Regulations in these countries were rather sloppy, but new **EU regulations** will change this.

<v-clicks>

* EU-countries must tailor laws targeting **both private and public** sector to follow **WCAG 2.1**.
* This law will start having effect in **June 2025**.
* Not sure yet when and how this will affect Norway.

</v-clicks>

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Accessibility

Mentioned earlier, but using latest Builders Core will get you a long way. Components are at the atom/molecule level built to have a very high a11y standard ...

<v-clicks>

... but, important disclaimer: **You can still use them in the wrong way**.

So just throwing bolts and screws at the problem wont solve all issues.

And nobody is perfect, so don't hesitate on feedback for core components.

</v-clicks>

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Accessibility

## Some more hands-on easy tips

<v-clicks>

* Have one and only one `<h1>` on each "page" (describing the page).
* Use a logic heading structure/flow (h1 > h2 > h3 > h4 > h5).
* Have a `<main>` region for your main application area, `<aside>` for complementary information.
* Setting a clear and explainatory `<title>` on every "page".
* Don't break intuitive tab order using `tabindex` attribute unless necessary.
* Don't convey important information using hidden data, or images.
* Links should be links, as in `<a>`.
* Buttons should be buttons, as in `<button>`.
* Normal semantic HTML will get you a long way!

</v-clicks>

---
transition: slide-up
---

# <twemoji-wheelchair-symbol/> Accessibility

## Great tools

Worth repeating, but installing Chrome extensions (especially for Mac) is a fast and easy way to kickstart your journey.

Built-in **Lighthouse** for **Chrome**, and the DevTools' **Accessibility Tree**, are great for starting out.

<v-clicks>

More tools:

* [IBM Equal Access Accessibility Checker](https://www.ibm.com/able/toolkit/equal-access-accessibility-checker)
* [Stark Accessibility Checker](https://chromewebstore.google.com/detail/stark-accessibility-check/fkfaapnmfippddbeemjjbclenphooipm)
* [Wave Evaluation Tool](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)
* **SiteImprove** (more for editors and open pages)

</v-clicks>

---
transition: slide-up
---

# <twemoji-robot/> GitHub Copilot

## <twemoji-money-bag/> Licenses available!

GitHub copilot is approved for extended trial! We have already begun rolling it out to employees that work daily with development.

<v-clicks>

Yesterday we also opened up for consultants working daily with development.

Used copilot privately? Make sure to save a few bucks by using Gjensidige's license instead.

More information in #general


## Copilot Enterprise

Just in from **Sigurd Falk**:
[TLDR; Copilot now uses your enterprise codebase (and docs)](https://github.blog/changelog/2024-02-27-copilot-enterprise-is-now-generally-available/)

</v-clicks>

---
transition: slide-left
---

# <twemoji-notebook-with-decorative-cover/> Builders Core

<img src="/images/2024-02-28/core1-1.png" class="rounded shadow" alt="" />

---
transition: slide-up
---

# <twemoji-notebook-with-decorative-cover/> Builders Core

For details, see Slack: *#builders-core* 

Team Builders <twemoji-red-heart />

<v-clicks>

* questions
* bug reports
* feature suggestions
* comments/questions on the docs
* discussions
* pull requests

</v-clicks>

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> News

## SplunkCloud <twemoji-headstone/>

Team Platform is trying to phase out SplunkCloud for logs.

It is closed source, and very expensive.

The replacer is **Loki** - an open source equivalent, part of the Grafana stack.

#team-platform has more information

---
transition: slide-left
---

# <twemoji-rolled-up-newspaper/> News

## Call for Faro-users! <twemoji-desert/>

Many weeks have passed since **Sigurd Falk** and **Henrik Lilleengen** showcased **Faro** and using it for Front-end logging/monitoring.

### Still no new users!!

Friendly reminder that other "home-made" solutions like /api-tools will not live forever.

---
transition: slide-up
---

# <twemoji-rolled-up-newspaper/> News

## PostgreSQL vurnerability

A critical vulnerability was found in PostgreSQL. **Sandra Skarshaug** is vigilant:

<img src="/images/2024-02-28/postgresql.png" class="rounded shadow" alt="" />

---
transition: slide-left
---

# <twemoji-cherry-blossom/> Inspiration

## Builders & Eirik - clsx replaces classNames

`clsx` does *exactly* what `classnames` does, only faster and smaller. 

<v-clicks>

> **clsx**  
> A tiny (228B) utility for constructing className strings conditionally.
> https://github.com/lukeed/clsx

I find **19** repoes using `clsx` in Gjensidige's Github.

I find **220** using `classNames` ...

Drop-in replacement?
https://github.com/gjensidige/builders-core/pull/2143/commits/a8634c17499a00c8304a400ce0f8e57396c40d69

</v-clicks>

---
transition: slide-left
---

# <twemoji-cherry-blossom/> Inspiration

## Faster GitHub Actions

**#teams-digs-tech** is a very active and interesting channel. Love probing around it.

**Henrik Lilleengen** have been improving their build and deploys a lot. A few things worth sharing:

```
steps:
  - name: Git checkout
    uses: actions/checkout@v4
    with:
      fetch-depth: 0
      ...
```

Don't fetch the entire history with `fetch-depth: 0`, just the latest commit (remove the line).

They save 10 seconds each deploy. I find 195 repos using `fetch-depth: 0` in Gjensidige's GitHub.

https://github.com/gjensidige/salg-nettbutikk/pull/4949/files

---
transition: slide-left
---

# <twemoji-cherry-blossom/> Inspiration

## Faster GitHub Actions

**#team-digs-tech** and **Henrik** again ...

<v-clicks>

* [Trial](https://github.com/gjensidige/salg-nettbutikk/pull/4950) on swapping `npm install` in GitHub Actions to `bun install`, cutting 25s on install-time.

* He's also trying to change from `az storage blob upload-batch` to `azcopy` wich is a Microsoft-script that could save even more time.

</v-clicks>

---
transition: slide-up
---

# <twemoji-cherry-blossom/> Inspiration

## Hashrouter and "skip to content"

**Ludovit Mydla** from Claims had an issue with React Router and an app using the `<HashRouter>` that caused conflicts with the new navigation, since it adds a `Skip to content` using the `#content` anchor.

Eirik Bakker had a work-around suggestion that Ludovit got working:

```js
useEffect(() => {
  const content = document.getElementById('content');
  const links = document.querySelectorAll<HTMLAnchorElement>('a[href="#content"]');
  links.forEach((skipLink) => {
    skipLink.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      content?.setAttribute('tabIndex', '-1'); // Ensure we can move focus programmatically
      content?.focus();
    });
  });
}, []);
```

---
transition: slide-up
layout: two-cols-header
---

# <twemoji-package/> Updates

::left::

## Biome
<twemoji-globe-with-meridians/> https://biomejs.dev/
* 1.5.3
* [see release notes on nightlies (5+)](https://github.com/biomejs/biome/releases)

## Vite
<twemoji-globe-with-meridians/> https://vitejs.dev/
* 5.1.4 - [see full changelog](https://github.com/vitejs/vite/blob/v5.1.4/packages/vite/CHANGELOG.md)

## Vitest
<twemoji-globe-with-meridians/> https://vitest.dev/
* 1.3.1 last week

::right::

## Bun
<twemoji-globe-with-meridians/> https://bun.sh/
* 1.0.29
* Trend: fewer and smaller upgrades

## Remix
<twemoji-globe-with-meridians/> https://remix.run/
* 2.7 - [now stable Vite-support](https://remix.run/blog/remix-vite-stable)

## Node.JS
<twemoji-globe-with-meridians/> https://nodejs.org/en
* 20.11.1 LTS - latest 21.6.2

---
transition: slide-up
---

# <twemoji-spiral-calendar/> Next FEF

Next FEF will be held the **13th of March** - in Oslo.

---
transition: slide-up
---

# <twemoji-studio-microphone/> Talk

## "i18next in Gjensidige apps"

> i18next and using it for handling text strings in React apps for DK and Claim repoes.  
-- Teitur Djurhuus Poulsen & Magnus Kjelland

---
transition: slide-up
layout: center
---

# The end

That's all for now!

<twemoji-red-heart class="animate-ping"/>
