export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("focus", {
    mounted(el) {
      el.focus();
    },
    updated(el) {
      console.log(el.value);
    },
    getSSRProps(binding) {
      console.log(binding);
      // { dir: { mounted: [Function: mounted], getSSRProps: [Function: getSSRProps] },
      // instance: {},
      // value: undefined,
      // oldValue: undefined,
      // arg: undefined,
      // modifiers: {} }
      return {
        id: "abc",
      };
    },
  });
});
