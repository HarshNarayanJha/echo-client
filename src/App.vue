<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'

import { useSocketStore } from './stores/socketStore'
import { onMounted } from 'vue'

const store = useSocketStore()

onMounted(() => {
  store.toastContainer = document.getElementById('toast-container')
})
</script>

<template>
  <header>
    <Header />
  </header>
  <RouterView />
  <div class="toast-container position-fixed bottom-0 end-0 p-3" id="toast-container"></div>
</template>

<style scoped></style>
