---
# try also 'default' to start simple
theme: penguin

# https://sli.dev/custom/highlighters.html
highlighter: prism
# show line numbers in code blocks
lineNumbers: true
# page transition
# transition: fade-out

layout: intro
colorSchema: dark
---

# Hackathon

### DD Digital Summit 2023

26th of October  

---
transition: slide-left
---

# <twemoji-spiral-notepad/> Your mission

* We will divide into small groups.  
* We will learn how the **Astro** framework works.  
* We will mix this with a few known and/or unknown "tools", of your choice.  
* I will give an intro to **Bun**, but you can use Node 18.14+ if you want.  
* With this, create some cool webapps and learn some new things!  

---
transition: slide-up
---

# Repetition

* See **#tmp-frontend-workshop-ddsummit23** for details and links.
* Use **Astro** as the main framework.
* Use any JS engine (Node, or Bun).
* Integrate **any** external API (rest or GraphQL).
  * https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
  * Use native fetch or Apollo or whatnot for this.
* Use any CSS framework, or dont.
* Final step: add View Transitions with Astro.

Implement your own MPA (Multi Page Application) based on your own idea - some suggestions are: a blog, a product website, a webshop (simplified), a miniature DD-facebook (simplified), info on your fav sports-teams.

Main idea is to let the API drive your MPA, you can sparkle it with your own content but there's no time to build a custom API. Keep in mind we only have maybe 4 hours effective time to code.

---
transition: slide-left
layout: intro
---

# Astro

---
transition: slide-left
---

# Astro

Astro is a modern **UI-agnostic** **MPA framework** (Multi Page Application) that is built for **speed**. It is designed to help developers build fast, modern web applications with ease.

Astro is different from other frameworks in that it allows developers to use **any UI library** or framework they prefer, such as **React, Vue, Svelte, Lit, and Solid**.

Astro also offers a static site generation feature that can help improve the performance of your website.

Astro is mainly a **client-side framework**.

It is designed to be used with any CSS framework, such as **Tailwind CSS, Bootstrap, and Bulma**.

It's built by the people behind **Snowpack** (the webpack-contender, born in 2019).

https://astro.build/

---
transition: slide-left
layout: text-window
---

# Speed

One of Astro's main goals is to be fast. Astro uses a **build-time rendering** approach, instead of at runtime.

This allows Astro to generate **static HTML** files for each page in your application, which can then be served directly from a CDN or other static hosting provider. All **client-side JavaScript is removed**. The client downloads minimal code.

Updating code behind one component will hot-reload only that component, nothing else.

Each component can support hydration, depending on your needs, and then additional client-side JS is serverd.

::window::

<img src="/images/2023-10-26/astro-speed.png" alt="Lighthouse benchmark of Astro" />

---
transition: slide-left
layout: text-window
---

# Astro Islands

A few years ago, the concept **Component Islands** was born.

If you've used Preact, this concept might be known to you.

In Astro, this is refered to as Astro islands and it's a central concept.

A webpage is divided into sections and each section can be an island. Each island is a collection of components that can be used to build your application. An island will render fully independent. And they are designed to be used with any UI library or framework (like React, Svelte, Vue, etc) - you can even mix islands of different frameworks in the same app!

::window::

<img src="/images/2023-10-26/astro-islands.webp" alt="Astro Islands" />

---
transition: slide-left
---

# Next.JS vs Astro - part 1

| Feature | Next.js | Astro |
| --- | --- | --- |
| First release | 2016 | 2021 |
| GitHub stars | 111k+ | 33.1K+ |
| License | MIT | MIT |
| Build speeds | Fast | Faster |
| Built with | JavaScript | JavaScript |
| TypeScript support | Yes | Yes |

---
transition: slide-left
---

# Next.JS vs Astro - part 2

| Feature | Next.js | Astro |
| --- | --- | --- |
| Templating language(s) | JSX | Astro, HTML, Markdown, JavaScript, JSX |
| Supported UI framework(s) | React | React, Preact, Svelte, Vue, Solid, Lit |
| Installation requirements | Node.js / Bun / deno | Node.js / Bun / deno |
| Plugins | Yes — limited | Yes — many |
| Themes / Templates / Starters | Yes (templates) | Yes (themes) |

---
transition: slide-left
---

# Astro versus Next.JS - ownership

Astro and Next.js are both **open-source** frameworks that are licensed under the MIT license. Therefore, neither of them is proprietary.

However, there are some differences between the two frameworks. For instance, Astro is a **static site generator that offers support for React**, while Next.js is **a full-stack framework specifically built for React**. Furthermore, Next.js offers both client- and server-side functionality, whereas Astro focuses solely on the client side.

In terms of openness and community support, both frameworks have active communities and are backed by reputable companies. Next.js is developed and maintained by **Vercel**, while Astro is developed and maintained by **Snowpack**.

---
transition: slide-left
layout: text-window
---

# .astro templating

Astro has its own templating language, called .astro. It is a mix of HTML, Markdown, JavaScript, and JSX. It is designed to be easy to learn and use. Astro also supports other templating languages, such as Pug, Handlebars, and EJS.

The Astro docs offers indepth information about the templating language.

::window::

```html
---
const name = "Astro";
const compliment = "great";
---

<div>
  <!-- Good old familiar HTML here -->
  <!-- ... with some templating =) -->

  <h1>Hello {name}!</h1>
  <p>You look {compliment} today</p>
  
  <!-- Outputs: -->
  <!-- <h1>Hello Astro!</h1> -->
  <!-- <p>You look great today</p> -->
</div>
```

---
transition: slide-up
---

# When to use Astro?

