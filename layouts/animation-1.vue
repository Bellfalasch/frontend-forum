<template>
  <div class="slidev-layout default animation-1">
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

/* Add this animation to an element, animate for 5 seconds, then loop it forever */
@media (prefers-reduced-motion: no-preference) {
  .slidev-layout.animation-1 h1 {
    animation: spin 5s ease infinite;
    /* TODO: New fancy code will be inserted here */
  }
}
</style>