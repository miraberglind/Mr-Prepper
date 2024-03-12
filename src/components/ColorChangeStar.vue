<template>
  <div class="circle-container">
    <!-- Container for the star-shaped element-->
    <div class="circle" ref="circle"></div>
  </div>
</template>

<script>
import { gsap } from "gsap"; // Importing GSAP for animations
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Importing ScrollTrigger plugin for scroll-based animations

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger); // Registering the ScrollTrigger plugin to use with GSAP

    this.$nextTick(() => {
      // Creating a timeline with ScrollTrigger that links animation to the scroll speed
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".circle-container", // Element that triggers the animation
          start: "top bottom+=15%", // Starting point of the animation
          end: "bottom top-=20%", // Ending point of the animation
          scrub: true, // Makes the animation smooth and linked to the scroll
        }
      });

      // Adding scale and rotation animations to the timeline
      tl.to(this.$refs.circle, {
        scale: 30, // Scales up the star to cover the whole screen
        rotate: 360, // Adds a full rotation to the star
        ease: "none", // Animation timing function
        duration: 2, // Duration of the animation, adjust for faster or slower animation
      });

      // Changes the star's background color based on ScrollTrigger's onToggle
      ScrollTrigger.create({
        trigger: ".circle-container", // Element that triggers the color change
        start: "top bottom+=15%", // Starting point of the color change
        end: "bottom top-=20%", // Ending point of the color change
        scrub: true, // Makes the color change smooth and linked to the scroll position
        onToggle: self => this.$refs.circle.style.backgroundColor = self.isActive ? '#C34E9C' : 'transparent', // Color change logic
      });
    });
  },
};
</script>


<style scoped>
.circle-container {
  position: relative;
  height: 100vh; /* Full height of the viewport */
  display: flex;
  justify-content: center; /* Centers the star horizontally */
  align-items: center; /* Centers the star vertically */
}

.circle {
  width: 100px; /* Initial width of the star */
  height: 100px; /* Initial height of the star */
  background-color: transparent; /* Initial background color, making the star invisible */
  /* Clip-path to create a star shape */
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  transform: translate(-50%, -50%) scale(0); /* Initial transformation to keep the star centered and scaled down */
  position: fixed;
  top: 50%; /* Vertical centering */
  left: 50%; /* Horizontal centering */
}

/* Adjustments for smaller screens */
@media (max-width: 768px) {
  .circle {
    width: 60px; /* Smaller size for smaller screens */
    height: 60px; /* Smaller size for smaller screens */
  }
}
</style>
