<template>
  <div class="home">
    <PanicMessage />
    <div style="height: 70vh;"></div>
    <Matchbox />
    <div style="height: 20vh;"></div>
    <PointingHands />
    <div style="height: 20vh;"></div>
    <ColorChangeCircle />
    <div style="height: 20vh;"></div>
    <ScrollingText />
    <div class="after-text" style="height: 100vh;"></div> <!-- Ger utrymme för skrollning -->


  </div>
</template>

<script>
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
