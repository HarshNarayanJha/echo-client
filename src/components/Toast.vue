<script setup lang="ts">
const { message } = defineProps<{
  message: string
}>()
</script>

<template>
  <div
    id="live-toast"
    class="toast"
    role="status"
    aria-live="polite"
    aria-atomic="true"
    data-bs-delay="3500">
    <div class="d-flex">
      <!-- <img src="..." class="rounded me-2" alt="..." /> -->
      <div class="toast-body">{{ message }}</div>
      <div class="me-2 m-auto">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
          data-bs-theme="dark"></button>
      </div>
    </div>
  </div>
</template>
