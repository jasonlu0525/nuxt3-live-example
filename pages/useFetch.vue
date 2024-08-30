<script setup>
// =======================
// 2 用 transform 函式修改 handler 請求的結果

const { data: userTransformData } = await useFetch(
  "https://randomuser.me/api/",
  {
    transform: (response) => {
      // 修改 response 的結果，取出並回傳物件結構
      const [resultObject] = response.results;
      console.log(resultObject);

      return resultObject;
    },
  }
);

// =======================

// =======================
// 3. 用 pick 參數從 handler 函式回傳的資料中，取出物件屬性值 info 的資料

const { data: userPickData } = await useFetch("https://randomuser.me/api/", {
  query: {
    seed: "be579ffd62ede3ce",
  },
  pick: ["info"],
});
// =======================
</script>

<template>
  <h1>使用 useFetch 寫法</h1>
  <hr />

  <h2>用 transform 函式修改 handler 請求的結果</h2>
  <img
    :src="userTransformData.picture?.large"
    :alt="`${userTransformData.name?.first} ${userTransformData.name?.last}`"
  />
  <h1>
    {{ userTransformData.name?.first }} {{ userTransformData.name?.last }}
  </h1>
  <h3>Email: {{ userTransformData.email }}</h3>

  <hr />
  <h2>用 pick 從 handler 函式回傳的資料中，取出物件中指定屬性值的資料</h2>
  <pre>
    {{ userPickData }}
  </pre>
  <!-- 
  userPickData 結果會是:
  {
    "info": {
      "seed": "be579ffd62ede3ce",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  } -->
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
