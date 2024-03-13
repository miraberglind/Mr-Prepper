
<template>
  <div class="text-container">
      <!-- Container with two text blocks that will animate from opposite sides -->
    <div class="text from-left" ref="fromLeft"> Prepp-a-Porter !! Prepp-a-Porter !! Prepp-a-Porter !! Prepp-a-Porter !! Prepp-a-Porter !! Prepp-a-Porter !! Prepp-a-Porter !!  </div>
    <div class="text from-right" ref="fromRight">Prepp-a-Porter !! Prepp-a-Porter !! Prepp-a-Porter !! Prepp-a-Porter !! Prepp-a-Porter !! Prepp-a-Porter !! Prepp-a-Porter !!  </div>
  </div>
</template>

<script>
import { gsap } from "gsap"; // Import GSAP core library
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin for scroll-based animations

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger); // Activate ScrollTrigger plugin

    // Function to dynamically adjust the X value based on screen size
    const adjustXValue = () => {
      const windowWidth = window.innerWidth;
      // Less movement for smaller screens
      return windowWidth < 768 ? -windowWidth / 4 : -windowWidth / 2;
    };

    // Change background color on scroll events
    ScrollTrigger.create({
      trigger: ".text-container", // Element triggering the scroll
      start: "top bottom", // Start point
      end: "bottom top", // End point
      onEnter: () => document.body.style.backgroundColor = '#C34E9C', // Change to pink when entering
      onEnterBack: () => document.body.style.backgroundColor = '#C34E9C', // Same for entering from the bottom
      onLeaveBack: () => document.body.style.backgroundColor = '#90FF6A', // Revert to green when leaving back
    });

    // Animate text from the left
    gsap.from(this.$refs.fromLeft, {
      x: adjustXValue, // Adjust horizontal position dynamically
      ease: "power1.out", // Easing function for the animation
      scrollTrigger: { // Link animation to scroll position
        trigger: this.$refs.fromLeft,
        start: "top bottom",
        end: "top center",
        scrub: true, // Smooth scrubbing effect linked to scroll
      },
    });

    // Animate text from the right
    gsap.from(this.$refs.fromRight, {
      x: () => -adjustXValue(), // Use negative value for movement from right
      ease: "power1.out",
      scrollTrigger: {
        trigger: this.$refs.fromRight,
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
    });
  },
};
</script>



<style scoped>
.text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
  padding: 10px;
  overflow-x: hidden;
  width: 100%;
}

.text {
  font-size: 70px; /* Big fontsize for desktops and bigger screens */
  font-weight: bold;
  color: white;
  margin: auto;
}

/* Media query for smaller screens */
@media (max-width: 768px) {
  .text {
    font-size: 40px; /* smaller text in responsive mode */
  }
}
</style>
