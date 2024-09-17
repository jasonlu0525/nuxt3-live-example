export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      pluginC: () => `在伺服器和客戶端均執行`,
    },
  };
});
