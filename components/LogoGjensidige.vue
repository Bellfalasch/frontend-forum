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
  margin-top: 10px;
  max-height: 2.7rem;
  background-color: white;
  border-radius: 50%;
  border: 4px solid white;
  padding: 2px 0 0 2px;
  float: left; /* No worky...*/
  display: inline; /* No worky...*/
}
</style>
