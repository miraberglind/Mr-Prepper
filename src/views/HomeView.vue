<template>
  <div class="home">
    <SpinningLogo />
    <PanicMessage />
    <PanicText />


    <div style="height: 30vh"></div>
    <ArticleEarthquake />
    <div style="height: 10vh"></div>
    <PointingHands />
    <div style="height: 20vh"></div>
    <ColorChangeCircle />
    <div style="height: 5vh"></div>
    <ScrollingText />
    <div style="height: 10vh"></div>
    <HorizontalText />
    <div style="height: 30vh"></div>
    <SpinningObjects />
    <div style="height: 40vh"></div>
  </div>
</template>

<script>
// import SpinningLogo from '@/components/SpinningLogo.vue'
import PanicText from '@/components/PanicText.vue'
import PanicMessage from '@/components/PanicMessage.vue'
import ArticleEarthquake from '@/components/ArticleEarthquake.vue'
import PointingHands from '@/components/PointingHands.vue'
import ColorChangeCircle from '@/components/ColorChangeCircle.vue'
import ScrollingText from '@/components/ScrollingText.vue'
import HorizontalText from '@/components/HorizontalText.vue'
import SpinningObjects from '@/components/SpinningObjects.vue'

export default {
  components: {
    PanicMessage,
    ArticleEarthquake,
    PointingHands,
    ColorChangeCircle,
    ScrollingText,
    PanicText,
    HorizontalText,
    SpinningObjects
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
