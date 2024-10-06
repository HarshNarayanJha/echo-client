<script setup lang="ts">
  const roomId = "xyzwu"
</script>

<template>
  <h1>Welcome to Echo</h1>
  <p>This app creates a private notepad, which you can share with your friends and type in sync!</p>

  <RouterLink :to="`/${roomId}`"><button>Let's Start</button></RouterLink>
</template>
