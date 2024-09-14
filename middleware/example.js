export default defineNuxtRouteMiddleware((to, from) => {
  // middleware 要執行的 code 寫在這邊
  console.log("about", to, from);
});
