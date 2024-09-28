<script setup>
definePageMeta({
  middleware: async () => {
    // 檢查 token 是否有值
    const cookie = useCookie("auth");
    if (!cookie.value) return navigateTo("/");

    const { error } = await useFetch(
      "https://todolist-api.hexschool.io/users/checkout",
      {
        headers: { Authorization: cookie.value },
      }
    );

    if (error.value) return navigateTo("/");
  },
});
const cookie = useCookie("auth");

// 取得 stores/todo.js 定義的 useTodoStore
const todoStore = useTodoStore();
// 方法 可以直接解構
const { getTodo, addTodo, removeTodo } = todoStore;

// 資料 和 computed 具有響應性，需經過 storeToRefs 解構
const { isFetch, todoList, todoQuantity } = storeToRefs(todoStore);

// 在伺服器端請求資料，傳遞給客戶端。
await useAsyncData("todos", () => getTodo(cookie.value).then(() => true));

const newTodo = ref("");

// 點擊後，透過 todoStore 的 addTodo 方法將新增代辦事項
const addNewTodo = () => {
  if (newTodo.value) {
    addTodo(newTodo.value, cookie.value);
    newTodo.value = "";
  }
};

// 移除 Todo
const deleteTodo = (id) => {
  removeTodo(id, cookie.value);
};
</script>
<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <h1 class="text-center mb-4">Todo List</h1>
        <div class="input-group mb-3">
          <input
            v-model.trim="newTodo"
            class="form-control"
            placeholder="新增待辦事項"
          />
          <button
            @click="addNewTodo"
            class="btn btn-primary"
            :disabled="!newTodo.length || isFetch"
          >
            新增 Todo
          </button>
        </div>
        <ul class="list-group">
          <li
            v-for="todo in todoList"
            :key="todo.id"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              {{ todo.content }}
            </span>
            <button
              class="btn btn-danger btn-sm"
              @click="deleteTodo(todo.id)"
              :disabled="isFetch"
            >
              刪除
            </button>
          </li>
        </ul>
        <p class="mt-3">{{ todoQuantity }}</p>
      </div>
    </div>
  </div>
</template>
