export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      // 建立名稱為 pluginA 的輔助函式
      pluginA: (message) => `${message} 的內容`,
    },
  };
});
