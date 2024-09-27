<script setup>
const router = useRouter();
const registrationFormData = ref({
  email: "",
  password: "",
  nickname: "",
});

const loginFormData = ref({
  email: "",
  password: "",
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

const signInUser = (body) => {
  isEnabled.value = true;

  $fetch("https://todolist-api.hexschool.io/users/sign_in", {
    method: "POST",
    body,
  })
    .then(({ token, exp }) => {
      // 設定 cookie，儲存 token 及其過期時間
      const cookie = useCookie("auth", {
        expires: new Date(exp * 1000),
        path: "/",
      });
      cookie.value = token;
      alert("登入成功");
      router.push("/todos");
    })
    .catch((error) => {
      const { message } = error.response._data;
      // message 有 陣列 [] 和字串 "" 兩種回應格式
      if (Array.isArray(message)) {
        alert(message.join("、"));
        return;
      }
      alert(message);
    })
    .finally(() => {
      loginFormData.value = {};
      isEnabled.value = false;
    });
};
</script>

<template>
  <div class="container py-5">
    <div class="col-md-6 mx-auto">
      <h2 class="h3 mb-4">註冊</h2>
      <form @submit.prevent="createUserAccount(registrationFormData)">
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

        <button
          class="btn btn-primary w-100"
          type="submit"
          :disabled="isEnabled"
        >
          註冊
        </button>
      </form>
    </div>
  </div>
  <div class="container py-5">
    <div class="col-md-6 mx-auto">
      <h2 class="h3 mb-4">登入</h2>
      <form @submit.prevent="signInUser(loginFormData)">
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
            v-model="loginFormData.email"
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
            v-model="loginFormData.password"
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
</template>
