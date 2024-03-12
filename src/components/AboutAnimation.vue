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
// Import av GSAP (GreenSock Animation Platform) för användning i Vue.js-komponenten
import { gsap } from 'gsap'

export default {
  // Livscykelmetod som körs när komponenten är monterad
  mounted() {
    // Animering av det första animerade textelementet
    gsap.from(this.$refs.animatedText, {
      duration: 2, // Animeringsvaraktighet i sekunder
      x: '-120%', // Startposition från vänster
      ease: 'power3.out' // Easing-funktion för smidigare rörelse
    })

    // Animering av det andra animerade textelementet
    gsap.from(this.$refs.animatedText2, {
      duration: 2, // Animeringsvaraktighet i sekunder
      opacity: 0, // Starttillstånd med noll genomskinlighet (osynlig)
      y: 70, // Startposition något under sin ursprungliga position
      ease: 'power3.out', // Easing-funktion för smidigare rörelse
      delay: 1 // Fördröjning av animationen med 1 sekund efter den första animationen
    })
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px; /* Adjust padding for side space */
}
.animated-text {
  font-size: 6rem;
  text-align: center;
  margin-bottom: 20px; /* Adjust margin as needed */
  margin-top: 40px; /* Adjust margin as needed */
}
.animated-text2 {
  font-size: 22px;
  max-width: 800px; /* Adjust width as needed */
  text-align: justify;
}
</style>
