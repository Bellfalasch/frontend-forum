# Front-end Forum's for Gjensidige

This project uses [bun](https://bun.sh/). To start the slideshow:

- `bun i`
- `bun run dev`
- visit http://localhost:3030

Edit the [slides.md](./slides.md) to see the changes.

We use **BiomeJS** for linting and formating, just do `bun run lint:check` to run it on your files.

Learn more about Slidev on [documentations](https://sli.dev/).

## Neat commands

- Use `bun outdated` to see outdated deps
- Use `bun update` to update dependencies
- Use `bun upgrade` to update bun itself
- Use `bun run export` to export a PDF of the slides

## Using the private designsystem

This project uses parts of the designsystem by Gjensidige, it's called Builders Core. It is a private project, not open for public use. It is made with and for React only, but using the SVG icons, CSS variables, and fonts are possible even in this VueJS project.

To get access to this system you must have a GitHub *Personal Access Token* autenticated with [Gjensidige](https://www.github.com/gjensidige/). This will allow the token to validate you as a user and let you access the relevant packages. You'll need a `.env.local` with `npm_token=$NPM_TOKEN` inside, and then a `bunfig.toml` (both placed in the root of this repo). The `bunfig.toml` is used by **bun** and is included with the source code. For GitHub pages the secret `NPM_TOKEN` must be created for the repo.

Read more about [Builders Core](https://www.gjensidige.builders/docs/core/) in the open docs.