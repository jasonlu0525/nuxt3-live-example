<script setup>
const title = ref("首頁 - Nuxt3 Day11 useHead() 練習");

useHead({
  title,
  meta: [
    {
      property: "og:title",
      content: "首頁 - Nuxt3 Day11 useHead() 練習",
    },
    { property: "og:image", content: "http://localhost:3000/share.jpg" },
    {
      property: "og:description",
      content: "首頁 - 透過今天的學習，將會學習到 Nuxt3  useHead() 的使用方法 ",
    },
    {
      name: "description",
      content: "首頁 - 透過今天的學習，將會學習到 Nuxt3  useHead() 的使用方法 ",
    },
  ],
});
</script>

<template>
  <h1>Page: index</h1>
  <label for="title">
    修改瀏覽器頁籤的標題
    <input type="text" id="title" v-model="title" />
  </label>
</template>
<style scoped></style>
