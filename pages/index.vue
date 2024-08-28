<script setup>
// const data = await $fetch("https://randomuser.me/api/"); // 伺服器端和客戶端各會請求一次，data 在畫面上渲染會發生 Hydration completed but contains mismatches 錯誤
// const [result] = data.results;

// 改法一.用 useFetch  來防止重複請求
const { data } = await useFetch("https://randomuser.me/api/");
const [result] = data.value.results;

// 改法二.用 useFetch 搭配 $fetch()
// const { data } = await useAsyncData("getRandomuser", () =>
//   $fetch("https://randomuser.me/api/")
// );
// const [result] = data.value.results;

// 透過點擊事件送出 $fetch 請求
const userData = ref({});

const getUserData = async () => {
  const response = await $fetch("https://randomuser.me/api/");
  userData.value = response.results[0];
};
</script>

<template>
  <img
    :src="result.picture?.large"
    :alt="`${result.name.first} ${result.name?.last}`"
  />
  <h1>{{ result.name?.first }} {{ result.name?.last }}</h1>
  <h3>Email: {{ result.email }}</h3>

  <hr />
  <template v-if="userData.name">
    <img
      :src="userData.picture?.large"
      :alt="`${userData.name?.first} ${userData.name?.last}`"
    />
    <h1>{{ userData.name?.first }} {{ userData.name?.last }}</h1>
    <h3>Email: {{ userData.email }}</h3>
  </template>

  <button type="button" @click="getUserData">取得 User 資料</button>
</template>

<style scoped>
h1,
h3 {
  margin-bottom: 1rem;
  font-weight: normal;
}

img {
  border-radius: 50%;
  border: 5px #333 solid;
  margin-bottom: 1rem;
}

.male {
  border-color: steelblue;
  background-color: steelblue;
}

.female {
  border-color: pink;
  background-color: pink;
  color: #333;
}

button {
  cursor: pointer;
  display: inline-block;
  background: #333;
  color: white;
  font-size: 18px;
  border: 0;
  padding: 1rem 1.5rem;
}

button:focus {
  outline: none;
}

button:hover {
  transform: scale(0.98);
}
</style>
