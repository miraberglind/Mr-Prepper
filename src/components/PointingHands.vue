<template>
  <div class="hands-container">
    <!-- Left hand image -->
    <img src="@/assets/img/prepp_hand1.png" alt="Vänster hand" class="left-hand" ref="leftHand" />
    <!-- Right hand image -->
    <img src="@/assets/img/prepp_hand2.png" alt="Höger hand" class="right-hand" ref="rightHand" />
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
        //markers: true, 
      }
    });

    tl.from(this.$refs.leftHand, { xPercent: -120, duration: 2 })
      .from(this.$refs.rightHand, { xPercent: 120, duration: 2 }, "<");
  },
};
</script>

<style scoped>
.hands-container {
  position: relative;
  width: 100%;
  height: 100vh;
  /* Adjust the height if we need more space for scrolling */
}

.left-hand,
.right-hand {
  position: absolute;
  width: auto;
  /* Adjust the width as necessary to fit our image size */
  max-width: 100%;
  /* Prevents the images from becoming too large */
}

.left-hand {
  left: 0;
  top: 60%;
  transform: translateY(-60%) translateX(-30%);
}

.right-hand {
  right: 0;
  top: 40%;
  transform: translateY(-40%) translateX(10%);
}
</style>
