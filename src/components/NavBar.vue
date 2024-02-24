<template>
  <!-- The NavBar -->
  <nav class="navbar border-bottom border-black" style="background-color: #90ff6a">
    <div class="container-fluid">
      <!-- The logo of the company -->
      <i class="bi bi-p-circle" style="font-size: 32px; color: black"></i>
      <!-- Title -->
      <a class="navbar-brand text-black fw-bold">Prepp-a-Porter</a>
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
    aria-labelledby="offcanvasNavbarLabel"
    style="background-color: #90ff6a"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
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
      <div class="d-flex flex-column align-items-center justify-content-center h-100">
        <a href="#" class="nav-link">Home</a>
        <a href="#" class="nav-link">About</a>
        <a href="#" class="nav-link">Contact</a>
        <a href="#" class="nav-link">Read More</a>
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
  width: 100vw;
}
</style>
