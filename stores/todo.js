export const useTodoStore = defineStore("todo", () => {
  const todoList = ref([]);
  const isFetch = ref(false);

  //  在伺服器端取得 todo 列表
  const getTodo = async (token) => {
    isFetch.value = true;
    try {
      await useAsyncData("getTodoList", async () => {
        const { data } = await $fetch(
          "https://todolist-api.hexschool.io/todos/",
          {
            headers: { Authorization: token },
          }
        );
        todoList.value = data;
        return data;
      });
    } catch (error) {
      console.dir(error);
    } finally {
      isFetch.value = false;
    }
  };

  // 新增待辦事項 ( 客戶端操作 )
  const addTodo = async (content, token) => {
    isFetch.value = true;
    try {
      const { newTodo } = await $fetch(
        "https://todolist-api.hexschool.io/todos/",
        {
          method: "POST",
          headers: { Authorization: token },
          body: { content },
        }
      );
      /* 
      newTodo 為新增的待辦事項 ，格式如下
      {
        "id",
        "createTime,
        "content",
        "status",
      }
      */

      // await getTodo(token);
      // 因為不應在客戶端操作 useAsyncData，所以不使用 getTodo 方法更新 todoList 資料

      // 改成使用陣列 push() 更新資料來以減少 API 請求次數
      todoList.value.push(newTodo);
    } catch (error) {
      console.dir(error);
    } finally {
      isFetch.value = false;
    }
  };

  // 刪除待辦事項 ( 客戶端操作 )
  const removeTodo = async (id, cookie) => {
    const todoIndex = todoList.value.findIndex((todo) => todo.id === id);
    isFetch.value = true;
    try {
      await $fetch(`https://todolist-api.hexschool.io/todos/${id}`, {
        method: "DELETE",
        headers: { Authorization: cookie },
      });
      todoList.value.splice(todoIndex, 1);
    } catch (error) {
      console.dir(error);
    } finally {
      isFetch.value = false;
    }
  };

  // 定義 getters
  const todoQuantity = computed(
    () => `總共有 ${todoList.value.length} 個待辦事項`
  );
  // 回傳 store 的 state, actions 和 getters ，供外部取用
  return {
    getTodo,
    todoList,
    addTodo,
    removeTodo,
    todoQuantity,
    isFetch,
  };
});
