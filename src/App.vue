<script setup>
import { RouterView } from 'vue-router';
import NavbarComponent from './components/NavbarComponent.vue';
</script>

<template>
  <div data-theme="dracula" class="fixed inset-0 flex justify-center sm:px-8">
    <div class="flex w-full max-w-4xl lg:px-8">
      <div class="w-full px-4">
        <NavbarComponent />
        <RouterView />
      </div>
      <!-- Your content here -->
    </div>
  </div>
</template>

<style scoped></style>
