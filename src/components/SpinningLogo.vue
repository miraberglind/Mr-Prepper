<template>
        <div>
          <img src="@/assets/img/pp_logo_black.png" class="logo" alt="Logo">
        </div>
      </template>

<script>

import { gsap } from "gsap";

export default {
  mounted() {
    gsap.to(".logo", {
      rotation: 360,
      x: '10vw',
      xPercent: -100,
      duration: 2,
      repeat: 0,
      yoyo: false,
      width: '100px',
    });
  }
}


</script>
