<template>
  <div class="mb-4 flex items-center rounded-md bg-gray-300 px-4 py-2 text-lg">
    <fa-icon :icon="['fa', 'lock']" class="pr-2 text-green-600" />
    <p class="text-gray-700">https://</p>
    <span
      ref="customDomainField"
      class="w-full font-bold text-black outline-none"
      role="textbox"
      contenteditable
      style="background: transparent"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
      type="text"
    />
    <p class="text-black">.cshs.dev</p>
    <p class="text-gray-700">/</p>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from "vue";

  let domainExamples = [
    "yourname",
    "coolproject",
    "sexnine",
    "equinox",
    "awnmp",
    "nuke",
    "frityet",
    "cdev",
    "beever",
  ];
  let currentDomainExampleIndex = 0;
  const customDomainField = ref<HTMLElement>();

  function aSleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function domainExample() {
    let currentText = customDomainField.value?.innerText;
    if (currentText === undefined) return;

    if (domainExamples.includes(currentText) || !currentText) {
      await domainAnimation();
    }
    await aSleep(3000);
    await domainExample();
  }
  async function domainAnimation() {
    let el = customDomainField.value;
    if (!el) return;

    for (let i = 0; i < 15; i++) {
      if (!el.innerText) {
        break;
      }
      el.innerText = el.innerText.slice(0, -1);
      await aSleep(100);
    }

    let newText = domainExamples[currentDomainExampleIndex];
    let currentText = "";
    currentDomainExampleIndex =
      currentDomainExampleIndex >= domainExamples.length - 1
        ? 0
        : currentDomainExampleIndex + 1;

    for (let i = 0; i < newText.length; i++) {
      currentText += newText.charAt(i);
      el.innerText = currentText;
      await aSleep(150);
    }
  }

  onMounted(async () => {
    await domainExample();
  });
</script>
