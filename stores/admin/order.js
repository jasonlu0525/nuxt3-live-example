export const useOrderStore = defineStore("order", () => {
  const message = ref(
    "stores/admin/Order.js 的 store 不會被自動引入，需要至nuxt.config.ts 設定  pinia.toresDirs "
  );
  return { message };
});
