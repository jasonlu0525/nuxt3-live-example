<script setup>
const userLoginObject = ref({
  email: "",
  password: "",
});

const isEnabled = ref(false);

const loginAccount = async (body) => {
  isEnabled.value = true;
  try {
    const { token, exp, nickname } = await $fetch("/users/sign_in", {
      method: "POST",
      baseURL: "https://todolist-api.hexschool.io",
      body,
    });
    // 設定 cookie，儲存 token 及其過期時間
    const cookie = useCookie("auth", {
      expires: new Date(exp * 1000),
      path: "/",
    });
    cookie.value = token;
    alert("登入成功");
  } catch (error) {
    console.dir(error);
    const { message } = error.response._data;
    // message 有 陣列 [] 和字串 "" 兩種回應格式
    if (Array.isArray(message)) {
      alert(message.join("、"));
      return;
    }
    alert(message);
  } finally {
    userLoginObject.value = {};
    isEnabled.value = false;
  }
};
</script>

<template>
  <div class="container py-5">
    <div class="row justify-content-center gy-5">
      <div class="col-6">
        <h2 class="h3 mb-4">登入</h2>
        <form @submit.prevent="loginAccount(userLoginObject)">
          <div class="mb-4">
            <label for="loginemail"
              >信箱 <span class="text-danger">*</span></label
            >
            <input
              type="email"
              class="form-control"
              id="loginemail"
              placeholder="example@gmail.com"
              required
              v-model="userLoginObject.email"
            />
          </div>

          <div class="mb-4">
            <label for="loginpassword"
              >密碼 <span class="text-danger">*</span></label
            >
            <input
              type="password"
              class="form-control"
              id="loginpassword"
              placeholder="請輸入密碼"
              required
              v-model="userLoginObject.password"
            />
          </div>
          <button
            class="btn btn-secondary w-100"
            :disabled="isEnabled"
            type="submit"
          >
            登入
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
