<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <h3><RouterLink to="/">Echo</RouterLink></h3>
    <ul>
      <li><RouterLink to="/about">About</RouterLink></li>
    </ul>
  </div>
</template>
