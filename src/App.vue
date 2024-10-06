<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import { Toast } from "bootstrap";
</script>

<template>
  <header>
    <Header />
  </header>
  <RouterView />
</template>

<style scoped></style>
