<script setup></script>

<template>
  <nav class="navbar">
    <NuxtLink to="/">建立全域輔助函式</NuxtLink>
    <NuxtLink to="/pluginroot">調整插件目錄 </NuxtLink>
    <NuxtLink to="/pluginenv">插件的執行環境調整</NuxtLink>
  </nav>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  gap: 4rem;
  margin-bottom: 3rem;
}
a {
  display: block;
  font-size: 32px;
}
</style>
