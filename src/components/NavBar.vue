<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js' // Import bootstrap-JS into the document
import { gsap } from 'gsap'
export default {
  methods: {
    hideOffCanvas() {
      // Using Bootstrap's JavaScript API to hide the offcanvas menu
      const offCanvasElement = this.$refs.offcanvasNavbar
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offCanvasElement)
      bsOffcanvas.hide()
    }
  },
  // Code for the SpinningLogo
  mounted() {
    gsap.to('.logo', {
      rotation: 360,
      x: '10vw',
      xPercent: -100,
      duration: 1.5,
      repeat: 0,
      yoyo: false,
      width: '50px'
    })
  }
}
</script>

<template>
  <!-- The NavBar -->
  <nav class="navbar sticky-top border-bottom border-black" style="background-color: #90ff6a">
    <div class="container-fluid">
      <!-- The logo of the company -->
      <router-link to="/">
        <img src="@/assets/img/pp_logo_black.png" class="logo" alt="Logo of the website" />
      </router-link>
      <!-- Title -->
      <h1 class="navbar-brand text-black fw-bold">Prepp-a-Porter</h1>
      <!-- The Hamburger Menu/Open-toggle-btn -->
      <button
        class="navbar-toggler custom-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <i class="bi bi-list" style="font-size: 32px; color: black"></i>
      </button>
    </div>
  </nav>

  <!-- Offcanvas Menu (That slides in from the side) -->
  <div
    class="offcanvas offcanvas-start full-width-offcanvas"
    tabindex="-1"
    id="offcanvasNavbar"
    ref="offcanvasNavbar"
    aria-labelledby="offcanvasNavbarLabel"
    style="background-color: #90ff6a"
  >
    <div class="offcanvas-header border-bottom border-black">
      <h5 class="offcanvas-title fw-bold" id="offcanvasNavbarLabel">Menu</h5>
      <!-- Close-toggle-btn  -->
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <!-- Random links in the middle of the offcanvas body -->
      <div class="d-flex flex-column align-items-center justify-content-center gap-3 h-100 fs-2">
        <router-link class="router-link-text-decoration" to="/" @click="hideOffCanvas"
          >Home</router-link
        >
        <router-link class="router-link-text-decoration" to="/AboutView" @click="hideOffCanvas"
          >About</router-link
        >
        <router-link class="router-link-text-decoration" to="/" @click="hideOffCanvas"
          >Contact</router-link
        >
        <router-link class="router-link-text-decoration" to="/about" @click="hideOffCanvas"
          >Read More</router-link
        >
      </div>
    </div>
  </div>
</template>

<!-- I Put the styling in the same component -->
<style>
/* Removes the default border & padding of the toggler-btn in the Navbar */
.custom-toggler {
  border: none;
  padding: 0;
}
/* Ensure that the canvas covers full viewport width */
.full-width-offcanvas {
  width: 100vw !important;
}

/* The decoration for the router-link */
.router-link-text-decoration {
  text-decoration: none;
  color: black;
}
.router-link-text-decoration:hover {
  text-decoration: underline;
}
</style>
