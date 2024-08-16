<template>
  <div class="app">
    <strong>最外層的 App.vue </strong>
    <ul class="list">
      <li>
        <NuxtLink to="/">前往首頁</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">前往 /about </NuxtLink>
      </li>
    </ul>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style scoped>
.app {
  padding: 50px;
  background-color: #f5f5dc;
}

.list {
  display: flex;
  list-style: none;
  gap: 2rem;
}
</style>