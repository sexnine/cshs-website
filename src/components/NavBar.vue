<template>
  <div
    class="sticky-header z-50 flex w-full justify-between bg-white bg-opacity-50 py-4 px-6 text-3xl font-semibold shadow-md backdrop-blur-lg dark:bg-black dark:bg-opacity-50"
  >
    <div>
      <h1>cshighschoolers</h1>
    </div>
    <div class="flex items-center gap-x-2">
      <NavItem
        v-for="item in navItems"
        :key="item"
        :name="item"
        :highlighted="item == selected"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import NavItem from "./NavItem.vue";

  const navItems = ref([
    "Welcome",
    "About Us",
    "Events",
    "Hackathons",
    "Free Domains",
  ]);
  const selected = ref("Welcome");
</script>

<style scoped>
  .sticky-header {
    position: sticky;
    position: -webkit-sticky;
    top: 0px;
  }
</style>
