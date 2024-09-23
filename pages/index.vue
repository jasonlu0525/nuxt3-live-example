<script setup>
const pureColor = ref("green");
const gradientColor = ref(
  "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)"
);
</script>

<template>
  <div class="container">
    <h1>Nuxt3 整合 vue3-colorpicker 插件</h1>
    <ClientOnly>
      <ColorPicker
        v-model:pureColor="pureColor"
        v-model:gradientColor="gradientColor"
      />
    </ClientOnly>
  </div>
</template>

<style scoped>
.container {
  width: 1000px;
  margin: 0 auto;
}
</style>
