<template>
  <div class="home">
    <SpinningLogo />
    <PanicMessage />
    <PanicText />

    <div class="spacer medium"></div>
    <ArticleEarthquake />
    <div class="spacer large"></div>
    <PointingHands />
    <div class="spacer small"></div>
    <ColorChangeStar />
    <div class="spacer tiny"></div>
    <ScrollingText />
    <div class="spacer tiny"></div>
    <HorizontalText />
    <div class="spacer small"></div>
    <SpinningObjects />
    <div class="spacer extra-large"></div>
  </div>
</template>

<script>
import PanicText from '@/components/PanicText.vue'
import PanicMessage from '@/components/PanicMessage.vue'
import ArticleEarthquake from '@/components/ArticleEarthquake.vue'
import PointingHands from '@/components/PointingHands.vue'
import ColorChangeStar from '@/components/ColorChangeStar.vue'
import ScrollingText from '@/components/ScrollingText.vue'
import HorizontalText from '@/components/HorizontalText.vue'
import SpinningObjects from '@/components/SpinningObjects.vue'

export default {
  components: {
    PanicMessage,
    ArticleEarthquake,
    PointingHands,
    ColorChangeStar,
    ScrollingText,
    PanicText,
    HorizontalText,
    SpinningObjects
  }
}
</script>

<style scoped>
.home {
  overflow-x: hidden; /* Prevents horizontal scrolling */
}

/* Base spacer sizes */
.spacer {
  width: 100%;
}
.spacer.tiny { height: 5vh; }
.spacer.small { height: 20vh; }
.spacer.medium { height: 30vh; }
.spacer.large { height: 130vh; }
.spacer.extra-large { height: 40vh; }

/* Media query for screens smaller than 768px */
@media (max-width: 768px) {
  .spacer.tiny { height: 5vh; }
  .spacer.small { height: 20vh; }
  .spacer.medium { height: 30vh; }
  .spacer.large { height: 130vh; }
  .spacer.extra-large { height: 40vh; }
  /* Add additional responsive styles as needed */
}
</style>
