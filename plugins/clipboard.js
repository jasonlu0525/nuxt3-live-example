export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("copy", {
    mounted(el) {
      // 實作點擊複製功能
      el.addEventListener("click", (e) => {
        navigator.clipboard.writeText(e.target.innerText);
        alert("成功複製內容");
      });
    },
    getSSRProps(binding) {
      // 在伺服器端執行
      // 只有接收 binding 參數
      // binding.value 是 v-copy 指令傳入的值
      // 例如 v-copy="'複製這一段文字'" 會把  '複製這一段文字' 傳遞給  binding.value
      return {
        // 寫入元素的 title 屬性
        title: binding.value,
      };
    },
  });
});
