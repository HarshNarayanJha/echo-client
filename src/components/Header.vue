<script setup lang="ts">
import ThemeSwitcher from './ThemeSwitcher.vue';

import { RouterLink } from 'vue-router'
import { useSocketStore } from '@/stores/socketStore'

const state = useSocketStore()
</script>

<template>
  <nav
    id="navbar"
    class="navbar navbar-expand-lg"
    style="
      background-color: var(--bs-content-bg);
      border-bottom: var(--bs-border-width) solid var(--bs-content-border-color);
    ">
    <div class="container">
      <RouterLink to="/" class="navbar-brand fw-bolder"> <span class="h2">Echo</span> </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-collapse"
        aria-controls="navbar-collapse"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar-collapse">
        <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About</RouterLink>
          </li>
          <li class="nav-item">
            <a class="nav-link">{{ state.name }}</a>
          </li>

          <li class="nav-item dropdown">
            <ThemeSwitcher />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
