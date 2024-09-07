<script setup>
useSeoMeta({
  title: "關於我們",
  ogTitle: "關於我們- Nuxt3 Day12 useSeoMeta() 與 useServerSeoMeta() 練習",
  ogImage: "http://localhost:3000/share.jpg",
  ogDescription:
    "關於我們 - 透過今天的學習，將會學習到 Nuxt3 useSeoMeta() 與 useServerSeoMeta() 的使用方法",
  description:
    "關於我們 - 透過今天的學習，將會學習到 Nuxt3 useSeoMeta() 與 useServerSeoMeta() 的使用方法",
});

useServerSeoMeta({
  title: "useServerSeoMeta",
  ogTitle: "useServerSeoMeta",
  ogImage: "http://localhost:3000/useServerSeoMeta.jpg",
  ogDescription: "useServerSeoMeta",
  description: "useServerSeoMeta",
});
</script>

<template>
  <h1>Page: about</h1>
</template>
<style scoped></style>
