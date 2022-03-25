<template>
  <h1>dash</h1>
  <p>Is signed in: {{ signedIn }}</p>
  <p>{{ user }}</p>
</template>

<script setup lang="ts">
  import { global as store } from "../store";

  const user = store.user;
  const signedIn = store.isSignedIn;
  console.log(user);
</script>
