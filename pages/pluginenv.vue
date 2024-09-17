<script setup>
const { $pluginC, $pluginD, $pluginE } = useNuxtApp();

// 在伺服器和客戶端都可以執行
console.log($pluginC());

if (import.meta.server) {
  // 僅在伺服器端執行，移到 if 外面會在客戶端發生錯誤
  console.log($pluginE());
}

if (import.meta.client) {
  // 僅在客戶端執行，移到 if 外面會在伺服器端發生錯誤
  console.log($pluginD());
}
</script>

<template>
  <h1>插件的執行環境調整</h1>
</template>

<style scoped></style>
