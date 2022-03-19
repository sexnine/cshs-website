<template>
  <div
    class="sticky-header z-50 flex w-full justify-between bg-white bg-opacity-40 py-4 px-6 text-3xl font-semibold shadow-md backdrop-blur-md dark:bg-gray-900 dark:bg-opacity-50"
  >
    <div>
      <h1>r/cshighschoolers</h1>
    </div>
    <div v-if="!mobileNavBar" class="flex items-center gap-x-2">
      <NavItem
        v-for="item in navItems"
        :key="item"
        :name="item"
        :highlighted="item == selected"
      />
    </div>
    <div v-else class="invisible">
      <fa-icon
        :icon="['fa', 'bars']"
        class="rounded-md bg-white bg-opacity-50 p-2"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from "vue";
  import NavItem from "./NavItem.vue";

  const navItems = ref(["Welcome", "About Us", "Events", "Free Domains"]);
  const selected = ref("Welcome");
  const windowWidth = ref(0);

  const onWindowResize = () => {
    windowWidth.value = window.innerWidth;
  };

  const mobileNavBar = computed(() => {
    return windowWidth.value < 900;
  });

  window.addEventListener("resize", onWindowResize);
  onWindowResize();
</script>

<style scoped>
  .sticky-header {
    position: sticky;
    position: -webkit-sticky;
    top: 0px;
  }
</style>
