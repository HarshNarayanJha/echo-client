<script setup lang="ts">
import { nanoid } from "nanoid";
import { uniqueNamesGenerator, type Config, adjectives, colors, animals, names } from "unique-names-generator";

const roomId = nanoid(6);

const nameConfig: Config = {
  length: 2,
  separator: " ",
  style: "capital",
  dictionaries: [adjectives, animals],
};

const name: string = uniqueNamesGenerator(nameConfig);
</script>

<template>
  <h1>Welcome to Echo</h1>
  <p>This app creates a private notepad, which you can share with your friends and type in sync!</p>

  <RouterLink :to="{ name: 'room', params: { roomId } }"><button>Let's Start</button></RouterLink>
</template>
