<template>
  <p
    class="rounded-md px-2 text-lg font-bold decoration-2"
    :class="[
      highlighted
        ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-800'
        : '',
    ]"
  >
    {{ name }}
  </p>
</template>

<script setup lang="ts">
  const props = defineProps<{
    name: string;
    highlighted: boolean;
  }>();
</script>
