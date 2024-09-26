<script setup>
/* 自動匯入資料夾 */

const cartStore = useCartStore();
const orderStore = useOrderStore();
const exampleStore = useExampleStore();
</script>

<template>
  <div class="container mt-5">
    <h2>使用 cartStore</h2>
    {{ cartStore.message }}
    <hr />
    <h2>使用 orderStore</h2>
    <p>
      {{ orderStore.message }}
    </p>
    <pre>// nuxt.config.ts
export default defineNuxtConfig({
  // ...其他設定
  modules: ['@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**'], // 自動匯入 /stores 目錄下的所有 store
  },
})</pre>

    <hr />
    <h2>使用 Option 物件定義 store ( Option Store )</h2>
    <p>state 屬性的資料: {{ exampleStore.message }}</p>
    <p>getters 屬性的資料: {{ exampleStore.countMessageLength }}</p>
  </div>
</template>

<style scoped></style>
