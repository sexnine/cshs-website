<template>
  <div id="vbg" ref="vbg" class="absolute top-0 z-0 h-full w-full"></div>
  <div
    ref="landingContent"
    class="relative -mt-[4.25rem] flex w-full flex-col items-center justify-between pt-[4.25rem]"
  >
    <div class="flex-grow"></div>
    <div class="w-full pl-4 lg:pl-16 text-left">
      <h1 class="pb-4 text-5xl">cshighschoolers</h1>
      <h1 class="pb-6 text-3xl">
        The <span class="">greatest</span> community of highschool programmers
      </h1>
      <div
        class="flex w-min flex-col rounded-lg bg-white bg-opacity-50 p-5 dark:bg-gray-900"
      >
        <h2 class="pb-4 text-xl">Join us!</h2>
        <div class="flex gap-4 pb-4">
          <LandingButton
            :icon="['fab', 'reddit']"
            text="Reddit"
            class="bg-orange-500 text-glow-[orange-400]"
            @click="redditClicked"
          />
          <LandingButton
            :icon="['fab', 'discord']"
            text="Discord"
            class="bg-blue-700 text-glow-[blue-500]"
            @click="discordClicked"
          />
        </div>
        <h2 class="pb-4">Or sign up for more features 👀</h2>
        <LandingButton
          :icon="['fa', 'user-plus']"
          text="Sign up"
          class="bg-pink-600 text-glow-[pink-500]"
        />
      </div>
    </div>
    <div class="flex flex-grow flex-col justify-end pb-8">
      <!-- <div class="flex-grow" /> -->
      <h2 class="pb-2 text-lg">Scroll down for more info</h2>
      <fa-icon class="text-4xl" :icon="['fa', 'angles-down']" />
    </div>
  </div>
  <h1 v-for="i in 10" :key="i">this is the first element</h1>

  <p>{{ $t("test") }}</p>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import LandingButton from "../components/LandingButton.vue";

  export default defineComponent({
    components: {
      LandingButton,
    },
    data() {
      return {
        effect: null,
      };
    },
    mounted() {
      // @ts-ignore
      this.effect = window.VANTA.FOG({
        el: "#vbg",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        // highlightColor: 0xf72a72,
        // midtoneColor: 0xe8425b,
        // lowlightColor: 0xf7df2c,
        // highlightColor: 0xfabf03,
        // midtoneColor: 0xff2f12,
        // lowlightColor: 0x2f03ff,
        // baseColor: 0x2b2155,
        highlightColor: 0xfabf03,
        midtoneColor: 0xf71f00,
        lowlightColor: 0x2a00f7,
        baseColor: 0xffae9b,
        blurFactor: 0.8,
        speed: 0.8,
        zoom: window.innerHeight / 1385,
      });
      this.onWindowResize(null);
    },
    created() {
      window.addEventListener("resize", this.onWindowResize);
    },
    unmounted() {
      window.removeEventListener("resize", this.onWindowResize);
    },
    methods: {
      onWindowResize(e: Event) {
        (this.effect as any).setOptions({
          zoom: screen.height / 1385,
        });
        (this.$refs.landingContent as HTMLElement).style["height"] = `${(this.$refs.vbg as HTMLElement).clientHeight}px`
        // console.log((this.$refs.vbg as HTMLElement).clientHeight);
      },
      redditClicked() {
        window.open("https://reddit.com/r/cshighschoolers", "_blank");
      },
      discordClicked() {
        window.open("https://discord.gg/DyNJ2dMQPr", "_blank");
      },
    },
  });
</script>

<style></style>
