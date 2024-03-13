<template>
  <!-- Vector Container for Image-->
  <div class="vector-container">
    <!-- Image for Prepping Items -->
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
/* Styling for vector container */
.vector-container {
  position: relative;
  min-height: 30vh;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  display: flex;
  justify-content: center; /* Make the text center */
  align-items: flex-start; /* Align content to the top */
}

/* Styling for body and html elements */
body, html {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Prevent horizontal scrolling on the entire image */
}

/* Styling for prepping items image*/
.preppingitems {
  width: 50%;
  position: absolute;
  left: 50%; /* Centrer elements to avoid going off-screen */
  transform: translateX(-50%);
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  animation-fill-mode: forwards; /* Ensure elements stay in their final position after animation */
  margin-top: 20px; /* Adjust this value as needed to reduce spacing downwards */
}

/* Define animation for sliding from left */
.preppingitems {
  animation-name: slideFromLeft;
}

/* Keyframes for slide from left animation */
@keyframes slideFromLeft {
  from {
    transform: translateX(-150vw);
  }
  to {
    transform: translateX(-50%);
  }
}


/* Media query for smaller screens */
@media (max-width: 768px) {
  .preppingitems{
    width: 80%;
  }
}
</style>
