<template>
  <div class="matchstick-container">
    <div class="matchstick" ref="matchstick">
      <img src="@/assets/img/matchstick.png" alt="Matchstick" />
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const matchstick = this.$refs.matchstick;

    // Initialinställningar för tändstickan
    gsap.set(matchstick, { scale: 0.1, xPercent: -50, yPercent: -50 });

    ScrollTrigger.create({
      trigger: matchstick,
      start: "center center", // Justera dessa värden så att animationen startar senare
      end: "bottom+=500 center", // Lägger till extra utrymme för att fortsätta animationen längre
      scrub: true,
      //markers: true,
      onEnter: () => {
        // Animation för att öka storlek, rotera och flytta tändstickan
        gsap.to(matchstick, {
          scale: 0.8, // Slutar i en något mindre storlek än 1
          rotation: 360, // En full rotation
          x: "100vw", // Flyttar tändstickan till höger om skärmen
          duration: 3,
          ease: "none"
        });
      },
      onLeaveBack: () => {
        // Alternativt, återställ när användaren skrollar tillbaka
        gsap.to(matchstick, { scale: 0.1, rotation: 0, x: 0, ease: "none" });
      }
    });
  }
};
</script>

<style scoped>
.matchstick-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  /* Ökar höjden för att ge utrymme för skrollning */
}

.matchstick {
  position: fixed;
  top: 50%;
  left: 50%;
  transform-origin: center center;
}

.matchstick img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
