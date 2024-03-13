<template>
  <div class="home">
    <SpinningLogo />
    <PanicMessage />
    <PanicText />
    <!-- <SpinningLogo /> -->


    <div style="height: 70vh"></div>
    <Matchbox />
    <div style="height: 10vh"></div>
    <PointingHands />
    <div style="height: 20vh"></div>
    <ColorChangeStar />
    <div style="height: 5vh"></div>
    <ScrollingText />
    <div style="height: 5vh"></div>
    <HorizontalText />
    <div style="height: 10vh"></div>
    <SpinningObjects />
    <div style="height: 40vh"></div>
    <NotePad />
    <div style="height: 40vh"></div>
  </div>
</template>

<script>
// import SpinningLogo from '@/components/SpinningLogo.vue'
import PanicText from '@/components/PanicText.vue'
import PanicMessage from '@/components/PanicMessage.vue'
import Matchbox from '@/components/Matchbox.vue'
import PointingHands from '@/components/PointingHands.vue'
import ColorChangeStar from '@/components/ColorChangeStar.vue'
import ScrollingText from '@/components/ScrollingText.vue'
import NotePad from '@/components/NotePad.vue'
import HorizontalText from '@/components/HorizontalText.vue'
import SpinningObjects from '@/components/SpinningObjects.vue'


export default {
  components: {
    PanicMessage,
    Matchbox,
    PointingHands,
    ColorChangeStar,
    ScrollingText,
    PanicText,
    HorizontalText,
    SpinningObjects,
    NotePad
  }
}
</script>

<style scoped>
.home {
  overflow-x: hidden;
  /* Förhindrar horisontellt scrollande */
}

/* Övriga stilar för din HomeView-komponent */
</style>
