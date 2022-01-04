<template>
  <nav id="navbar">
    <ul>
      <div
        class="sticky flex text-center px-6 py-4 no-underline shadow-2xl rounded-full object-top mx-10 my-6 justify-center bg-white"
      >
        <li
          class="mx-6 px-6 py-2 text-lg font-bold rounded-md transform-gpu transition duration-200 cursor-pointer hover:scale-125"
          v-for="link in links"
          :key="link"
        >
          {{ link }}
        </li>
      </div>
    </ul>
  </nav>

  <section id="Main-Home" class="bg-red-400 w-full h-full">
    <h1
      class="text-6xl py-5 font-bold text-gradiant self-center justify-self-center upper-center"
    >
      r/cshighschoolers
    </h1>

    <hr
      class="w-1/3 border-t-4 border-black rounded-md absolute top-1/2 left-1/3"
    />

    <h1 class="lower-center text-3xl font-bold">
      The largest online community of highschool programmers
    </h1>

    <button @click="scroll()" class="text-9xl bottom animate-bounce">˯</button>
  </section>

  <section id="Second-Home" class="second-page bg-red-300 w-full h-full">
    <div class="h-1/2 bg-green-300">
      <div class="w-1/2 bg-pink-400 h-full">
        <h1 class="text-5xl">Active Community</h1>

        <hr class="" />

        <h1 class="">
          The r/cshighschoolers discord is one of the most active online
          communities of highschool programmers
        </h1>
      </div>

      <div class="h-full w-1/2 bg-green-700"></div>
    </div>
  </section>
</template>

<style>
nav {
  position: fixed; /* fixing the position takes it out of html flow - knows
                   nothing about where to locate itself except by browser
                   coordinates */
  left: 0; /* top left corner should start at leftmost spot */
  top: 0; /* top left corner should start at topmost spot */
  width: 100vw; /* take up the full browser width */
  z-index: 200; /* high z index so other content scrolls underneath */
  height: 100px; /* define height for content */
}

.second-page {
  margin: 0;
  position: absolute;
  top: 149%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.background-gradiant {
  background: linear-gradient(45deg, #3cc28a, #2885d1);
}

.text-gradiant {
  background: linear-gradient(45deg, #3cc28a, #2885d1);
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.upper-center {
  margin: 0;
  position: absolute;
  top: 42%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.lower-center {
  margin: 0;
  position: absolute;
  top: 58%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.bottom {
  margin: 0;
  position: absolute;
  top: 85%;
  left: 49%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      links: ["Home", "Projects", "Join", "Discord"],
      canScroll: false,
    };
  },
  methods: {
    scroll() {
      window.scrollTo(0, document.body.scrollHeight + 1010);
    },
    sticky() {
      console.log("Scrolling");
      this.canScroll = true;
    },
    can_scroll() {
      if (this.canScroll == false) {
        window.scroll(0, 0);
        console.log("Can scroll");
      } else {
        console.log("Cannot Scroll");
      }
    },
  },
};
</script>
