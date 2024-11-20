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

## 20th of November

<Spacer/>
<twemoji-man-technologist/> Bobby Westberg

---
transition: slide-up
---

# <twemoji-spiral-notepad/> Agenda

* Reminder: hiring
* Future app-deving
* Builders Core on Bun and Turborepo

---
transition: slide-left
layout: mid-cover
---

# <LogoGjensidigeLarge/> Recruiting

---
transition: slide-left
---

# Designsystem is hiring

## Senior Developer

* Know a good fit? Help them and us to connect!
* [The ad on .builders](https://www.gjensidige.builders/community/blog/designsystemet-soker-senior-utviklere)
* Deadline: Sunday!

---
transition: slide-left
layout: mid-cover
---

# <LogoGjensidigeLarge/> App dev

---
transition: slide-left
---

# App developement 2025 and beyond

<v-clicks depth="2">

* Visit by the eminent app team from Bratislava - Pali, Ludo, Tomas, Cuky
* Already done two talks - on React Native, and on bun
* They (and rest of) **Mobile and Web Services** are tasked to:
  * Make contributions to the app easy for all tribes
  * Using boilerplates / ready-made components / guides ++
  * All in familiar React Native
  * Each tribe will own and control their part of the app
* Expect more one this going forward

</v-clicks>

---
transition: slide-left
layout: mid-cover
---

# <LogoGjensidigeLarge/> Core

---
transition: slide-left
---

# How it was

<v-clicks depth="2">

* Lerna used to handle the monorepo, build and publish each package, handle release notes
  * With help of Conventional Commits
* Classic npm to run it all, with some node-help here and there
* Lerna has been around long, then bought by nx
* Lerna does a lot, so many things. So it's big.
* Lerna runs `lint` and `test` on `git push`
  * And in GitHub actions
* A lot of the "consumption" of CPU time is going via Lerna

</v-clicks>

---
transition: slide-left
---

# Bun

<v-clicks depth="2">

* [https://bun.sh/](https://bun.sh/)
* Under development for a few years (2022)
* Released as stable 1 roughly a year ago (september 2023)
* A drop-in replacer for Node/npm!
  * It also uses `package.json` and `node_modules`
* Works side-by-side with node and npm
* Contains more than node + npm, can do jsx, ts, testing natively
* But also lacks some node-features
  * Or does them differently
  * Like lock-file - `bun.lockb`, private repoes - `bunfig.toml`
* But does everything faster - a lot faster!

</v-clicks>

---
transition: slide-left
---

# Turborepo

<v-clicks depth="2">

* [https://turbo.build/repo/docs](https://turbo.build/repo/docs)
* Developed by Vercel
* Must configure if it should run `yarn`, `npm`, `deno` or `bun`
  * Added in `package.json`, like so `"packageManager": "npm@10.0.0",`
* Plays well with `workspaces` from `npm` (and more)
* Will trigger specified commands, like `build`, `lint`, `test` in entire workspace
* Does all this faster than Lerna
  * Even has a smart cache-mode possibly cutting build to 0 seconds
  * `.turbo`-folder in every sub-repo
  * Example `README.md` = 0s
* Must be configured using `turbo.json`
* Does not handle release-notes, versioning...

</v-clicks>

---
transition: slide-left
---

# Inspiration

<v-clicks depth="2">

* Used a lot of inspiration from other teams to see how to do this in Gjensidige
* A few teams now use bun already, so I could learn a lot from them
  * [Private Sales cicd-pipeline](https://github.com/gjensidige/salg-nettbutikk/blob/main/.github/actions/setup/action.yml)
  * [Our app-code contains loads of good examples, also for other things](https://github.com/gjensidige/gjensidigeappen)
* For Turborepo I only had Commercial DK to look at
  * [Their main repo on configuring it](https://github.com/gjensidige/commercial-dk-apps/blob/main/package.json)
  * [Their workflow on running it](https://github.com/gjensidige/commercial-dk-apps/blob/main/.github/workflows/ci.yml)

</v-clicks>

---
transition: slide-left
---

# Approach - localhost

<v-clicks depth="2">

* We use Lerna for many things - `build`, `publish`, `version`, and `test`
* We use node/npm many places, even for custom scripts here and there
* But, all these tools can live together - bun, turborepo, node/npm, lerna, and do their thing
* So, I simply typed `bun i` instead of `npm i` to use this for `install` - 10s not 21s
* Turborepo was trickier, especially with our publishing and versioning being a bit special
* But `build` and `test` is simple
* So, replace `lerna ...` with `turbo ...` in `package.json`
* Add necessary config-file `turbo.json` (copy paste from Commercial DK)
* Next was getting all this right in `cicd.yml`, this was slightly more tricky ...

</v-clicks>

---
transition: slide-left
---

# Approach - cicd

* No steps for using Turborepo in cicd, since it is wired through npm anyways (like lerna)
* Install bun in cicd - `- uses: oven-sh/setup-bun@v1.1.1`
* Can now run `bun install` / `bun i` in the pipeline

```yml
# This is the old code, just replace those lines with this:
#      - uses: actions/setup-node@v4
#        with:
#          node-version: 20
#          cache: "npm"
#      - name: Install
#        run: npm ci
      - uses: oven-sh/setup-bun@v1.1.1
        with:
          registry-url: "https://npm.pkg.github.com"
          scope: "@gjensidige"
      - name: Install dependencies
        env:
          BUN_AUTH_TOKEN: ${{ secrets.ACTIONS_SYSTEM_USER }}
        run: bun install
```

---
transition: slide-left
---

# Approach - cicd, continued

* bun for Core does not need private repo access, so can be removed
  * But are you using Core, you must
  * Be aware that `.npmrc` or similar needs to be replaced with `bunfig.toml`
* Next: Turborepo needs a cache, like such (before running it)
* It works without but will be a lot faster with

```yml
      - name: Setup turborepo cache
        uses: actions/cache@v4
        with:
          path: .turbo
          key: ${{ runner.os }}-turbo-${{ github.sha }}
          restore-keys: ${{ runner.os }}-turbo-
```

---
transition: slide-left
---

# Pitfalls

<v-clicks depth="2">

* `bun i` generates a bun-lock file, Lerna will think it should use this, not npm, so publishing/release fails
  * `bun i --no-save` drops the lock-file. Not a forever-solution, but we can release while investigating
  * Not commiting the lock-file from localhost either
* CICD: `setup-bun@v2` will not work
  * Must use `1.1.1` (still running latest bun)
* Put that cicd turbo cache at the right place ;P
  * After install, before build ...
* Remember to map all commands into `turbo.config` (like `test:update` ...)
* Confusing for others when using double systems, double setup, double packages

</v-clicks>

---
transition: slide-left
---

# Worth it?

<v-clicks depth="2">

* OMG yes
* Should have done it long ago!
* Turbo Build = 21s - not 35s (431ms on turbo!)
* Turbo Test = 15.6s - not 31s
* On github actions it is a bit slower, but both Lerna and Turbo are slower, Turbo saves time
* Bun cuts local installs from 20-22s to 10s
* More or less same on cicd
* We still use node for the rest (building, testing, linting ++)
* Bun for `bun i` is like a no-brainer, you won't even notice it
  * Install it next to Node, run it as you please

</v-clicks>

---
transition: slide-left
---

# End result

<v-clicks depth="2">

* The job spanned over multiple PRs, that also did a few other refactorings
* But here's the ones:
  * [Add Turborepo (without cache)](https://github.com/gjensidige/builders-core/pull/2748)
  * [Add bun, turbo cache ... but also some other things](https://github.com/gjensidige/builders-core/pull/2749)
  * [When Lerna started to be confused by bun lock-file](https://github.com/gjensidige/builders-core/pull/2752)
* You need to diggest all this, but could perhaps serves as an idea

</v-clicks>

---
transition: slide-left
---

# Next steps

<v-clicks depth="2">

* Use turborepo all the way
  * Configure turborepo to use bun
  * Get [changeset](https://www.npmjs.com/package/@changesets/cli) to do versioning and changelogs (replace lerna)
* Use bun all the way
  * Readd the lock-file, and use `--frozen-lockfile`
  * Use bun for testing, their powerful `bun:test`-runner is crazy fast
  * Migrate files using node to access filesystem
* Look at [lefthook](https://www.npmjs.com/package/lefthook) to replace Husky
* What else?!

</v-clicks>

---
transition: slide-left
layout: mid-cover
---

# Builders Core

---
transition: slide-left
layout: two-cols-header
---

# <twemoji-notebook-with-decorative-cover/> Builders Core

Latest and greatest versions from the **Builders Core** collection of packages:

::left::

## <twemoji-brick/> Components: 1.19.1

`@gjensidige/builders-components` <twemoji-new-button />

## <twemoji-disguised-face/> Icons: 1.7.1

`@gjensidige/builders-icons` <twemoji-new-button />

## <twemoji-bar-chart/> Analytics: 16.1.0

`@gjensidige/core-analytics`

::right::

## <twemoji-world-map/> Navigation: 3.7.0

`@gjensidige/core-navigation` <twemoji-new-button />

## <twemoji-input-latin-letters/> Fonts: 1.0.12

`@gjensidige/builders-fonts`

## <twemoji-japanese-congratulations-button/> Tokens: 1.0.17

`@gjensidige/builders-tokens`

---
transition: slide-left
---

# <twemoji-notebook-with-decorative-cover/> Release notes

* <IconsSlack/>Follow **#builders-core-announcements** for release notes!
* <IconsSlack/>Use **#builders-core** for questions, bug reports, etc.

---
layout: fin
---

# The end

That's all for now!

<twemoji-red-heart class="animate-ping"/>

<Spacer/>

<twemoji-spiral-calendar/> Next FEF will be held the **4th of December**
