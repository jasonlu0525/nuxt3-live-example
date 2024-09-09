<script setup></script>
<template>
  <Head>
    <Title>網站標題</Title>
    <Meta name="description" content="網頁的描述" />
    <Meta name="keywords" content="關鍵詞1, 關鍵詞2" />

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

  <h1>index 頁面</h1>
  <NuxtLink to="/about">前往 about </NuxtLink>
</template>
<style scoped></style>
