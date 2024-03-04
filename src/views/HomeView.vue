<template>
  <div class="home">
    <SpinningLogo />
    <PanicMessage />
    <PanicText />

    <div style="height: 70vh;"></div>
    <Matchbox />
    <div style="height: 10vh;"></div>
    <PointingHands />
    <div style="height: 20vh;"></div>
    <ColorChangeCircle />
    <div style="height: 5vh;"></div>
    <ScrollingText />
    <div style="height: 10vh;"></div>
    <HorizontalText />
    <div style="height: 30vh;"></div>
    <SpinningObjects />
    <div style="height: 40vh;"></div>

  </div>
</template>

<script>
import PanicText from '@/components/PanicText.vue';
import PanicMessage from '@/components/PanicMessage.vue';
import Matchbox from '@/components/Matchbox.vue';
import PointingHands from '@/components/PointingHands.vue';
import ColorChangeCircle from '@/components/ColorChangeCircle.vue';
import ScrollingText from '@/components/ScrollingText.vue';



export default {
  components: {
    PanicMessage,
    Matchbox,
    PointingHands,
    ColorChangeCircle,
    ScrollingText,

  },
};
</script>

<style scoped>
.home {
  overflow-x: hidden;
  /* Förhindrar horisontellt scrollande */
}

/* Övriga stilar för din HomeView-komponent */
</style>
