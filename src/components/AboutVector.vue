<template>
  <div class="socks-container" ref="socksContainer">
    <div class="socks" ref="socks">
      <!-- Socks image -->
      <img src="@/assets/img/socks.png" alt="socks" />
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(this.$refs.socks, {
      scrollTrigger: {
        trigger: this.$refs.socksContainer,
        start: "top bottom", // Animation starts when the top of the socks container hits the bottom of the viewport
        end: "bottom top", // Animation ends when the bottom of the socks container hits the top of the viewport
        scrub: true, // Makes the animation's progress tied to the scroll position
        toggleActions: "play reverse play reverse",
        // markers: true, // For debugging, remove or comment out for production
      },
      x: () => {
        const windowWidth = window.innerWidth;
        return windowWidth < 768 ? '100%' : '50%'; // Starts off-screen to the right if screen width < 768px
      },
      scale: 0.5,
      duration: 2, // How long the animation should take
      ease: "none", // Uses linear easing for smooth movement with the scrolling
    });
  },
};
</script>

<style scoped>
.socks-container {
  overflow-x: hidden; /* Prevents horizontal scrolling */
}

.socks {
  position: absolute; /* Positioning relative to socks container */
  left: 40%; /* Starts at the left edge of container */
  top: 130%; /* Vertically centered, adjust as needed */
  transform: translateY(-50%); /* Centers the element vertically */
  width: 100%; /* Occupy full width */
}
</style>
