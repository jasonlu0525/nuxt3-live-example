<script setup></script>

<template>
  <div class="container">
    <h1>產品頁面</h1>
    <div class="product">
      <div class="product-category">
        <h2>產品列表</h2>
        <ul>
          <li>
            <NuxtLink to="/product/">全部產品</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/product/productA">productA</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/product/productB">productB</NuxtLink>
          </li>
        </ul>
      </div>
      <main class="product-list">
        <NuxtPage />
        <!-- 顯示 /product/ 下的頁面 -->
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.product {
  display: flex;
  gap: 1rem;
  &-category {
    width: 30%;
    outline: 1px solid #000;
    padding: 0 20px;
    ul {
      padding: 0;
      list-style: none;
    }
  }
  &-list {
    width: 70%;
    outline: 1px solid #000;
  }
}
</style>
