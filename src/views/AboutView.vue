<template>
  <div class="about">
  <div style="height: 10vh;"></div>

  <AboutAnimation />
  <AboutVector />
  <div style="height: 1vh;"></div>
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
