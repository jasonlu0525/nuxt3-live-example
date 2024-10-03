<script setup>
/* ------------ */
// 建立 Cookie 的格式
const userCookie = useCookie("user", {
  // 建立名稱為 user 的 cookie
  path: "/",
  maxAge: 600,
});

// 寫入 Cookie
userCookie.value = "bearer 123456"; // 當修改 .value 時，cookie 的值會自動被更新

/* ------------ */

// 讀取 cookie
const getUserCookie = useCookie("user"); // 取得名稱為 “user” 的 cookie
console.log(getUserCookie.value); // 會取得  bearer 123456

/* ------------ */
// 建立 cookie
const cartCookie = useCookie("cart", {
  path: "/",
});
// 寫入值
cartCookie.value = "bearer abcde";

function clearCookie() {
  cartCookie.value = null;
  // 或是
  // cartCookie.value = undefined;
}
/* ------------ */
</script>

<template>
  <div class="container py-5">
    <h1>useCookie 範例</h1>

    <h2>寫入 cookie</h2>
    {{ userCookie }}
    <h2>取得 cookie</h2>
    {{ getUserCookie }}

    <h2>清除 cookie</h2>
    {{ cartCookie }}
    <br />
    <button @click="clearCookie">清除 cookie</button>
  </div>
</template>

<style scoped></style>
