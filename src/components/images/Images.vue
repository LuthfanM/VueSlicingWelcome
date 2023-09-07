<template>  
  <img :src="image" :class="twClass" :style="styled" />
</template>
  
<script lang="ts">
export default {
  props: {
    image: {
      type: String,
      default: "",
    },
    twClass: {
      type: String, // Change the type to String
      default: "",
    },
    styled: {
      type: String, // Change the type to String
      default: "",
    },
  },
};
</script>