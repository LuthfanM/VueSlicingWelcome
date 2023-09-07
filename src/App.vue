<script setup lang="ts">
import MainHome from './components/home/MainHome.vue';
</script>

<template>
  <div class="container">
    <MainHome />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  /* box-sizing: border-box; */
}

body {
  width: 100%;
  height: 100%;
}

.container {
  position: relative;
  width: 1440px;
  height: 1024px;  
}
</style>
