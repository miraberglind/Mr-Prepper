<template>
  <div class="peace-marks-container">
    <div class="text-content">
      <p><span class="headline">[VATTEN]</span><br>
      Rent dricksvatten är livsnödvändigt.<br>
      Räkna med minst tre liter per vuxen och dygn. Om du är osäker på kvalitén behöver du kunna koka vattnet.</p>

      <p><span class="headline">[MAT]</span><br>
      Det är viktigt att ha mat hemma som ger tillräckligt med energi.<br>
      Använd hållbar mat som kan tillagas snabbt, kräver liten mängd vatten eller som kan ätas utan tillagning.</p>

      <p><span class="headline">[VÄRME]</span><br>
      Om elen försvinner under en kall årstid blir bostaden snabbt utkyld.<br>
      Samlas i ett rum, häng filtar för fönstren, täck golvet med mattor och bygg en koja under ett bord för att hålla värmen.<br>
      Tänk på brandfaran om du har levande ljus.</p>

      <p><span class="headline">[KOMMUNIKATION]</span><br>
      Vid en allvarlig händelse behöver du kunna ta emot viktig information från ansvariga myndigheter, främst via Sveriges Radio P4 och Sveriges Television.<br>
      Du kan också gå in på krisinformation.se eller ringa informationsnumret 113 13.<br>
      Vid akuta behov måste du kunna larma 112.<br>
      Tänk också på att du behöver kunna ha kontakt med dina anhöriga.</p>
    </div>

    <!-- Peace-märken -->
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
  height: 600px; /* Ökad höjd för att ge mer utrymme för text */
  width: 100%;
  padding: 50px; /* Lägger till padding för att undvika att märkena överlappar texten */
}

.headline {
  color: #90FF6A; /* Grön färg */
  font-size: 70px; /* Storlek på text */
  font-weight: bold; /* Gör texten fet */
  text-transform: uppercase; /* Stora bokstäver */
}

.text-content {
  color: white;
  position: absolute;
  z-index: 2; /* Gör texten synlig ovanpå peace-märkena */
  text-align: center;
  font-size: 20px; /* Anpassa storleken efter behov */
  max-width: 60%; /* Begränsar textbredden för läsbarhet */
  line-height: 1.5; /* Förbättrar textens läsbarhet */
}

.peace-mark {
  position: absolute;
  animation: spin infinite linear;
}

/* Justerade positioner för att omringa texten mer balanserat */
.peace-mark-first { width: 150px; animation-duration: 5s; top: 2%; left:5%; }
.peace-mark-second { width: 100px; animation-duration: 7s; top: 50%; right: 15%; }
.pp-logo-first { width: 90px; animation-duration: 8s; bottom: 10%; left: 20%; }
.pp-logo-second { width: 90px; animation-duration: 6s; top: 10%; right: 2%; }

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>


