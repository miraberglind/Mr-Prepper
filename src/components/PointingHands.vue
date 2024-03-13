<template>
  <div class="hands-container">
    <!-- Left hand image -->
    <img src="@/assets/img/prepp_hand1.png" alt="Vänster hand" class="left-hand" ref="leftHand" />
    <!-- Right hand image -->
    <img src="@/assets/img/prepp_hand2.png" alt="Höger hand" class="right-hand" ref="rightHand" />
  </div>
</template>

<script>
import { gsap } from "gsap"; // Import GSAP for animations
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin for scroll-related animations

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin to use with GSAP
    const windowWidth = window.innerWidth; // Get the current window width

    // Determine how much the hands should move based on screen size
    const handOffset = windowWidth < 768 ? 60 : 120;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.$el, // Element that triggers the animation
        start: "top center", // Start the animation when the top of this element is at the center of the viewport
        end: "top 35%", // End the animation when the top of this element is at 35% of the viewport height
        scrub: 1, // Sync animation progress with scroll position for a smooth effect
        //markers: true,  Show markers for debugging
      }
    });

    // Animate the left and right hands moving in from off-screen
    tl.from(this.$refs.leftHand, { xPercent: -handOffset, duration: 2 })
      .from(this.$refs.rightHand, { xPercent: handOffset, duration: 2 }, "<"); // "<" means start at the same time as the previous animation
  },
};
</script>


<style scoped>
.hands-container {
  position: relative;
  width: 100%;
  height: 100vh; /* Make the container full viewport height to allow for scrolling */
}

.left-hand,
.right-hand {
  position: absolute;
  width: auto; /* Adjust width as needed to fit the image size */
  max-width: 100%; /* Prevent images from becoming too large */
}

.left-hand {
  left: 0;
  top: 60%; /* Positioning for the left hand */
  transform: translateY(-60%) translateX(-30%); /* Move it off-screen initially */
}

.right-hand {
  right: 0;
  top: 40%; /* Positioning for the right hand */
  transform: translateY(-40%) translateX(10%); /* Move it off-screen initially */
}

/* Media query for smaller screens */
@media (max-width: 768px) {
  .left-hand, .right-hand {
    width: 50%; /* Make images smaller on small screens */
  }
  .left-hand {
    top: 50%; /* Adjust position for less displacement */
    transform: translateY(-50%) translateX(-20%);
  }
  .right-hand {
    top: 50%; /* Adjust position for less displacement */
    transform: translateY(-50%) translateX(20%);
  }
}
</style>
