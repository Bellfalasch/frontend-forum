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

## Ikke brukte slides ...

---
transition: slide-left
---

# <twemoji-cherry-blossom/> devDependencies or dependencies?

## And while we're at it ...

[How versioning *really* works](https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json) in `package.json` with npm.

<v-clicks>

* Using imaginary package `package`, following common [SemVer standard](https://www.baeldung.com/cs/semantic-versioning)
    *  (first digit being **Major**, second digit is **Minor**, last digit is **Patch**)
* `"package": "2.1.1"` = installs exactly version 2.1.1 of this package
* `"package": "~2.1.1"` = installs version 2.1.1, or newer **patch**-version if available
    * Like 2.1.3 and 2.1.4, but never 2.2.x
* `"package": "^2.1.1"` = installs version 2.1.1, or newer **minor**-version if available
    * Like 2.2.0 and 2.3.0, but never 3.x.x
* And more, like `<2.1.1`, `<=2.1.1`, `>=2.1.1` and `>2.1.1` - also not common
* Or even worse: `latest` or `*` instead of any number ...
* Tip: look into your `-lock,json`-file to see what exactly is installed, as this is stored here.

</v-clicks>