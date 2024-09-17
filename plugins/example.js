export default defineNuxtPlugin((nuxtApp) => {
  // 方法一 : nuxtApp.provide(輔助函式名稱,執行的輔助函式);
  // 如果只需要在插件中定義一個輔助函式，nuxtApp.provide() 更方便的方式。
  //   nuxtApp.provide(
  //     "example",
  //     (date) => `${date} | 使用 Nuxt3 plugin 功能實作全域helper`
  //   );

  // 方法二.
  // 若需要定義多個輔助函式，或想要方便管理可以使用 return 方式，將所有輔助函式放入 `provide` 物件內
  return {
    provide: {
      // 輔助函式的功能都放在 provide 物件內

      // 建立名稱為 example 的輔助函式
      example: (date) => `${date} | 使用 Nuxt3 plugin 功能實作全域 helper`,
    },
  };
});
