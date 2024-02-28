<template>
  <div class="circle-container">
    <div class="circle" ref="circle"></div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    this.$nextTick(() => {
      gsap.to(this.$refs.circle, {
        scrollTrigger: {
          trigger: ".circle-container",
          start: "top bottom+=15%",
          end: "bottom top-=20%",
          scrub: true,
          markers: true, // För felsökning, kan tas bort senare
          onToggle: self => this.$refs.circle.style.backgroundColor = self.isActive ? '#C34E9C' : 'transparent',
        },
        scale: 30, // Justera denna skala så att cirkeln täcker hela skärmen
        duration: 3,
        ease: "none",
      });
    });
  },
};
</script>

<style scoped>
.circle-container {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: transparent;
  /* Starta med transparent för att undvika omedelbar synlighet */
  transform: translate(-50%, -50%) scale(0);
  position: fixed;
  top: 50%;
  left: 50%;
}
</style>
