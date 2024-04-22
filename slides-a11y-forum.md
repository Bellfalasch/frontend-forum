---
theme: default

# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks?
lineNumbers: true
# default page transition
transition: fade-out

favicon: './favicon.png'

layout: cover
---

# Accessibility Champion Forum

## 23rd of April

...
<twemoji-man-technologist/> Bobby Westberg & Marlene Garred

---
transition: slide-up
---

# <twemoji-spiral-notepad/> Agenda

* Recap
* Questions raised
* Inklud-findings
* Builders sharing session
* Sales sharing session

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Recap of last forum

<v-clicks>

* Bi-weekly 1-hour sessions on Tuesdays, 10am to 11am
* We discussed forms
* [Form principals](https://www.gjensidige.builders/docs/core/?path=/docs/principles-forms--about) is a good resource
* [Validation message principals](https://www.gjensidige.builders/docs/core/?path=/docs/packages-builders-components-validationmessage-principles--about) is a good resource
* Good [Norwegian resource on forms](https://www.uutilsynet.no/veiledning/skjema/38)

</v-clicks>

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Questions last forum

### What is best practice for forms "remembering" information provided by the user when the user navigates away without submitting (like using browser back button)?

This would be nice if we could align more across teams, perhaps discuss this as a separate session as this is not only for a11y. But Inklud strongly suggest all forms should always save and let you move back and forward in any way.

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Questions last forum (cont.)

### What is best practice for forms with error in one/some fields?

Move the focus to the first field with "error".

In rare cases were you have implemented an error summary, you may put focus on the title of this summary.

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Questions last forum (cont.)

### What is best practice in setting focus while navigating to next step/page of a form?

Suggestion from Inklud: Heading / Progress bar step (orient the user, where are they).

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Questions last forum (cont.)

### What is best practice on long dynamic forms: should answered questions always be visible?

Yes - questions must be visible so that you always have possibility to go back and edit. In a multistep form it must be possible to go back in the form. It should be possible to change answers.

Front-end tip: Wrapping all fields in an `aria-live="polite"` would announce any new elements (fields) added to that area. It doesn't help to add this attribute to a field that is injected/added to the DOM.

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> Our first sessions with Inklud

* Time with a certified a11y expert sure helps
* Three teams are "done", the will share their findings
* He had one session with Builders first
* Last week he had one with sales commercial and one with sales private
* We learn a lot in general too

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> What did we learn that all can benefit from?

### He uses HTML validation from W3C a lot.
1. As broken HTML-code will create huge a11y-problems.
1. https://validator.w3.org/#validate_by_input
1. He used this in a specific way 
1. Always validate by input, not URL
1. Using `Inspect` in Chrome, extract the entire DOM
1. (View source will not give the final DOM)

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> What did we learn that all can benefit from?

## AXE DevTools
1. He uses AXE DevTools for identifying errors on current page, or parts of it
2. It is free, only the AI-parts requires payment
3. Will hide as a tab in `Inspect` on Chrome, find `axe DevTools`
4. Click button "Scan all of my page"

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> What did we learn that all can benefit from?

## Stats and Usage

* The OS and browser-combo you have matters a lot
* VoiceOver is most common on Apple
* For Android users they use Talkback
* JAWS is not that common in Norway, it costs money, yearly
  * But it is very big globally
* NVDA is the most used on Windows (globally too)
* [Full survey](https://webaim.org/projects/screenreadersurvey10/#used)

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> What did we learn that all can benefit from?

## Automated testing

* He advised all teams to setup automated testing to catch simpler errors before production
* He recommended two tools
* [pa11y npm ci tool](https://pa11y.org/)
* [axe core](https://github.com/dequelabs/axe-core) - used by many other tools

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> What did we learn that all can benefit from?

## Big one ... required fields must be marked

> *3.3.2 Ledetekster eller instruksjoner*  
> **Merking av obligatoriske skjemafelter**  
> Brukeren skal på forhånd få informasjon om hvilke skjemafelter som må fylles ut i et skjema. Når brukeren får informasjon om obligatoriske felt på forhånd, er det lettere å fylle ut skjemaet riktig på første forsøk. En måte å informere på, er for eksempel å skrive hvilke felter som må fylles ut over første skjemafelt.  
> Det er også mulig å bruke et symbol for å merke obligatoriske felter. For at bruk av symbol skal være godkjent merking, må meningen med symbolet forklares før det tas i bruk første gang i skjemaet. Det kan for eksempel være en tekst som sier «Obligatoriske felter er merket med * » eller lignende, over første skjemafelt. 

---
transition: slide-left
---

# <twemoji-wheelchair-symbol/> What did we learn that all can benefit from?

## Probably not worth chasing perfect SiteImprove scores

He suggested we should better focus on lifting a11y using other tools.

SiteImprove sometimes has wrong, it sometimes reports too much, and might lead you chasing rainbows.

It's a good tool, but don't let it sit in the front-seat.

---
transition: slide-left
---

# The end

That's all for now!

<twemoji-red-heart class="animate-ping"/>

--

<twemoji-spiral-calendar/> Next ACF will be held in two weeks.
