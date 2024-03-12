<template>
  <div class="container">
    <div class="matchbox" ref="matchbox">
      <img src="@/assets/img/article1_hero_img.png" alt="matchbox" />
    </div>
    <div class="text-overlay">
      <ul class="earthquake-tips">
        <li>
          <h2>1. Stay Calm</h2>
          <p>Although this sounds cliche, staying calm is one of the important things to do during an earthquake...</p>
        </li>
        <li>
          <h2>2. Go Under a Sturdy Table</h2>
          <p>Look for a sturdy table and always remember this formula: “Drop, Cover and Hold on.” First, drop down...
          </p>
        </li>
        <li>
          <h2>3. Count Aloud to 60</h2>
          <p>Apart from calming you down, counting aloud to 60 is an important step to help you monitor any immediate
            aftershocks. It will also allow people nearby to know your presence.</p>
        </li>
        <li>
          <h2>4. Wait it Out</h2>
          <p>It is crucial that you wait for all the shaking to stop until you get out of cover. Aftershocks can occur
            seconds after the first quake, depending on the magnitude. Small and medium earthquakes can last only for a
            few seconds, while large earthquakes can continue for several minutes.</p>
        </li>
        <li>
          <h2>5. Go to an Interior Wall</h2>
          <p>When there's no immediate cover, seek shelter near an interior wall. It's one of the best earthquake safety
            tips for those living in a condo. The reason is that condo nowadays are stronger and better designed.
            Remember to use your arms to cover your head and neck.</p>
        </li>
        <li>
          <h2>6. Grab the First Aid Kit</h2>
          <p>If you or a family member is injured, use the interval between quakes to quickly grab the first-aid kit.
            But do this only if it's within your reach. Take action quickly, calmly, and safely. Check also for other
            injuries and damages that need immediate attention. Again, stay inside your condo during this time until the
            shaking stops. Never move anyone seriously injured unless there's immediate danger.</p>
        </li>
        <li>
          <h2>7. Stay Inside</h2>
          <p>Staying inside your condo will protect your from falling debris and panicking people outside. Your space is
            one of the safest places during an earthquake. Modern high-rise condos are designed to withstand shocks and
            seismic motions. Because of their sturdy construction, as compared to very old high-rise buildings, modern
            high-rise condos are safer. That condos are safe and great living spaces justify the increasing demand for
            condo rental.</p>
        </li>
        <li>
          <h2>8. Stay Away from Windows</h2>
          <p>Windows are hazards during an earthquake because they are usually the first to break or collapse. Stay away
            from this danger zone, as well as from facades, hanging objects, and mirrors..</p>
        </li>
        <li>
          <h2>9. Reach for the Flashlight</h2>
          <p>Flashlights are important during earthquakes because electrical power will likely be disrupted. As a
            preparatory measure, make sure that flashlights are within reach or strategically placed in your condo. Keep
            one in the drawer near your bed or the living room table to make them easily available.</p>
        </li>
        <li>
          <h2>10. Be Alert</h2>
          <p>Many things can happen during this uncontrollable situation, but your best compass for an appropriate
            action is staying alert throughout. If using your phone is possible, text or call a family or friend that is
            out of the area. Tell them where you are and then stay off the phone to conserve battery.</p>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(this.$refs.matchbox, {
      scrollTrigger: {
        trigger: this.$refs.matchbox,
        start: "top bottom", // Animation starts when the top of the matchbox hits the bottom of the viewport
        end: "top top", // Animation ends when the top of the matchbox reaches the top of the viewport
        scrub: true, // Makes the animation's progress tied to the scroll position
        toggleActions: "play reverse play reverse",
        // markers: true, // For debugging, remove or comment out for production
      },
      x: () => { // Uses a function to determine the target position based on screen width
        // Moves to the right of the screen if the user scrolls down and in from the right if scrolling up
        const windowWidth = window.innerWidth;
        return windowWidth < 768 ? '100%' : '50%'; // Example for responsiveness
      },
      duration: 2, // How long the animation should take
      ease: "none", // Uses linear easing for smooth movement with the scrolling
    });
  },
};
</script>


<style scoped>
.container {
  position: relative;
  width: 100%;
  /* Take up the full width of the parent */
  height: 600px;
  /* Adjust based on your content or design needs */
}

.matchbox {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* Ensure the image spans the full width of the container */
  height: 100%;
  /* Ensure the image covers the container fully */
  z-index: 1;
}

.text-overlay {
  position: absolute;
  top: 150%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  /* This ensures the text appears above the image */
  display: flex;
  justify-content: left;
  align-items: center;
  /* Center the text overlay content */
  color: #000000;
  /* Adjust for readability */
  text-align: left;
  /* Center text horizontally */
}

.earthquake-tips {
  list-style: none;
  /* Remove default list styling */
  padding: 0;
  /* Remove default padding */
}

.earthquake-tips h2 {
  font-size: 50px;
  font-weight: bold;
  font-family: Helvetica, Arial, sans-serif;
}

.earthquake-tips li {
  max-width: 700px; /* Limit the width of list items */
  margin-bottom: 20px; /* Optional: adds space between list items */
}


.earthquake-tips p {
  /* Your paragraph styling */
}
</style>
