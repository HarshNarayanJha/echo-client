<script setup lang="ts">
import socket from "@/services/socket";
import { ClientEvents, ServerEvents } from "@/types/events";
import { useSocketStore } from "@/stores/socketStore";
import { ref } from "vue";
import { storeToRefs } from "pinia";

const store = useSocketStore();

socket.emit(ClientEvents.INIT, { name: store.name!, roomId: store.roomId! });

socket.on(ServerEvents.JOINED, ({ name, members }) => {
  console.log("New Echoer", name, "joined!");
  store.setMembers(members);
  if (note.value) {
    socket.emit(ClientEvents.ECHO, { text: note.value });
  }
});

socket.on(ServerEvents.LEFT, ({ name, members }) => {
  console.log("Bye Echoer!", name, "left.");
  store.setMembers(members);
});

socket.on(ServerEvents.REVERB, ({ text }) => {
  note.value = text;
});

const onType = () => {
  socket.emit(ClientEvents.ECHO, { text: note.value });
};

const note = ref<string>("");
const { membersButMe } = storeToRefs(store);
</script>

<template>
  <p>Room {{ store.roomId }}</p>
  <h1>Welcome {{ store.name }}</h1>
  <h5>Other Echoers connected to this echo</h5>
  <ul>
    <li v-for="mem in membersButMe">{{ mem.name }}</li>
  </ul>

  <textarea name="text" id="text" v-model="note" @input="onType"></textarea>
</template>

<style scoped></style>
