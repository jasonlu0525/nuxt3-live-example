export const useCartStore = defineStore("cart", () => {
  const message = ref("/stores/Cart.js 的 store 可以被自動引入");

  return { message };
});
