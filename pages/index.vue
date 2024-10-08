<script setup>
const date = ref(new Date());
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h1 class="mb-5 text-center">
          VCalendar 與 VDatePicker 元件基礎使用方法
        </h1>
        <div class="mb-3">
          <h2>VCalendar 元件</h2>
          <VCalendar />
        </div>
        <div class="mb-3">
          <h2>VDatePicker 元件</h2>
          <VDatePicker v-model="date" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
