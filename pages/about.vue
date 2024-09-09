<script setup>
const title = ref("網站標題");
const description = ref("網頁的描述");
const socialMediaTitle = computed(() => `${title.value} | 關於我們 `);
</script>
<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="description" />
    <Meta name="keywords" content="關鍵詞1, 關鍵詞2" />
    <Meta property="og:title" :content="socialMediaTitle" />
    <Meta name="twitter:title" :content="socialMediaTitle" />
    <NoScript
      >此網頁需要支援 JavaScript 才能正確運行，請先至你的瀏覽器設定中開啟
      JavaScript。</NoScript
    >
    <Style type="text/css"> body { background-color: #f0f0f0; } </Style>
    <Link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
  </Head>

  <h1>about 頁面</h1>
</template>
<style scoped></style>
