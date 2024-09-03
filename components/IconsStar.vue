<script setup>
  import iconSvgUrl from "@gjensidige/builders-icons/star.svg";
</script>

<template>
  <img :src="iconSvgUrl" alt=""/>
</template>

<style scoped>
img {
  max-height: 1.6rem;
  background-color: white;
  border-radius: 50%;
  border: .2rem solid white;
  margin-right: .6rem;
  display: inline;
}
</style>
