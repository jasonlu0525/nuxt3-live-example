<script setup>
const router = useRouter();

const userRegistrationObject = ref({
  email: "",
  password: "",
  nickname: "",
});

const isEnabled = ref(false);

const registerAccount = async (body) => {
  isEnabled.value = true;
  try {
    await $fetch("/users/sign_up", {
      method: "POST",
      baseURL: "https://todolist-api.hexschool.io",
      body,
    });
    /* 請求成功 response 的資訊
    {
      "status": true,
      "uid": "-..."
      }
    */

    alert("註冊成功");
    router.push("/login");
  } catch (error) {
    const { message } = error.response._data;
    // message 有 陣列 [] 和字串 "" 兩種回應格式
    if (Array.isArray(message)) {
      alert(message.join("、"));
      return;
    }
    alert(message);
  } finally {
    userRegistrationObject.value = {};
    isEnabled.value = false;
  }
};
</script>

<template>
  <div class="container py-5">
    <div class="row justify-content-center gy-5">
      <div class="col-8">
        <h2 class="h3 mb-4">註冊</h2>
        <form @submit.prevent="registerAccount(userRegistrationObject)">
          <div class="mb-4">
            <label for="nickName">暱稱<span class="text-danger">*</span></label>
            <input
              type="text"
              class="form-control"
              id="nickName"
              placeholder="請輸入您的暱稱"
              required
              v-model="userRegistrationObject.nickname"
            />
          </div>
          <div class="mb-4">
            <label for="email">信箱 <span class="text-danger">*</span></label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="example@gmail.com"
              required
              v-model="userRegistrationObject.email"
            />
          </div>

          <div class="mb-4">
            <label for="password"
              >密碼 <span class="text-danger">*</span></label
            >
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="請輸入密碼"
              required
              v-model="userRegistrationObject.password"
            />
          </div>
          <div class="d-flex gap-3">
            <button
              class="btn btn-primary w-50"
              type="submit"
              :disabled="isEnabled"
            >
              註冊
            </button>
            <NuxtLink
              to="/login"
              class="btn btn-outline-primary w-50"
              :class="{ disabled: isEnabled }"
              >已經有帳號</NuxtLink
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
