<template>
  <!-- Main container -->
  <div class="container">
    <!-- Animated welcome text -->
    <div class="animated-text" ref="animatedText">Welcome to Prepp-a-Porter!</div>
    <!-- Introduction text -->
    <div class="animated-text2" ref="animatedText2">
      <!-- Paragraph 1 -->
      <p>We are passionate about sharing knowledge and resources to help people prepare for any eventualities and disasters that life may throw their way. For us, prepping is not just about preparing for the worst; it's also about cultivating a sense of independence, security, and resilience regardless of circumstances. By learning survival techniques, acquiring necessary skills, and gathering resources, we aim to strengthen the community and promote a sense of responsibility towards ourselves and our loved ones.</p>
      <!-- Paragraph 2 -->
      <p>Whether you're a beginner or an experienced prepper, our page is a place where you can learn, share, and grow alongside other like-minded individuals. We believe in building strong and sustainable communities that can weather challenges and crises together. Join us on our journey towards self-reliance, preparedness, and community. Together, we can equip ourselves for the future, whatever it may hold.</p>
      <!-- Paragraph 3 -->
      <p>Warmly welcome to our prepping family!</p>
    </div>
  </div>
  <!-- Hero image wrapper -->
  <div id="wrapper-hero">
    <img src="../assets/img/areyouready.png" class="img-fluid" alt="..." />
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  mounted() {
    // Animation for welcome text
    gsap.from(this.$refs.animatedText, {
      duration: 2,
      x: '-100%', // Start from the left
      ease: 'power3.out'
    })

    // Animation for introduction text
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
/* Styling for main container */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px; /* Adjust side margin */
}

/* Styling for animated welcome text */
.animated-text {
  font-size: 6rem; /* Adjust for large screens */
  text-align: center;
  margin-bottom: 20px; /* Adjust margin if necessary */
  margin-top: 40px; /* Adjust margin if necessary */
}

/* Styling for introduction text */
.animated-text2 {
  font-size: 22px; /* Adjust for large screens */
  max-width: 800px; /* Adjust width if necessary */
  text-align: justify;
}

/* Media queries for smaller screens */
@media (max-width: 768px) {
  .animated-text {
    font-size: 3rem; /* Reduced size for readability */
  }
  .animated-text2 {
    font-size: 18px; /* Reduced size for readability */
    max-width: 100%; /* Adjust width to screen width */
  }
}

/* Overflow handling for body and html */
body, html {
  overflow-x: hidden;
}
</style>
