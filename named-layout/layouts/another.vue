<script lang="ts" setup></script>

<template>
  <div class="another">
    <header> another 模板的表頭</header>
    <slot />
    <footer> another 模板的表尾</footer>
  </div>
</template>

<style scoped>
.another {
  padding: 50px;
  background-color: #fffacd;
}

header,
footer {
  color: red;
  font-weight: bold;
}
</style>
