// 第一種作法 : .use() ( 二選一 )

import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.use(Vue3ColorPicker);
// });

// 第二種作法 : .component()  ( 二選一 )
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("ColorPicker", ColorPicker);
});
/* 

*/
