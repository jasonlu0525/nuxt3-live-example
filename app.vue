<template>
  <h2>NuxtLink 基礎用法</h2>
  <ul class="list">
    <li>
      <!-- 使用 NuxtLink 導航至 首頁 頁面 ( 路徑 / ) -->
      <!-- 編譯成 : <a href="/">首頁</a>-->
      <NuxtLink to="/">首頁</NuxtLink>
    </li>
    <li>
      <!-- 使用 NuxtLink 導航至 關於 頁面  ( 路徑 /about ) -->
      <!-- 編譯成 : <a href="/about">關於</a>-->
      <NuxtLink to="/about">關於</NuxtLink>
    </li>
  </ul>

  <hr />
  <h2>NuxtLink 提供的屬性</h2>
  <ul class="list">
    <li>
      <!-- 使用 target 屬性打開新頁籤 -->
      <NuxtLink to="/about" target="_blank"
        >關於 ( 使用 <code>target="_blank"</code> )</NuxtLink
      >
    </li>
    <li>
      <!-- 使用 external 屬性在 NuxtLink 中打開外部連結 -->
      <NuxtLink to="https://www.google.com/" external
        >google ( 外部連結 )</NuxtLink
      >
    </li>
    <li>
      <!-- 加入 external 之後 replace 、activeClass 會被忽略 -->
      <NuxtLink
        to="https://www.google.com/"
        external
        replace
        activeClass="active"
      >
        google ( 外部連結；<code>replace </code>、<code>activeClass</code>
        屬性失效)
      </NuxtLink>
    </li>
  </ul>
  <hr />
  <h2>繼承自 RouterLink 的屬性</h2>
  <ul class="list">
    <li>
      <!-- 使用 to 屬性指定導航路徑 -->
      <NuxtLink to="/">首頁</NuxtLink>
    </li>
    <li>
      <!-- 使用 replace 屬性，不在瀏覽器留下新的歷史紀錄 -->
      <NuxtLink to="/about" replace>關於</NuxtLink>
    </li>
    <li>
      <!-- 使用 activeClass 屬性設定與目前路由配對的 CSS 樣式 -->
      <NuxtLink to="/contact" activeClass="active">聯絡</NuxtLink>
    </li>
  </ul>
  <hr />
  <h2>Nuxt pages 資料夾路由功能的特點，以產品頁面路由為例</h2>
  <ul class="list">
    <li>
      <NuxtLink to="/product">產品頁列表</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/product/產品id" replace>產品內頁</NuxtLink>
    </li>
  </ul>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
<script setup></script>

<style lang="scss" scoped>
.list {
  display: flex;
  gap: 2rem;
  list-style: none;
  padding: 0;
  a {
    text-decoration: none;
  }
}
.active {
  color: red;
}
</style>
