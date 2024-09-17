<script setup>
const { $pluginB, $pluginA } = useNuxtApp();
</script>

<template>
  <h1>自定義註冊子目錄的 admin/pluginB.js 插件</h1>
  <p>{{ $pluginA("pluginA") }}</p>
  <p>{{ $pluginB("pluginB") }}</p>
</template>

<style scoped></style>
