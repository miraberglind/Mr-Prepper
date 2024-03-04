
<template>
  <div class="text-container">
    <div class="text from-left" ref="fromLeft"> Prepp-a-Porter !! Prepp-a-Porter !! Prepp-a-Porter !! Prepp-a-Porter !! Prepp-a-Porter !! Prepp-a-Porter !! Prepp-a-Porter !!  </div>
    <div class="text from-right" ref="fromRight">Prepp-a-Porter !! Prepp-a-Porter !! Prepp-a-Porter !! Prepp-a-Porter !! Prepp-a-Porter !! Prepp-a-Porter !! Prepp-a-Porter !!  </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    let windowWidth = window.innerWidth;

    // För att säkerställa att bakgrundsfärgen ändras till rosa när texten börjar komma in
    ScrollTrigger.create({
      trigger: ".text-container",
      start: "top bottom",
      end: "bottom top",
      onEnter: () => document.body.style.backgroundColor = '#C34E9C',
      onEnterBack: () => document.body.style.backgroundColor = '#C34E9C',
      onLeaveBack: () => document.body.style.backgroundColor = '#90FF6A',
      //markers: true,
    });

    // Animerar text från vänster
    gsap.from(this.$refs.fromLeft, {
      x: () => -windowWidth / 2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: this.$refs.fromLeft,
        start: "top bottom",
        end: "top center",
        scrub: true,
        //markers: true,
      },
    });

    // Animerar text från höger
    gsap.from(this.$refs.fromRight, {
      x: () => windowWidth / 2,
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
  gap: 0px;
  padding: 10px;
  overflow-x: hidden;
  width: 100%; /* Säkerställer att containern tar upp hela bredden */
}

.text {
  font-size: 70px;
  font-weight: bold;
  color: white;
  margin: auto; /* Centrerar texten och ger lika marginaler */
}
</style>
