<script setup>
// Auto Imports
const route = useRoute();

// 獲取路由中的查詢參數
// 例如 : 路由路徑為 /product/productA ， route.query 為空物件
// 例如 : 路由路徑為 /product/productA?q=產品名稱 ， route.query 為 { q:'產品名稱' }
console.log(route.query);

// 獲取包含路由路徑 ( path ) 、查詢參數 ( query ) 和 hash 的完整 URL
console.log(route.fullPath);

// 獲取路由的唯一名稱 ( name ) ，會以 pages 資料夾結構來命名，以 productA.vue 來說會是  product-productA
console.log(route.name);
</script>

<template>
  <h2>產品內頁 productA</h2>
</template>

<style scoped></style>
