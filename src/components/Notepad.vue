<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useSocketStore } from '@/stores/socketStore'
import { storeToRefs } from 'pinia'
import { initEchoer, echoNote } from '@/services/socket'

const store = useSocketStore()

const { note, membersButMe } = storeToRefs(store)

initEchoer()

const onType = () => {
  echoNote()
}
</script>

<template>
  <div class="notepad container-fluid mt-4">
    <RouterLink to="/" class="btn btn-secondary mb-4" role="button">&Lt; Back</RouterLink>
    <h1>Welcome Back, {{ store.name }}</h1>
    <p>
      Room ID: <span class="badge text-bg-success">{{ store.roomId }}</span>
    </p>
    <p>Share Notepad Url: {{ $route.fullPath }}</p>

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
