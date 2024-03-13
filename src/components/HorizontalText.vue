<template>
  <div class="scrolling-text-container">
    <div class="scrolling-text">
      <span> TOILET PAPER CANNED FOOD GAS STOVE </span>
      <span> TOILET PAPER CANNED FOOD GAS STOVE </span>
    </div>
  </div>
</template>


<style scoped>
.scrolling-text-container {
  font-size: 10rem; /* Large font size for visibility */
  color: white; /* Text color */
  overflow: hidden; /* Hides the overflowing text to create a seamless scroll */
  white-space: nowrap; /* Keeps the text on a single line */
  display: flex; /* Enables flexbox layout for the container */
}

.scrolling-text {
  display: flex; /* Enables flexbox layout for the text, ensuring items are inline */
  animation: scroll-left 20s linear infinite; /* Applies a continuous leftward scrolling animation */
}

.scrolling-text span {
  white-space: nowrap; /* Ensures the text doesn't wrap */
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%); /* Starting position of the text */
  }
  100% {
    transform: translateX(-50%); /* Scrolls the text halfway across its width to create a looping effect */
  }
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
  .scrolling-text-container {
    font-size: 5rem; /* Smaller font size for smaller screens */
  }
}
</style>
