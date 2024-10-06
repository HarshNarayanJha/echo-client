<script setup lang="ts">
import socket from "@/services/socket";
import { RouterLink } from "vue-router";
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

  if (name === store.name) {
    return;
  }
});

socket.on(ServerEvents.LEFT, ({ name, members }) => {
  console.log("Bye Echoer!", name, "left.");
  store.setMembers(members);

  if (name === store.name) {
    return;
  }
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
      <li v-for="mem in membersButMe">{{ mem.name }}</li>
    </ul>
  </div>
</template>

<style scoped>
textarea {
  resize: vertical;
  width: 100%;
}
</style>
