<script setup>
  import gjensidigeSymbolSvgUrl from "@gjensidige/builders-icons/logos/gjensidige-symbol.svg";
  // Normally you would import the symbol like this, but it's React and wont work in Vue:
  //import { GjensidigeSymbol } from '@gjensidige/builders-icons/logos';
</script>

<template>
  <img :src="gjensidigeSymbolSvgUrl" alt=""/>
</template>

<style scoped>
img {
  max-height: 4.7rem;
}
</style>
