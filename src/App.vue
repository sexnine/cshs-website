<template>
  <div class="mb-2 flex h-max w-full flex-col items-center">
    <nav-bar class="" />
    <div class="w-full">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
  import NavBar from "./components/NavBar.vue";
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* color: #000; */
    @apply text-gray-900 dark:text-white;
  }

  .light-bg {
    background: rgb(69, 218, 176);
    background: linear-gradient(
      290deg,
      rgba(69, 218, 176, 1) 0%,
      rgba(32, 221, 77, 1) 100%
    );
  }

  .dark-bg {
    background: rgb(0, 89, 85);
    background: linear-gradient(
      290deg,
      rgba(0, 89, 85, 1) 6%,
      rgba(0, 75, 9, 1) 89%
    );
  }

  .dark body {
    @apply bg-gray-900;
  }

  body {
    @apply bg-white;
  }
</style>
