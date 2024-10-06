<script setup lang="ts">
import { nanoid } from "nanoid";
import { useSocketStore } from "@/stores/socketStore";
import { storeToRefs } from "pinia";
import socket from "@/services/socket";
import { ClientEvents } from "@/types/events";

const store = useSocketStore();

if (store.name && store.roomId) {
  socket.emit(ClientEvents.LEAVE, { name: store.name, roomId: store.roomId });
  console.log("Emitted LEAVE");
  store.name = null;
  store.members = [];
  store.roomId = null;
}

socket.on("connect", () => {
  console.log("Connected to server", socket.id);
  store.id = socket.id;
});

const { id } = storeToRefs(store);

const roomId = nanoid(6);
</script>

<template>
  <div class="landing d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
    <h1>Welcome to Echo</h1>
    <p>Create a private notepad, which you can share with your friends and type in sync!</p>

    <div v-if="typeof id != 'string'">Connecting to the server...</div>
    <div v-else>
      <RouterLink :to="{ name: 'room', params: { roomId } }"><button class="btn btn-info btn-lg">Let's Start</button></RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>
