<template>
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

  <h1
    class="text-6xl font-bold text-black self-center justify-self-center upper-center"
  >
    r/cshighschoolers
  </h1>

  <hr
    class="w-1/3 border-t-4 border-black rounded-md relative top-96 left-1/3"
  />

  <h1 class="lower-center text-3xl font-bold">
    The largest online community of highschool programmers
  </h1>

  <h1 class="text-9xl bottom animate-bounce cursor-pointer">˯</h1>
</template>

<style>
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
};
</script>
