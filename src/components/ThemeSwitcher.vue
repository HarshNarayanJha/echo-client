<template>
  <button
    class="btn btn-secondary py-2 px-2 px-lg-2 dropdown-toggle"
    id="bd-theme"
    type="button"
    aria-expanded="false"
    data-bs-toggle="dropdown"
    data-bs-display="static"
    aria-label="Toggle theme (auto)">
    <span
      class="badge position-absolute top-0 start-0 translate-middle rounded-pill bg-info p-1"
      id="bd-theme-dot">
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
    <hr class="dropdown-divider" />
    <li class="dropdown-item-text">
      <p>TIP: Use <kbd>SHIFT</kbd> + <kbd>D</kbd></p>
    </li>
  </ul>
</template>
