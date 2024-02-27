<template>
  <div class="text-container">
    <div class="text from-left" ref="fromLeft">VÄNSTER TEXT</div>
    <div class="text from-right" ref="fromRight">HÖGER TEXT</div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    // Använd window-bredden för att initialt placera texten utanför skärmen
    let windowWidth = window.innerWidth;

    // Animerar text från vänster
    gsap.from(this.$refs.fromLeft, {
      x: () => -windowWidth / 2, // Placerar texten till vänster utanför skärmen
      ease: "power1.out",
      scrollTrigger: {
        trigger: this.$refs.fromLeft,
        start: "top bottom", // Justera dessa värden för att passa din layout
        end: "top center",
        scrub: true,
        markers: true, // För felsökning, ta bort eller kommentera ut för produktion
      },
    });

    // Animerar text från höger
    gsap.from(this.$refs.fromRight, {
      x: () => windowWidth / 2, // Placerar texten till höger utanför skärmen
      ease: "power1.out",
      scrollTrigger: {
        trigger: this.$refs.fromRight,
        start: "top bottom", 
        end: "top center",
        scrub: true,
        markers: true,
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
  gap: 20px;
  overflow-x: hidden;
}

.text {
  font-size: 70px;
  font-weight: bold;
  color: white;
}
</style>
