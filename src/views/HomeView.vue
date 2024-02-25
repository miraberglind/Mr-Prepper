<template>
  <div class="home">
    <PanicMessage />
    <div style="height: 70vh;"></div>
    <Matchbox />
    <div style="height: 20vh;"></div>
    <PointingHands />
    <div style="height: 20vh;"></div>
  </div>
</template>

<script>
import PanicMessage from '@/components/PanicMessage.vue';
import Matchbox from '@/components/Matchbox.vue';
import PointingHands from '@/components/PointingHands.vue';

export default {
  components: {
    PanicMessage,
    Matchbox,
    PointingHands,
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
