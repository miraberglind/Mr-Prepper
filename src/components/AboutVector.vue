<template>
  <div class="vector-container">
    <!-- Left hand image -->
    <img src="@/assets/img/Sleepingbag.png" alt="Sleeping Bag" class="sleepingbag" />
    <!-- Right hand image -->
    <img src="@/assets/img/foodcan.png" alt="Food Can" class="foodcan" />
  </div>
</template>

<script>
export default {
  mounted() {
    // Inga GSAP-animeringar behövs här
  }
};
</script>

<style scoped>
.vector-container {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden; /* Förhindrar horisontell scroll */
}

body, html {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Förhindrar sidscroll på hela sidan */
}

.sleepingbag, .foodcan, .animated-text {
  position: absolute;
  left: 50%; /* Centrerar elementen för att undvika att de går utanför skärmen */
  transform: translateX(-50%);
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1); /* Samma som 'power3.out' i GSAP */
  animation-fill-mode: forwards; /* Säkerställer att elementen stannar på sin slutposition efter animationen */
}

.sleepingbag {
  animation-name: slideFromLeft;
}

.foodcan {
  animation-name: slideFromRight;
  animation-delay: 0.5s;
}

@keyframes slideFromLeft {
  from {
    transform: translateX(-100vw);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes slideFromRight {
  from {
    transform: translateX(100vw);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 768px) {
  .sleepingbag, .foodcan {
    width: 80vw; /* Anpassar storleken på bilderna baserat på skärmens bredd */
  }
}
</style>
