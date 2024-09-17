export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      pluginD: () => `僅在客戶端執行 `,
    },
  };
});
