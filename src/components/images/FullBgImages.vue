<template>
  <div class="full-background-image">
    <img :src="importedBgImage" alt="Background Image" class="background-img" />    
  </div>
  <slot></slot>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  imageSrc: String,
});

const importedBgImage = props.imageSrc;
</script>

<style scoped>
.full-background-image {
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.background-img {
  width: 100%;
  height: 100%;
  object-fit: cover;  
  top: 0;
  left: 0;
  z-index: -999;
}
</style>
