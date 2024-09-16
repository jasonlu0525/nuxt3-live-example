<script setup></script>

<template>
  <nav class="navbar">
    <NuxtLink to="/">useAsyncData 寫法 </NuxtLink>
    <NuxtLink to="/useFetch">useFetch 寫法 </NuxtLink>
    <NuxtLink to="/difference">useFetch 和 useAsyncData 的差異</NuxtLink>
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
