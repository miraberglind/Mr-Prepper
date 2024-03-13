<template>
  <div class="vector-container">
    <!-- Prepping image -->
    <img src="@/assets/img/preppingitems.png" alt="Prepping Items" class="preppingitems" />
  </div>
</template>

<script>
export default {
  mounted() {
  }
};
</script>

<style scoped>
.vector-container {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden; /* Förhindrar horisontell scroll */
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Placera innehållet högst upp */
}

body, html {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Förhindrar sidscroll på hela sidan */
}

.preppingitems {
  width: 50%;
  position: absolute;
  left: 50%; /* Centrerar elementen för att undvika att de går utanför skärmen */
  transform: translateX(-50%);
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1); /* Samma som 'power3.out' i GSAP */
  animation-fill-mode: forwards; /* Säkerställer att elementen stannar på sin slutposition efter animationen */
  margin-top: 20px; /* Justera detta värde efter behov för att minska avståndet nedåt */
}

.preppingitems {
  animation-name: slideFromLeft;
}


@keyframes slideFromLeft {
  from {
    transform: translateX(-100vw);
  }
  to {
    transform: translateX(-50%);
  }
}


@media (max-width: 768px) {
  .preppingitems{
    width: 80%; /* Anpassar storleken på bilderna baserat på skärmens bredd */
  }
}
</style>
