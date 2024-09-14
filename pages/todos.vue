<script setup>
definePageMeta({
  middleware: async () => {
    const nuxtApp = useNuxtApp();
    if (
      import.meta.client &&
      nuxtApp.isHydrating &&
      nuxtApp.payload.serverRendered
    ) {
      return;
    }

    // 檢查 token 是否有值
    const token = useCookie("auth");
    if (!token.value) return navigateTo("/login")

    const userInfo = await $fetch(
      "https://todolist-api.hexschool.io/users/checkout",
      {
        method: "GET",
        headers: {
          Authorization: token.value,
        },
      }
    ).catch(() => {
      return null;
    });
    console.log("userInfo", userInfo, userInfo?.status !== undefined);

    if (userInfo?.status !== undefined) {
      // 驗證成功，終止函式執行
      return;
    }
    console.log("isLoggedIn", userInfo);

    // 驗證失敗，導引回登入頁面
    // 在伺服器端和客戶端操作路由
    return navigateTo("/login");
  },
});
</script>

<template>
  <h1>Page: todos</h1>
</template>
