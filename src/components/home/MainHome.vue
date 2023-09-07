<template>
  <div class="home">
    <FullBackgroundImage :imageSrc="importedBgImage">
      <div class="content">
        <p class="home-text-create">We Create</p>
        <div class="image-container">
          <Images :image="image" styled="width: 66%;height:58%; margin-left: auto; margin-right: auto" />
        </div>
      </div>
    </FullBackgroundImage>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import FullBackgroundImage from '@/components/images/FullBgImages.vue';
import Images from '../images/Images.vue';

import bgImage from '@/assets/bg_image.svg';
import image from '@/assets/light-img.png';

const importedBgImage = bgImage;

const loadFont = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap';
  document.head.appendChild(link);
};

onMounted(() => {
  loadFont();
});
</script>

<style scoped>
.home {
  width: inherit;
}

.content {
position: absolute;
}

.image-container {  
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-text-create {  
  font-family: 'Montserrat', sans-serif;
  font-size: 175px;
  line-height: 14%;
  top: 6%;
  left: 7%;
  font-weight: 700;
  color: #FFB800
}
</style>

