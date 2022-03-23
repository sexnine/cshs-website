<template>
  <div
    class="sticky-header z-50 flex w-full justify-between bg-white bg-opacity-40 py-4 px-6 text-3xl font-semibold shadow-md backdrop-blur-md dark:bg-gray-900 dark:bg-opacity-50"
  >
    <div>
      <h1>cshighschoolers</h1>
    </div>
    <div v-if="!mobileNavBar" class="flex items-center gap-x-2">
      <NavItemComponent
        v-for="item in navItems"
        :key="item.label"
        :name="item.label"
        :highlighted="item.label == selected"
        @click="item.clicked"
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
  import { computed, inject, ref } from "vue";
  import NavItemComponent from "./NavItem.vue";

  const windowWidth = ref(0);

  class NavItem {
    constructor(
      public label: string,
      public clicked: () => Promise<any>,
      public docId: string
    ) {}
  }

  const getElementYPosition = (id: string) => {
    let topPos = document.getElementById(id)?.getBoundingClientRect()?.top;
    if (topPos === undefined) return;
    return topPos + window.scrollY - 68;
  };

  const scrollToEl = (id: string) => {
    window.scrollTo(0, getElementYPosition(id) ?? 0);
  };

  const navItems = ref([
    new NavItem(
      "Welcome",
      async () => window.scrollTo(0, 0),
      "welcome-section"
    ),
    new NavItem(
      "About Us",
      async () => scrollToEl("about-us-section"),
      "about-us-section"
    ),
    new NavItem(
      "Events",
      async () => scrollToEl("events-section"),
      "events-section"
    ),
    new NavItem(
      "Free Domains",
      async () => scrollToEl("domains-section"),
      "domains-section"
    ),
  ]);

  const onWindowResize = () => {
    windowWidth.value = window.innerWidth;
    scrollPoints.value = {};
    navItems.value.forEach((x) => {
      let elYPos = getElementYPosition(x.docId) ?? 0;
      elYPos = elYPos > 0 ? elYPos : 0;
      scrollPoints.value[elYPos] = x.label;
    });
  };

  const mobileNavBar = computed(() => {
    return windowWidth.value < 900;
  });

  const scrollYPos = ref(0);
  const scrollPoints = ref<{ [key: number]: string; }>({});

  const selected = computed(() => {
    let scrollPoint = Object.keys(scrollPoints.value)
      .map((x) => parseInt(x))
      .sort((a, b) => b - a)
      .find((x) => scrollYPos.value >= (x as unknown as number));
    // @ts-ignore
    return scrollPoints.value[scrollPoint];
  });

  const onScroll = () => {
    scrollYPos.value = window.scrollY;
  };

  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", onWindowResize);
  // TODO: TS bullshit
  // @ts-ignore
  inject("mitt").on("viewMounted", () => onWindowResize());
  onWindowResize();
</script>

<style scoped>
  .sticky-header {
    position: sticky;
    position: -webkit-sticky;
    top: 0px;
  }
</style>
