<template>
  <div class="slidev-layout default animation-2">
    <slot />
  </div>
</template>

<style>
/* First create the animation: rotate something around the Y-axis 5 times */
@keyframes spin {
  to {
    transform: rotateY(5turn);
  }
}

@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .slidev-layout.animation-2 {
      height: 220px;
      overflow: scroll;
    }
    .slidev-layout.animation-2 h1 {
      height: 350px;
      margin-top: 250px;
      margin-bottom: 250px;
      animation: spin linear both;
      animation-timeline: view(); /* Here's the new thing */
      animation-range: contain; /* Make sure to start after ENTIRE element is in view */
    }
  }
}
</style>