<script setup>
const route = useRoute();
</script>

<template>
  <p>匹配到的 Params:{{ route.params.slug }}</p>
  <p>每個陣列元素對應一個層級</p>
</template>
