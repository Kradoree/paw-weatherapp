<template>
  <div class="flex flex-col min-h-screen bg-pricolor">
    <NavBar />
    <RouterView />
  </div>
</template>

<script setup>
  import { RouterView } from "vue-router";
  import NavBar from "./components/NavBar.vue"
</script>
