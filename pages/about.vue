<script setup>
console.log("before middleware");
definePageMeta({
  middleware: ["example", "other-middleware1", "other-middleware2"],
});
console.log("after middleware");
</script>

<template>
  <h1>Page: about</h1>
</template>
