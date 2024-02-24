<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NavBar />
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">about</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
