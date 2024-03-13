<template>
  <div class="peace-marks-container">
    <div class="text-content">
      <p><span class="headline">[WATER]</span><br>
      Clean drinking water is essential for life.<br>
      Plan on at least three liters per adult per day. If you're unsure about the quality, you need to be able to boil the water.</p>

      <p><span class="headline">[FOOD]</span><br>
      It's important to have food at home that provides enough energy.<br>
      Use sustainable food that can be prepared quickly, requires a small amount of water, or can be eaten without cooking.</p>

      <p><span class="headline">[HEAT]</span><br>
      If electricity goes out during a cold season, your home will cool down quickly.<br>
      Gather in one room, hang blankets over the windows, cover the floor with rugs, and build a fort under a table to keep warm.<br>
      Be mindful of the fire hazard if you're using candles.</p>

      <p><span class="headline">[COMMUNICATION]</span><br>
      In a serious event, you need to be able to receive important information from the responsible authorities, mainly through Sveriges Radio P4 and Sveriges Television.<br>
      You can also visit krisinformation.se or call the information number 113 13.<br>
      In urgent needs, you must be able to alarm 112.<br>
      Also remember that you need to be able to stay in touch with your relatives.</p>
    </div>
    
    <!-- Peace-marks -->
    <img src="@/assets/img/peace_sign_green.png" alt="Peace Sign Green" class="peace-mark peace-mark-first" />
    <img src="@/assets/img/peace_sign_green.png" alt="Peace Sign Green" class="peace-mark peace-mark-second" />
    <img src="@/assets/img/pp_logo_green.png" alt="PP Logo Green" class="peace-mark pp-logo-first" />
    <img src="@/assets/img/pp_logo_green.png" alt="PP Logo Green" class="peace-mark pp-logo-second" />
  </div>
</template>


<style scoped>
.peace-marks-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 600px; /* Adjust height for more space for text */
  width: 100%;
  padding: 50px; /* Adds padding to prevent the marks from overlapping the text */
}

.headline {
  color: #90FF6A; /* Green color */
  font-size: 70px; /* Text size */
  font-weight: bold; /* Makes the text bold */
  text-transform: uppercase; /* Uppercase letters */
}

.text-content {
  color: white;
  position: absolute;
  z-index: 2; /* Makes the text visible above the peace marks */
  text-align: center;
  font-size: 20px; /* Adjust size as needed */
  max-width: 60%; /* Limits text width for readability */
  line-height: 1.5; /* Improves text readability */
}

.peace-mark {
  position: absolute;
  animation: spin infinite linear;
}

/* Adjusted positions to more balancedly surround the text */
.peace-mark-first { width: 150px; animation-duration: 5s; top: 2%; left:5%; }
.peace-mark-second { width: 100px; animation-duration: 7s; top: 50%; right: 15%; }
.pp-logo-first { width: 90px; animation-duration: 8s; bottom: 10%; left: 20%; }
.pp-logo-second { width: 90px; animation-duration: 6s; top: 10%; right: 2%; }

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .headline {
    font-size: 30px; /* Further reduce the headline size for very small screens */
  }

  .text-content {
    font-size: 14px; /* Reduce font size for better fit on small screens */
    max-width: 90%; /* Increase max-width for better text wrapping */
    padding: 0 20px; /* Add padding to prevent text from touching the edges */
    margin: 0 auto; /* Center the text content if necessary */
    line-height: 1.4; /* Adjust line height for better readability */
  }

  .peace-mark-first, .peace-mark-second, .pp-logo-first, .pp-logo-second {
    width: 50px; /* Make icons significantly smaller to not interfere with the text */
    opacity: 0.9; /* Optional: Reduce opacity to make them less distracting */
  }

  /* Adjusting positions further away from the text or even off-screen if they are too distracting */
  .peace-mark-first { top: -10%; left: 1%; }
  .peace-mark-second { top: 50%; right: -3%; }
  .pp-logo-first { bottom: 20%; left: -1%; }
  .pp-logo-second { top: -3%; right: 3%; }
}
</style>
