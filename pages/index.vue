<script setup>
console.log("before middleware");
definePageMeta({
  middleware: (to, from) => {
    // middleware 屬性是函式
    console.log("index=>", { to, from });
  },
});
console.log("after middleware");
</script>

<template>
  <h1>Page: index</h1>
</template>
