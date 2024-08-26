<script setup>
// Auto Imports
const route = useRoute();

// 獲取路由中的動態參數
// 例如 : 路由路徑為 /product/productA ， route.params 為 { id: 'productA'}
console.log(route.params);
</script>

<template>
  <h2>產品內頁 {{ route.params.id }}</h2>
</template>

<style scoped></style>
