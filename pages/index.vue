<script setup>
const onSubmit = (value, { resetForm }) => {
  console.log("表單提交的值", value);

  // 可以從第二個參數取出 resetForm 方法來重置表單
  resetForm();
};

const tag = ref("div");
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <h1 class="mb-3">VeeValidate 元件結構與使用方法</h1>
        <!-- @submit 事件不需加入 .prevent 修飾符 修飾符  -->
        <VForm v-slot="{ errors, meta, resetForm }" @submit="onSubmit">
          <div class="mb-3">
            <label class="form-label" for="username">使用者名稱</label>
            <!-- 不需要在 VField 綁定 v-model，表單提交時會自動將值傳遞給 submit 函式 -->
            <!-- 欄位的名稱為 username ，驗證失敗時會對應到此名稱，把錯誤訊息寫入 errors.username  -->
            <VField
              id="username"
              name="username"
              class="form-control"
              :class="{ 'is-invalid': errors['username'] }"
              type="text"
              rules="required|username"
            />
            <!-- name 屬性的值必需與 VField 元件 name 屬性的值 ( username ) 一致 -->
            <VErrorMessage class="invalid-feedback" name="username" />
          </div>
          <div class="mb-3">
            <label class="form-label" for="userDescription">使用者簡介</label>
            <!-- 透過 as="textarea" 指定渲染成 <textarea> 元素 -->
            <VField
              id="userDescription"
              name="userDescription"
              class="form-control"
              :class="{ 'is-invalid': errors['userDescription'] }"
              placeholder="請輸入您的簡短自我介紹"
              rules="required"
              as="textarea"
            />
            <!-- name 屬性的值必需與 VField 元件 name 屬性的值 ( userDescription ) 一致 -->
            <VErrorMessage class="invalid-feedback" name="userDescription" />
          </div>

          <!-- 使用 v-slot 取出的 resetForm 方法重置表單 -->
          <button
            class="btn btn-outline-warning me-3"
            type="button"
            @click="resetForm"
          >
            重新選擇
          </button>
          <!-- :disabled 屬性綁定從 v-slot 取出的 meta.valid ，檢查欄位的驗證是否有錯誤 -->
          <button class="btn btn-primary" type="submit" :disabled="!meta.valid">
            送出
          </button>
        </VForm>
      </div>
    </div>
  </div>
</template>
