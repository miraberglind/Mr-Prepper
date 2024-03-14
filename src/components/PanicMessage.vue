<template>
  <div class="animated-text" ref="animatedText">TRY NOT TO PANIC!!!</div>
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
  margin-top: 80px; /* To avoid that the content falls under the navbar */
  font-size: 8rem;
  width: 100%;
  text-align: center;
}

/* Media query for screens that are 768px wide or smaller */
@media (max-width: 768px) {
  .animated-text {
    font-size: 3rem; /* Adjusted font size for smaller screens */
    margin-top: 60px; /* Optional: Adjust the top margin for smaller screens */
  }
}
</style>
