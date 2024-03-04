<template>
  <div class="scrolling-text-container">
    <div class="scrolling-text">
      <span>TOALETTPAPPER BURKMAT GASSOLKÖK </span>
      <span>TOALETTPAPPER BURKMAT GASSOLKÖK </span>
    </div>
  </div>
</template>

<style scoped>
.scrolling-text-container {
  font-size: 10rem;
  color: white;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
}

.scrolling-text {
  display: flex;
  animation: scroll-left 20s linear infinite;
}

.scrolling-text span {
  white-space: nowrap;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%); /* Flytta bara halva bredden för att matcha textens upprepning */
  }
}


</style>
