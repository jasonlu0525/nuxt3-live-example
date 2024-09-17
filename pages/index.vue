<script setup>
const { $example, $showAlert } = useNuxtApp();

// 也可以在 JS 區塊執行
console.log($example("Day16"));
</script>

<template>
  <h1>在模板內執行</h1>
  <div>
    {{ $example("Day16") }}
  </div>

  <h2>開啟 sweetAlert2</h2>
  <button
    @click="$showAlert({ showDenyButton: true, denyButtonText: `Don't save` })"
  >
    開啟
  </button>
</template>
