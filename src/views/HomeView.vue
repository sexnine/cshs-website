<template>
  <body>
    <section id="Main-Home">
      <nav>
        <ul>
          <div
            class="flex text-center px-6 py-4 no-underline shadow-2xl rounded-full object-top mx-10 my-6 justify-center bg-white"
          >
            <li
              class="mx-6 px-4 py-2 text-lg font-bold rounded-md transform-gpu transition duration-200 cursor-pointer hover:scale-125"
              v-for="link in links"
              :key="link"
            >
              {{ link }}
            </li>
          </div>
        </ul>
      </nav>

      <div class="">
        <h1
          class="text-6xl font-bold text-gradiant self-center justify-self-center upper-center"
        >
          r/cshighschoolers
        </h1>
      </div>

      <hr
        class="w-1/3 border-t-4 border-black rounded-md relative top-96 left-1/3"
      />

      <h1 class="lower-center text-3xl font-bold">
        The largest online community of highschool programmers
      </h1>

      <a href="#SecondHome" class="text-9xl bottom animate-bounce">˯</a>
    </section>

    <section id="Second-Home">
      <h1></h1>
    </section>
  </body>
</template>

<style>
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
  left: 50%;
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
      links: ["Home", "Projects", "Join", "Filler"],
    };
  },
  methods: {
    scroll() {
      console.log("Button pressed");
    },
  },
};
</script>
