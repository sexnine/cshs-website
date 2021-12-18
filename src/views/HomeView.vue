<template>
  <nav>
    <ul>
      <div
        class="flex text-center px-6 py-6 no-underline bg-red shadow-lg rounded-full object-top mx-10 my-6 justify-center bg-white"
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
    class="text-6xl font-bold text-black self-center justify-self-center vertical-center"
  >
    r/cshighschoolers
  </h1>
</template>

<style>
.vertical-center {
  margin: 0;
  position: absolute;
  top: 42%;
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
