<script setup>
// Auto Imports
const router = useRouter();
</script>

<template>
  <div class="container">
    <h1>前台首頁</h1>
    <NuxtLink to="/product/">前往產品列表</NuxtLink>
  </div>
  <div class="container">
    <!-- 在換頁的同時調用 history.pushState() 將 URL /product/productA 加入到瀏覽器的歷史紀錄中  -->
    <!-- history.pushState() : https://developer.mozilla.org/en-US/docs/Web/API/History/pushState -->
    <button type="button" @click="router.push('/product/productA')">
      使用 router.push() 換頁
    </button>
    <!-- 在換頁的同時調用 history.replaceState() 將瀏覽器最後一筆的歷史紀錄修改成  /product/productB -->
    <!--history.replaceState() : https://developer.mozilla.org/zh-CN/docs/Web/API/History/replaceState -->
    <button type="button" @click="router.replace('/product/productB')">
      使用 router.replace() 換頁
    </button>
    <!-- 在換頁的同時調用 history.go() ，根據傳入的參數在瀏覽器歷史紀錄中移動，傳入 -1 移動到前一頁， 1 則移動到下一頁 -->
    <button type="button" @click="router.go(1)">使用 router.go(1) 換頁</button>
  </div>
</template>

<style scoped></style>
