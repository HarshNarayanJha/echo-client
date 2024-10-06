<script setup lang="ts">
import Notepad from "@/components/Notepad.vue";
import { uniqueNamesGenerator, type Config, adjectives, colors, animals, names } from "unique-names-generator";
import { useSocketStore } from "@/stores/socketStore";
import socket from "@/services/socket";

const store = useSocketStore();

const { roomId } = defineProps<{
  roomId: string;
}>();

const nameConfig: Config = {
  length: 2,
  separator: " ",
  style: "capital",
  dictionaries: [adjectives, animals],
};

const name: string = uniqueNamesGenerator(nameConfig);

store.name = name;
store.id = socket.id;
store.roomId = roomId;
store.addMember(name);
</script>

<template>
  <Notepad />
</template>
