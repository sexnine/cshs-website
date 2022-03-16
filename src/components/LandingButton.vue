<template>
  <button
    class="focus:border-transparent inline-flex transform-gpu cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-lg bg-red-500 px-8 py-3 text-xl font-semibold text-gray-200 antialiased shadow-md transition duration-200 ease-in-out hover:-translate-y-2 hover:text-white hover:shadow-lg focus:outline-none"
    :class="classes"
  >
    <fa-icon v-if="icon" :icon="icon" class="mr-4 text-2xl" />
    {{ text }}
  </button>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        required: true,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      disabledClasses: {
        type: String,
        default: "bg-gray-500 bg-opacity-40",
      },
      icon: {
        type: Array,
        default: null,
      },
    },
    computed: {
      classes() {
        var res = "";
        if (this.disabled) {
          res = this.disabledClasses;
        } else {
          res = "";
        }

        return res;
      },
    },
  };
</script>
