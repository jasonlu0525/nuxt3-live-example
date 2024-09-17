export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      pluginE: () => `僅在伺服器端執行`,
    },
  };
});
