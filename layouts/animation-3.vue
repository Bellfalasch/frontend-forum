<template>
  <div class="slidev-layout default animation-3">
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
    .slidev-layout.animation-3 {
      height: 250px;
      overflow: scroll;
    }
    .slidev-layout.animation-3 h1 {
      height: 250px;
      margin-top: 250px;
      margin-bottom: 250px;
      animation: spin linear both;
      animation-timeline: scroll();
    }
  }
}
</style>