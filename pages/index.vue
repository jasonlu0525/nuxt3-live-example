<script setup>
const title = ref("首頁");
const theme = ref("useSeoMeta() 與 useServerSeoMeta()");

useHead({
  title,
  titleTemplate: (title) => `${title} - Nuxt3 Day12 ${theme.value} 練習`,
});

useSeoMeta({
  ogTitle: () => `${title.value} - Nuxt3 Day12 ${theme.value} 練習`,
  ogImage: "http://localhost:3000/share.jpg",
  ogDescription: () =>
    `${title.value} - 透過今天的學習，將會學習到 Nuxt3 ${theme.value} 的使用方法`,
  description: () =>
    `${title.value} - 透過今天的學習，將會學習到 Nuxt3 ${theme.value} 的使用方法`,
});

useServerSeoMeta({
  ogTitle: () => `${title.value} - Nuxt3 Day12 ${theme.value} 練習`,
  ogImage: "http://localhost:3000/share.jpg",
  ogDescription: () =>
    `${title.value} - 透過今天的學習，將會學習到 Nuxt3 ${theme.value} 的使用方法`,
  description: () =>
    `${title.value} - 透過今天的學習，將會學習到 Nuxt3 ${theme.value} 的使用方法`,
});
</script>
<template>
  <h1>Page: index</h1>
  <button type="button" @click="$router.push('/about')">about</button>
</template>
<style scoped></style>
