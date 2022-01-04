<template>
  <div class="h-screen">
    <div class="fixed z-10 py-4 w-full">
      <nav>
        <ul>
          <div
            class="flex text-center px-6 py-4 no-underline shadow-2xl rounded-full mx-10 my-6 justify-center bg-white"
          >
            <!--Load the navbar elements from an array--->
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
    </div>

    <div class="h-full bg-red-400">
      <div class="flex h-full flex-grow flex-col justify-center">
        <div>
          <h1
            class="text-6xl pb-2 font-bold text-gradiant self-center justify-self-center"
          >
            r/cshighschoolers
          </h1>
          <h1 class="text-3xl font-bold">
            The largest online community of highschool programmers
          </h1>
          <a href="#sus">sus</a>
        </div>
      </div>
    </div>
    <div id="sus" class="pt-[156px] h-full bg-green-400">
      <div class="flex flex-grow flex-col">
        <h1>test</h1>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      links: ["Home", "Projects", "Join", "Filler"],
    };
  },
  methods: {},
};
</script>
