module.exports = {
  title: "前端开发指南",
  description: "前端开发指南",
  head: [
    // 这里的/就是public目录的意思，
    ["link", { rel: "icon", href: "/img/favicon.ico" }]
  ],
  base: "/baipress/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guides", items: [{ text: "coding", link: "/coding/js" }, { text: "tools", link: "/tools/" }, { text: "philosophy", link: "/philosophy/" }] },
      { text: "About", link: "http://lubanseven.gitee.io/luban7/" },
      { text: "VuePress", link: "https://vuepress.vuejs.org/zh/" },
      { text: "Github", link: "https://github.com/JasonBai007" }
    ],
    sidebar: [
      {
        title: "编码风格指南", // 侧边栏名称
        children: [
          ["/coding/js", "JS"], // 你的md文件地址
          ["/coding/readm", "README"] // 你的md文件地址
        ]
      },
      ["/tools/", "开发工具指导"],
      ["/philosophy/", "技术不是一切"]
    ],
    lastUpdated: "Last Updated"
  },
  plugins: ["@vuepress/back-to-top"]
};
