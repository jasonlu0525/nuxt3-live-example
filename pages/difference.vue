<script setup>
const { data } = useAsyncData("getMutipleRandomuser", async () => {
  const [firstUser, secondUser] = await Promise.all([
    $fetch("https://randomuser.me/api/"),
    $fetch("https://randomuser.me/api/"),
  ]);
  /* 
    {
      results": [
        {"gender": "female", ... }  <==== 只取出 results 陣列內的物件資料
      ],
      "info": {
        ...
      }  
    }
    */
  return [firstUser, secondUser].map((userItem) => {
    const [userInformation] = userItem.results;
    return userInformation;
  });
});
</script>

<template>
  <h1>useFetch 跟 useAsyncData 差異</h1>
  <div v-for="user in data" :key="user.login.uuid">
    <img
      :src="user.picture?.large"
      :alt="`${user.name?.first} ${user.name?.last}`"
    />
    <h1>{{ user.name?.first }} {{ user.name?.last }}</h1>
    <h3>Email: {{ user.email }}</h3>
  </div>

  <button @click="refreshNuxtData('getMutipleRandomuser')">重置資料</button>
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
