<script setup lang="ts">
defineProps<{
  title?: string
  text?: string
  animate?: string
}>()
</script>

<template>
  <div :class="{'card': true, 'reversed': $props.animate === 'reversed'}">
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-10rem) rotate(-10deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes dangle {
  0% {
    transform: translateX(0) rotate(0deg);
  }
  25% {
    transform: translateX(-6rem) rotate(6deg);
  }
  75% {
    transform: translateX(6rem) rotate(-6deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes zoomIn {
  0% {
    transform: scale(0.75) rotate(-30deg); opacity: 0.8;
  }
  100% {
    transform: scale(1.1) rotate(2deg); opacity: 1;
  }
}
@keyframes zoomInReversed {
  0% {
    transform: scale(0.75) rotate(30deg); opacity: 0.8;
  }
  100% {
    transform: scale(1.1) rotate(-2deg); opacity: 1;
  }
}

.card {
  /* CSS custom properties for later use in child elements */
  --builders-card-background-color: var(--builders-color-white);
  --builders-card-border-color: var(--builders-color-default-emphasis);
  --builders-card-icon-color: currentColor;
  --builders-card-nested-border: inherit;
  --builders-card-nested-radius: inherit;
  --builders-card-nested-margin: -1px var(--builders-card-padding-negative) 0; /* Collapse borders and "undo" padding */
  --builders-card-padding-negative: calc(var(--builders-card-padding) * -1);
  --builders-card-padding: var(--builders-unit-25);

  background-color: var(--builders-card-background-color);
  border-radius: var(--builders-radius-md);
  border: 1px solid var(--builders-card-border-color);
  box-sizing: border-box;
  color: #333;
  display: block;
  outline-offset: 2px;
  padding: var(--builders-card-padding);
  position: relative; /* To place icon and arrow */
  text-decoration: none;
  transition: var(--builders-transition-duration);
  margin: 0 auto;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.4);
  max-width: 80%;

  animation: 1.75s ease-out 0s 1 zoomIn forwards;

  &:focus-visible { outline: none; box-shadow: var(--builders-focus-boxShadow) }
  & > :is(h1,h2,h3,h4) {
    font-size: var(--builders-font-title-5);
    line-height: var(--builders-line-height-130);
    margin-bottom: 0;
  }
  &.reversed {
    animation: 1.75s ease-out 0s 1 zoomInReversed forwards;
  }
}

h2 {
  font-family: var(--builders-font-display);
  font-weight: var(--builders-font-weight-400);
  font-size: var(--builders-font-title-5);
  line-height: var(--builders-line-height-130);
  margin-bottom: 0;
  padding-left: 0 !important;
}
p {
  margin-block-start: 0;
  margin-block-end: 0;
  font-weight: var(--builders-font-weight-400);
  font-size: var(--builders-font-body-1) !important;
  line-height: 165%;
}
</style>
