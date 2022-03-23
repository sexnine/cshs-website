<template>
  <div id="vbg" ref="vbg" class="absolute top-0 z-0 h-full w-full" />
  <div
    id="welcome-section"
    ref="landingContent"
    class="relative -mt-[4.25rem] mb-12 flex w-full flex-col items-center justify-between pt-[4.25rem]"
  >
    <div class="flex-grow" />
    <div class="flex w-full flex-col items-center pl-4 pr-4">
      <h1 class="pb-4 text-5xl">cshighschoolers</h1>
      <h1 class="pb-6 text-3xl">
        The <span class="">greatest</span> community of highschool programmers
      </h1>
      <div
        class="flex w-full flex-col rounded-lg bg-white bg-opacity-50 p-5 dark:bg-gray-900 sm:w-min"
      >
        <h2 class="pb-4 text-xl">Join us!</h2>
        <div class="flex flex-col gap-4 pb-4 sm:flex-row">
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
          class="bg-red-500 text-glow-[red-400]"
          @click="signUpClicked"
        />
      </div>
    </div>
    <div class="flex flex-grow flex-col justify-end pb-8">
      <h2 class="pb-2 text-lg">Scroll down for more info</h2>
      <fa-icon class="animate-bounce text-4xl" :icon="['fa', 'angles-down']" />
    </div>
  </div>
  <div class="px-4">
    <div id="about-us-section" class="mb-16 flex flex-col items-center">
      <h2
        class="pb-4 text-4xl font-bold underline decoration-red-500 decoration-4 underline-offset-1"
      >
        About us
      </h2>
      <p class="max-w-3xl text-2xl">
        We are a lively community of highschool students around the world united
        by a shared passion for computer science and programming. Our goal is to
        provide an open and welcoming community for like minded students that
        fosters an interconnected and harmonious enviroment for our members.
        <br />
        <br />
        No matter your skill level or age there is place for you among our
        members.
        <!-- <br /> <br />
      Wanna show off your projects? Get some help with your code? Or maybe just wanna chat? -->
      </p>
    </div>

    <div id="events-section" class="mb-16 flex flex-col items-center">
      <h2
        class="pb-4 text-4xl font-bold underline decoration-orange-500 decoration-4 underline-offset-1"
      >
        Events
      </h2>
      <p class="max-w-3xl pb-4 text-2xl">
        We host a multitude of events such as hackathons and guest speakers
        (soon™) which provide both insights into the industry and fun challenges
        to improve our programming abilities.
      </p>
      <div
        class="flex w-full max-w-sm flex-col items-start rounded-lg bg-gradient-to-r from-indigo-300 to-pink-300 px-6 py-4 text-left text-black"
      >
        <p class="pb-2 text-xl font-semibold">Next Hackathon</p>
        <p class="text-lg">
          <span class="font-bold">When: </span>
          Join the
          <a
            class="font-semibold underline decoration-blue-500 decoration-2"
            href="https://discord.com/invite/DyNJ2dMQPr"
            >Discord</a
          >
          or
          <a
            class="font-semibold underline decoration-orange-500 decoration-2"
            href="https://www.reddit.com/r/cshighschoolers"
            >Subreddit</a
          >
          and find out 😉
        </p>
      </div>
    </div>

    <div id="domains-section" class="mb-16 flex flex-col items-center">
      <h2
        class="pb-2 text-4xl font-bold underline decoration-green-500 decoration-4 underline-offset-1"
      >
        Free Domains
      </h2>
      <p class="mb-4 rounded-md bg-orange-500 px-2 text-white">Coming soon</p>
      <p class="max-w-3xl pb-4 text-2xl">
        Need a domain but don't want to pay for one? We got you!
      </p>
      <DomainExample />
      <p class="max-w-3xl pb-4 text-2xl">
        Rep a sleek, sexy, short domain that you can use for anything. <br />
        A personal website or project perhaps?
        <br />
        <br />
        Get a fully customizable domain and connect it with whatever you want.
        Your domain, your DNS! <br />
        We'll also provide guides to connect your domain to different services
        such as Github Pages and Vercel. <br />
        Your domain is also automatically protected by Cloudflare.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  // TODO: Use Composition API instead (even tho it kinda sucks)
  // TODO: Add types for vanta (thanks typescript for making my life terrible)

  import { defineComponent } from "vue";
  import LandingButton from "../components/LandingButton.vue";
  // @ts-ignore
  import FOG from "vanta/dist/vanta.fog.min";
  import DomainExample from "../components/DomainExample.vue";

  export default defineComponent({
    components: {
      LandingButton,
      DomainExample,
    },
    inject: ["mitt"],
    data() {
      return {
        effect: null,
        domainExamples: [
          "yourname",
          "coolproject",
          "sexnine",
          "equinox",
          "awnmp",
          "nuke",
          "frityet",
          "cdev",
        ],
        currentDomainExampleIndex: 0,
      };
    },
    async mounted() {
      // @ts-ignore
      this.effect = FOG({
        el: "#vbg",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0xfabf03,
        midtoneColor: 0xf71f00,
        lowlightColor: 0x2a00f7,
        baseColor: 0xffae9b,
        blurFactor: 0.8,
        speed: 0.8,
        zoom: screen.height / 1385,
      });
      this.onWindowResize();
      // @ts-ignore
      this.mitt.emit("viewMounted");
    },
    created() {
      window.addEventListener("resize", this.onWindowResize);
    },
    unmounted() {
      window.removeEventListener("resize", this.onWindowResize);
    },
    methods: {
      onWindowResize() {
        // eslint-disable-next-line
        (this.effect as any).setOptions({
          zoom: screen.height / 1385,
        });
        (this.$refs.landingContent as HTMLElement).style["height"] = `${
          (this.$refs.vbg as HTMLElement).clientHeight
        }px`;
      },
      redditClicked() {
        window.open("https://reddit.com/r/cshighschoolers", "_blank");
      },
      discordClicked() {
        window.open("https://discord.gg/DyNJ2dMQPr", "_blank");
      },
      signUpClicked() {
        alert("Coming soon :)\nsorry lol");
      },
    },
  });
</script>

<style></style>
