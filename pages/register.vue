<script setup>
const router = useRouter();

// Nuxt3 Auto-imports 機制有將 ref() 自動引入，不需另外 import { ref } from 'vue';
const registrationFormData = ref({
  email: "",
  password: "",
  nickname: "",
});

const isEnabled = ref(false);

const createUserAccount = (body) => {
  isEnabled.value = true;

  $fetch("https://todolist-api.hexschool.io/users/sign_up", {
    method: "POST",
    body,
  })
    .then(() => {
      alert("註冊成功");
      router.push("/login");
    })
    .catch((error) => {
      const { message } = error.response._data;
      // message 有陣列 [] 和字串 "" 兩種回應格式
      if (Array.isArray(message)) {
        alert(message.join("、"));
        return;
      }
      alert(message);
    })
    .finally(() => {
      registrationFormData.value = {}; // 清空註冊表單
      isEnabled.value = false; // 解鎖按鈕
    });
};
</script>

<template>
  <div class="container py-5">
    <div class="col-8 mx-auto">
      <h2 class="h3 mb-4">註冊</h2>

      <div class="mb-4">
        <label for="nickName">暱稱<span class="text-danger">*</span></label>
        <input
          type="text"
          class="form-control"
          id="nickName"
          placeholder="請輸入您的暱稱"
          required
          v-model="registrationFormData.nickname"
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
          v-model="registrationFormData.email"
        />
      </div>

      <div class="mb-4">
        <label for="password">密碼 <span class="text-danger">*</span></label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="請輸入密碼"
          required
          v-model="registrationFormData.password"
        />
      </div>
      <div class="d-flex gap-3">
        <button
          class="btn btn-primary w-50"
          type="button"
          @click="createUserAccount(registrationFormData)"
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
    </div>
  </div>
</template>
