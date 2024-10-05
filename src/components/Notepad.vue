<script setup lang="ts">
import socket from "../services/socket";

socket.on("update", (text) => {
  console.log("Updating " + text)
});
</script>

<template>
  <textarea name="text" id="text"></textarea>
</template>

<style scoped></style>
