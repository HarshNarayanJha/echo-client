<script setup lang="ts">
import { nanoid } from 'nanoid'
import { useSocketStore } from '@/stores/socketStore'
import { storeToRefs } from 'pinia'

import { leaveRoom } from '@/services/socket'

const store = useSocketStore()

if (store.name && store.roomId) {
  leaveRoom()
}

const { id } = storeToRefs(store)
const roomId = nanoid(6)

const routeTo = {
  name: 'room',
  params: {
    roomId
  }
}
</script>

<template>
  <div
    class="landing d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
    <h1 class="display-2">Welcome to Echo</h1>
    <p class="fs-5">
      Create a private notepad, which you can share with your friends and type in sync!
    </p>

    <div v-if="id === null">Connecting to the server...</div>
    <div v-else>
      <RouterLink :to="routeTo">
        <button class="btn btn-info btn-lg fs-5 mt-4 px-4 py-2">Let's Start</button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
