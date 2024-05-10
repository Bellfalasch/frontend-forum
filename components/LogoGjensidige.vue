<script setup>
import gjensidigeSymbolSvgUrl from "@gjensidige/builders-icons/logos/gjensidige-symbol.svg";
//import { GjensidigeSymbol } from '@gjensidige/builders-icons/logos';
</script>

<template>
  <img :src="gjensidigeSymbolSvgUrl" alt=""/>
</template>

<style scoped>
img {
  max-height: 2.7rem;
  background-color: white;
  border-radius: 50%;
  float: left;
  display: inline;
}
</style>