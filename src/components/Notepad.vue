<script setup lang="ts">
import socket from "@/services/socket";

import { ref } from "vue";

const text = ref<string>("");

socket.on("update", (data: string) => {
  text.value += data
});

</script>

<template>
  <textarea name="text" id="text" :value="text"></textarea>
</template>

<style scoped></style>
