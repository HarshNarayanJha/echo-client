<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import QrcodeVue from 'qrcode.vue'
import { useSocketStore } from '@/stores/socketStore'
import { initEchoer, echoNote } from '@/services/socket'

import { Tooltip } from 'bootstrap'
import { onMounted } from 'vue'

const store = useSocketStore()

const { note, membersButMe } = storeToRefs(store)

initEchoer()

const onType = () => {
  echoNote()
}

onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll("[data-bs-toggle='tooltip']")
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
  )
})
</script>

<template>
  <div class="notepad container-fluid mt-4">
    <div id="room-details" class="d-flex align-items-center justify-content-between">
      <div class="controls">
        <RouterLink to="/" class="btn btn-secondary mb-4" role="button">
          <i class="bi bi-house"></i>
        </RouterLink>
        <h1>Hello, {{ store.name }}</h1>
        <p>
          Room ID: <span class="badge text-bg-success">{{ store.roomId }}</span>
          <button class="btn" data-bs-toggle="tooltip" title="Copy Room URL to Clipboard">
            <i class="bi bi-copy"></i>
          </button>
          <button class="btn" data-bs-toggle="tooltip" title="Share Room URL">
            <i class="bi bi-share-fill"></i>
          </button>
        </p>
      </div>
      <div class="">
        <qrcode-vue
          :value="$route.fullPath"
          :size="125"
          :margin="1"
          class="me-4"
          background="#000000"
          foreground="#fff" />
        <p>{{ $route.fullPath }}</p>
      </div>
    </div>

    <textarea rows="15" name="text" id="text" v-model="note" @input="onType"></textarea>
  </div>
  <hr class="w-75 ms-auto me-auto" />
  <div class="container-fluid">
    <p class="fs-5 fw-bold">Other Echoers connected to this notepad</p>
    <ul>
      <li v-for="mem in membersButMe" :key="mem.name">
        <span>{{ mem.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
textarea {
  resize: vertical;
  width: 100%;
}
</style>
