// nuxt.config.ts

export default defineNuxtConfig({
  // ...其他設定
  app: {
    head: {
      viewport: "width=device-width, initial-scale=1", // 渲染出 <meta name="viewport" content="width=device-width, initial-scale=1">
      title: "全域 - Nuxt3 Day11  Global head 練習", // 渲染出 <title>全域 - Nuxt3 Day11  Global head 練習</title>
      charset: "utf-8", // 渲染出 <meta charset="UTF-8">
      meta: [
        // 渲染出 <meta name="description" content="透過今天的學習，將會學習到 Nuxt3  Global head  的設定方法">
        {
          name: "description",
          content: "透過今天的學習，將會學習到 Nuxt3  Global head  的設定方法 ",
        },
        // 渲染出 <meta property="og:title" content="Nuxt3 Day11  Global head 練習">
        { property: "og:title", content: "Nuxt3 Day11  Global head 練習" },
        { property: "og:url", content: "http://localhost:3000/" },
        {
          property: "og:description",
          content: "透過今天的學習，將會學習到 Nuxt3  Global head  的設定方法",
        },
      ],
      script: [
        // 從外部載入 lodash 套件
        // 渲染出 <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.js"></script>
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.js",
          async: true,
          defer: true,
        },
      ],
      link: [
        // 從外部載入 google 字體
        // 渲染 <link rel="preconnect" href="https://fonts.googleapis.com">
        { rel: "preconnect", href: "https://fonts.gohogleapis.com" },

        // 渲染 <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },

        // 渲染  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap" rel="stylesheet">
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap",
        },
      ],
      style: [
        // 渲染出 <style>h1{ color: red }</style>
        { children: "h1{ color: red }" },
      ],
      noscript: [
        // 渲染出 <noscript>此網頁需要支援 JavaScript 才能正確運行，請先至你的瀏覽器設定中開啟 JavaScript。</noscript>
        {
          children:
            "此網頁需要支援 JavaScript 才能正確運行，請先至你的瀏覽器設定中開啟 JavaScript。",
        },
      ],
    },
  },
});
