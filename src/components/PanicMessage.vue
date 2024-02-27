<template>
  <div class="animated-text" ref="animatedText">Try not to panic.</div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  mounted() {
    gsap.from(this.$refs.animatedText, {
      duration: 2,
      x: '-100%', // Start from the left
      ease: 'power3.out'
    })
  }
}
</script>

<style scoped>
.animated-text {
  font-size: 10rem;
  width: 100%;
  text-align: center;
}
</style>
