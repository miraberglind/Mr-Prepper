<template>
  <div class="animated-text" ref="animatedText">After all, in the world of <u>Prepp-a-Porter</u>, where <i>preparation
      meets style</i>, panicking is about as useful as a paper umbrella in a storm. Remember, a calm prepper is a savvy
    prepper—navigating through chaos with the finesse of a cat <s>avoiding a bath</s></div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  mounted() {
    gsap.from(this.$refs.animatedText, {
      duration: 2,
      x: '100%', // Start from the right
      ease: 'power3.out'
    })
  }
}
</script>

<style scoped>
.animated-text {
  font-size: 4rem;
  width: 100%;
  text-align: center;
}

/* Media query for screens that are 768px wide or smaller */
@media (max-width: 768px) {
  .animated-text {
    font-size: 2rem;
    /* Adjusted font size for smaller screens */
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
