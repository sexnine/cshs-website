<template>
  <div
    class="sticky-header z-50 flex w-full items-center justify-between bg-white bg-opacity-40 py-2 px-6 text-3xl font-semibold shadow-md backdrop-blur-md dark:bg-gray-900 dark:bg-opacity-50"
  >
    <div>
      <h1>cshighschoolers</h1>
    </div>
    <div v-if="!mobileNavBar" class="flex items-center gap-x-2">
      <NavItemComponent
        v-for="item in navItems"
        :key="item.id"
        :name="item.label"
        :highlighted="item.id == selected"
        @click="item.clicked"
      />
      <div class="relative">
        <img
          src="https://cdn.discordapp.com/avatars/807958370887270400/3cd3a7987a276f1d0d07ed43c9e657bf.png"
          class="ml-2 aspect-square max-h-12 cursor-pointer rounded-full shadow-lg"
        />
        <fa-icon
          :icon="['fa', 'angle-down']"
          class="absolute bottom-0 right-0 aspect-square cursor-pointer rounded-full bg-white bg-opacity-70 text-lg text-black"
        />
      </div>
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
  import { computed, ref, watch } from "vue";
  import NavItemComponent from "./NavItem.vue";
  import router from "../router";

  watch(router.currentRoute, async (oldVal, newVal) => {
    console.log(oldVal);
    console.log(newVal);
  });

  const windowWidth = ref(0);

  class NavItem {
    constructor(
      public id: string,
      public label: string,
      public clicked: () => Promise<any>
    ) {}
  }

  const navItems = ref([
    new NavItem("home", "Home", async () => window.scrollTo(0, 0)),
    new NavItem("hackathons", "Hackathons", async () => window.scrollTo(0, 0)),
    new NavItem("dash", "Dashboard", async () => window.scrollTo(0, 0)),
  ]);

  const onWindowResize = () => {
    windowWidth.value = window.innerWidth;
  };

  const mobileNavBar = computed(() => {
    return windowWidth.value < 900;
  });

  const selected = computed(() => {
    return "home";
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
