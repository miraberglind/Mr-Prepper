<template>
  <div class="about">
  <AboutAnimation />
  <AboutVector />
  <div style="height: 50vh;"></div>
  </div>
</template>



<script>
import AboutAnimation from '@/components/AboutAnimation.vue';
import AboutVector from '@/components/AboutVector.vue';

export default {
  components: {
    AboutAnimation,
    AboutVector,
  }
};
</script>

<style scoped>
.about {
  overflow-x: hidden;
  /* Förhindrar horisontellt scrollande */
}

</style>
