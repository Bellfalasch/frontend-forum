<!-- future.vue -->
<template>
  <div class="slidev-layout future">
    <div class="bg-animation">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="stars4"></div>
    </div>

    <div class="overlay">
      <slot />
      <twemoji-rocket class="spaceship"/>
    </div>
  </div>
</template>