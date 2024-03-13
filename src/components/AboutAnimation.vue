<template>
  <div class="container">
    <div class="animated-text" ref="animatedText">Welcome to Prepp-a-Porter!</div>
    <div class="animated-text2" ref="animatedText2">
      <p>We are passionate about sharing knowledge and resources to help people prepare for any eventualities and disasters that life may throw their way. For us, prepping is not just about preparing for the worst; it's also about cultivating a sense of independence, security, and resilience regardless of circumstances. By learning survival techniques, acquiring necessary skills, and gathering resources, we aim to strengthen the community and promote a sense of responsibility towards ourselves and our loved ones.</p>

      <p>Whether you're a beginner or an experienced prepper, our page is a place where you can learn, share, and grow alongside other like-minded individuals. We believe in building strong and sustainable communities that can weather challenges and crises together. Join us on our journey towards self-reliance, preparedness, and community. Together, we can equip ourselves for the future, whatever it may hold.</p>

      <p>Warmly welcome to our prepping family!</p>
    </div>
  </div>
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

    gsap.from(this.$refs.animatedText2, {
      duration: 2,
      opacity: 0, // Start from transparent
      y: 50, // Start from slightly below
      ease: 'power3.out',
      delay: 1 // Delay the animation by 1 second
    })
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px; /* Justerar sidomarginal */
}

.animated-text {
  font-size: 6rem; /* Anpassa för stora skärmar */
  text-align: center;
  margin-bottom: 20px; /* Justera marginal vid behov */
  margin-top: 40px; /* Justera marginal vid behov */
}

.animated-text2 {
  font-size: 22px; /* Anpassa för stora skärmar */
  max-width: 800px; /* Justera bredden vid behov */
  text-align: justify;
}

/* Media queries för mindre skärmar */
@media (max-width: 768px) {
  .animated-text {
    font-size: 3rem; /* Minskad storlek för läsbarhet */
  }
  .animated-text2 {
    font-size: 18px; /* Minskad storlek för läsbarhet */
    max-width: 100%; /* Anpassa bredden till skärmens bredd */
  }
}

body, html {
  overflow-x: hidden;
}


</style>
