<template>
  <div class="matchbox" ref="matchbox">
    <!-- Matchbox image -->
    <img src="@/assets/img/prepp_solstickan.png" alt="Matchbox" />
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(this.$refs.matchbox, {
      scrollTrigger: {
        trigger: this.$refs.matchbox,
        start: "top bottom", // Animation starts when the top of the matchbox hits the bottom of the viewport
        end: "top top", // Animation ends when the top of the matchbox reaches the top of the viewport
        scrub: true, // Makes the animation's progress tied to the scroll position
        toggleActions: "play reverse play reverse",
        markers: true, // For debugging, remove or comment out for production
      },
      x: () => { // Uses a function to determine the target position based on screen width
        // Moves to the right of the screen if the user scrolls down and in from the right if scrolling up
        const windowWidth = window.innerWidth;
        return windowWidth < 768 ? '100%' : '50%'; // Example for responsiveness
      },
      duration: 2, // How long the animation should take
      ease: "none", // Uses linear easing for smooth movement with the scrolling
    });
  },
};
</script>


<style scoped>
.matchbox {
  right: -100%;
  /* Starts off-screen */
  top: 50%;
  /* Vertically centered, adjust as needed */
  transform: translateY(-50%);
  /* Centers the element vertically */
}
</style>
