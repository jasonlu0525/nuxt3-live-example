<script setup>
const route = useRoute();
const event = useRequestEvent(); // 獲取當前請求的事件

// 設置 HTTP 狀態碼為 404
setResponseStatus(event, 404);
</script>

<template>
  <h1>404 Not Found</h1>
   <p>你所請求的頁面：{{ route.params.slug.join('/') }}，不存在。</p>
</template>

<style scoped>
h1 {
  color: red;
  text-align: center;
}
p {
  text-align: center;
}
</style>