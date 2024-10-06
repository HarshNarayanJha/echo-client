<script setup lang="ts">
import socket from "@/services/socket";
import { ClientEvents, ServerEvents } from "@/types/events";
import { useSocketStore } from "@/stores/socketStore";
import { ref } from "vue";
import { storeToRefs } from "pinia";

import { renderVNode, renderToString } from "vue/server-renderer";

import Toast from "./Toast.vue";
import { Toast as BToast } from "bootstrap";

const store = useSocketStore();

const toastProps = {
  title: "",
  message: "",
};

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

  const toastContainer = document.getElementById("toast-container");
  const toast = document.getElementById("toast")!;
  const joinToast = BToast.getOrCreateInstance(toast);
  toastProps.title = "New Echoer!";
  toastProps.message = `${name} joined the room.`;
  joinToast.show();
});

socket.on(ServerEvents.LEFT, ({ name, members }) => {
  console.log("Bye Echoer!", name, "left.");
  store.setMembers(members);

  if (name === store.name) {
    return;
  }

  const toastContainer = document.getElementById("toast-container");
  const toast = document.getElementById("toast")!;
  const joinToast = BToast.getOrCreateInstance(toast);
  toastProps.title = "Bye Bye Echoer!";
  toastProps.message = `${name} left the room.`;
  joinToast.show();
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

  <div id="toast-container" class="toast-container position-fixed bottom-0 end-0 p-3">
    <Toast id="toast" v-bind="toastProps" />
  </div>
</template>

<style scoped>
textarea {
  resize: vertical;
  width: 100%;
}
</style>
