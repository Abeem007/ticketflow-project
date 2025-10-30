<template>
  <div class="min-h-screen flex flex-col justify-between bg-white">
    <main class="grow">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Footer from "./components/Footer.vue";
</script>

<style>

</style>
