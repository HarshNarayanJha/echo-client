<script setup lang="ts">
import Notepad from '@/components/Notepad.vue'
import { useSocketStore } from '@/stores/socketStore'
import socket from '@/services/socket'
import { useName } from '@/services/name'

const store = useSocketStore()

const { roomId } = defineProps<{
  roomId: string
}>()

const name = useName()

store.name = name
store.id = socket.id
store.roomId = roomId
</script>

<template>
  <Notepad />
</template>
