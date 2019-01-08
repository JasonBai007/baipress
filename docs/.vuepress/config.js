module.exports = {
  title: "前端开发最佳实践",
  description: "前端开发最佳实践",
  head: [
    // 这里的/就是public目录的意思，
    ["link", { rel: "icon", href: "/img/favicon.ico" }]
  ],
  base: "/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "http://luban7.top" },
      { text: "VuePress", link: "https://vuepress.vuejs.org/zh/" },
      { text: "Github", link: "https://github.com/JasonBai007" }
    ],
    sidebar: ["/", "/page-a/"]
  }
};
