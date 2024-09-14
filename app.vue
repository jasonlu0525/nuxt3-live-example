<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <NuxtLink class="navbar-brand" to="/">Day15 範例</NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">匿名 middleware  範例 </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/about">具名 middleware  範例</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/register">註冊範例</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/login">登入範例</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
