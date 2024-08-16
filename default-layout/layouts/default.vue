<script lang="ts" setup></script>

<template>
  <div class="layout">
    <header>預設模板的表頭</header>
    <slot />
    <footer>預設模板的表尾</footer>
  </div>

</template>

<style scoped>
.layout {
  padding: 50px;
  background-color: #e0ffff;
}
</style>
