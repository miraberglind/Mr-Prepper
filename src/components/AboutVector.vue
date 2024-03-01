<template>
  <div class="vector-container">
    <!-- Left hand image -->
    <img src="@/assets/img/Sleepingbag.png" alt="Sleeping Bag" class="sleepingbag" ref="sleepingBag" />
    <!-- Right hand image -->
    <img src="@/assets/img/foodcan.png" alt="Food Can" class="foodcan" ref="foodCan" />
    <!-- Animated text -->
    <div class="animated-text" ref="animatedText">Your animated text here</div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    // Timeline for the animation with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.$el,
        start: "top center",
        end: "top 35%",
        scrub: 2,
        markers: true, // Markers, delete when we like the animation
      }
    });

    tl.from(this.$refs.sleepingBag, { xPercent: -120, duration: 2 })
      .from(this.$refs.foodCan, { xPercent: 120, duration: 2 }, "<")
      .from(this.$refs.animatedText, { opacity: 0, duration: 1 }, "-=1"); // Adjust timing as needed
  },
};
</script>

<style scoped>
.vector-container {
  position: relative;
  height: 10vh;
  /* Adjust the height if we need more space for scrolling */
}


.sleepingBag {
  left: 0;
  top: 0%; /* Adjust position */
  transform: translateY(-50%) translateX(-30%);
}

.foodCan {
  right: 0;
  top: 0%; /* Adjust position */
  transform: translateY(-50%) translateX(30%);
}

.animated-text {
  position: absolute;
  top: 5%; /* Adjust position */
  left: 5%; /* Adjust position */
  transform: translate(-50%, -50%);
  opacity: 0; /* Initially hidden */
}
</style>
