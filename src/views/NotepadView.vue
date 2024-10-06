<script setup lang="ts">
import { useRoute } from "vue-router";
import Notepad from "@/components/Notepad.vue";

const route  = useRoute()
const roomId: string = route.params.roomId as string

</script>

<template>
  <Notepad :roomId />
</template>
