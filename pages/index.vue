<script setup>
const text = ref("123@gmail.com");
</script>

<template>
  <h1>在元素上加入自訂義指令</h1>
  <h2>v-focus 指令</h2>
  <label for="email">
    Email
    <input type="text" id="email" v-model="text" v-focus />
  </label>

  <h2>v-copy 指令</h2>
  <p v-copy="'複製這一段文字'">請透過點擊複製這一段文字</p>
</template>
