<script setup lang="ts">
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
            <button
              class="btn btn-secondary py-2 px-0 px-lg-2 dropdown-toggle"
              id="bd-theme"
              type="button"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-label="Toggle theme (auto)">
              <span
                class="badge position-absolute top-0 start-0 translate-middle rounded-pill bg-info p-1">
                <span class="visually-hidden">New alerts</span>
              </span>
              <span class="me-2 theme-icon-active">
                <i class="bi bi-circle-half"></i>
              </span>
              <span class="d-lg-none" id="bd-theme-text">Toggle theme</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text">
              <li>
                <button
                  type="button"
                  class="dropdown-item d-flex align-items-center"
                  data-bs-theme-value="light"
                  aria-pressed="false">
                  <span class="me-2 opacity-50">
                    <i class="bi bi-sun-fill"></i>
                  </span>
                  Light
                  <i class="bi bi-check2 ms-auto d-none"></i>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="dropdown-item d-flex align-items-center"
                  data-bs-theme-value="dark"
                  aria-pressed="false">
                  <span class="me-2 opacity-50">
                    <i class="bi bi-moon-stars-fill"></i>
                  </span>
                  Dark
                  <i class="bi bi-check2 ms-auto d-none"></i>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="dropdown-item d-flex align-items-center active"
                  data-bs-theme-value="auto"
                  aria-pressed="true">
                  <span class="me-2 opacity-50">
                    <i class="bi bi-circle-half"></i>
                  </span>
                  Auto
                  <i class="bi bi-check2 ms-auto d-none"></i>
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
