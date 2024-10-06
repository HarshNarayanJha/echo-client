<script setup lang="ts">
import socket from "@/services/socket";
import { ClientEvents, ServerEvents } from "@/types/events";
import { useSocketStore } from "@/stores/socketStore";
import { ref } from "vue";

const store = useSocketStore();

const note = ref<string>("");

socket.emit(ClientEvents.INIT, { name: store.name!, roomId: store.roomId! });

socket.on(ServerEvents.JOINED, ({ name }) => {
  console.log("New Echoer", name, "joined!");
  if (!store.hasMember(name)) {
    store.addMember(name);
  }
});

socket.on(ServerEvents.REVERB, ({ text }) => {
  note.value = text;
});

const onType = () => {
  socket.emit(ClientEvents.ECHO, { text: note.value });
};
</script>

<template>
  <p>Room {{ store.roomId }}</p>
  <h1>Welcome {{ store.name }}</h1>
  <textarea name="text" id="text" v-model="note" @keyup="onType"></textarea>
</template>

<style scoped></style>