Astro is a great choice for building static websites, blogs, and documentation. Basically, if you need speed and need to display a lot of content (have many different pages), Astro is a good choice. Astro is also a good choice if you want to use a UI library or framework that is not supported by other frameworks, such as React, Vue, or Svelte.

Astro is perhaps not the best choice for building complex web applications, such as e-commerce sites or social networks, or SPAs, then Next.JS is a much stronger option.

---
transition: slide-left
layout: intro
---

# Bun

---
transition: slide-left
layout: text-window
---

# Bun - Javascript runtime

Bun released just after the summer, so it's a rather fresh contender in the Javascript runtime space. But it has been developed on for some time.

The correct label for Bun is **JavaScript runtime**. It's built from scratch to serve the modern JavaScript ecosystem. It is designed to be a fast all-in-one JavaScript runtime that can develop, test, run, and bundle JavaScript and TypeScript projects. It includes a bundler, test runner, and Node.js-compatible package manager. It has native Typescript support.

https://bun.sh

::window::

<img src="/images/2023-10-26/bun-speed.png" alt="Benchmark on Bun, compared to Deno and Node" />

---
transition: slide-left
---

# Speed

According to a benchmark test conducted by Builder.io, Bun is up to 3 times faster than Node.js and Deno in server-side rendering React. The test was conducted on a dashboard app with a full tree of components, business logic, dependencies, props, state, and other typical React features. The throughput (requests per second) of each runtime server-rendering the React app was measured using autocannon. The results showed that Bun was faster than both Node.js and Deno.

Another benchmark test conducted by Grifel.dev compared the pipeline speed of Bun and Node.js. The test showed that Bun’s pipeline speed didn’t change much when compared to Node.js when the app didn’t have many dependencies. However, when there was a native library present in the app, such as better-sqlite3, the pipeline slowed down drastically in Node.js.

---
transition: slide-left
layout: text-window
---

# Compared to Node

## TypeScript & JSX

Bun can directly execute **.ts** and **.tsx** files just like vanilla JavaScript, with no extra configuration. It can even execute **.jsx** files without config.

## Bun.serve()

Bun has a built-in high performant web server so that you easily can spin up servers from Bun without additional installs.

::window::

```js
Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") { 
      return new Response("Home page!");
    }
    if (url.pathname === "/blog") {
      return new Response("Blog!");
    }
    return new Response("404!");
  },
});
```

---
transition: slide-left
---

# Compared to Node, continued

## Package manager

The package manager in Bun is called **bunpkg**. It is a Node.js-compatible package manager that can install and manage packages from npm, GitHub, and other sources. It is designed to be fast and easy to use.

## package.json

Bun uses the same good old **package.json** file we already know. Bun, however, doesn't use the lock-file natively, but it can migrate NPM-lockfiles to Bun-lockfiles. Soon it will also be able to migrate Yarn-lockfiles.

## bun.lockb

Bun uses **bun.lockb** to store information about the packages that are installed in your project. This file is used by the package manager to determine which packages should be installed when you run the install command. The format of this file is binary, so it cannot be edited manually. They do this because it is faster than using a text-based format like JSON or YAML.

---
transition: slide-left
layout: text-window
---

# Installer

Bun blew people's minds when they saw how fast it can install packages. It is possible to use Bun only for the installer, but Node as the runtime.

The main reason for it being so fast is that it uses a binary format for the lockfile, which is much faster than the text-based formats used by other package managers.

As mentioned, Bun creates it's own lock-file, called **bun.lockb**. It should, like other lock-files, be version controlled.

::window::

```bash
bun install           # install dependencies
bun run <script>      # run a defined script, like:
bun run start         # run the `start` script
bun install <pkg>​     # install a package
bun test              # run tests
```

---
transition: slide-left
---

# Why Bun?

Some of the key selling points of Bun are:

* In theory it is a drop-in replacement for Node
* Performance: According to the Bun team, it is up to 3 times faster than Node.js and Deno.
* Memory efficiency: Bun uses a low-level memory control system that allows it to use less memory than other runtimes.
* Easy to use: Bun has a simple API that makes it easy to get started with.
* Cohesive DX: a complete toolkit for building JavaScript apps, including a package manager, test runner, and bundler.

However, there are also some disadvantages of using Bun ...

---
transition: slide-left
---

# Why NOT Bun?

Since Bun is a pretty new runtime, it suffers primarely from these issues:

* Lack of community support
* Lack of third-party modules
* Lack of documentation
* Gotchas and quirks that can impact large projects negatively
* Missing features
* Still some bugs here and there
* Compatibility issues

It's is not yet ready to replace Node all over Gjensidige, but it is interesting enough for us to play with it!

---
transition: slide-left
---

# Test-runner

To use the native test runner in Bun, you can use the bun test command. The `bun test` command is a fast, built-in, Jest-compatible test runner that supports TypeScript and JSX, lifecycle hooks, snapshot testing, UI and DOM testing, and watch mode with `--watch`.

To write tests, you can create a file with a `.test.js`, `.test.jsx`, `.test.ts`, or `.test.tsx` extension. You can then write tests using the Jest-like API. For example:

```ts
import { expect, test } from "bun:test";

test("Two plus two is four", () => {
  expect(2 + 2).toBe(4);
});
```

The runner recursively searches the working directory for files that match the previously mentioned pattern.

---
transition: slide-up
layout: intro
---

# Schedule

---
transition: slide-up
---

# Time plan

**10:00** - Intro  
**10:30** - Of you go - Round 1  
**11:00** - Lunch served in Gjensidige Lab!  
**12:30** - First demo (5 min each)  
**13:00** - Round 2  
**15:00** - Final demo (longer)  
**16:00** - The end (most likely a bit before)  