export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      // 建立名稱為 pluginB 的輔助函式
      pluginB: (message) => `${message} 的內容`,
    },
  };
});
