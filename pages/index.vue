<script setup>
const { count, increment, decrement } = useCounter();

const title = ref('計數器');
</script>

<template>
  <h1>{{ title }}</h1>
  <div class="counter">
    <button type="button" @click="decrement">減少</button>
    <p>{{ count }}</p>
    <button type="button" @click="increment">增加</button>
  </div>
</template>


<style scoped>
.counter {
  display: flex;
  gap: 1rem;
}
</style>