<script setup lang="ts">
import socket from "@/services/socket";
import { ref } from "vue";

const { roomId } = defineProps<{
  roomId: string;
}>();

const text = ref<string>("");

const onType = () => {
  socket.emit("update", text.value);
};
</script>

<template>
  <p>Room {{ roomId }}</p>
  <textarea name="text" id="text" v-model="text" @keyup="onType"></textarea>
</template>

<style scoped></style>
