<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="container">
    <Navbar />
    <main>
      <RouterView />
    </main>
  </div>
</template>
