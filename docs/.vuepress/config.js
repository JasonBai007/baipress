module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "page-a", link: "https://www.github.com/codeteenager" }
    ],
    sidebar: ["/", "/page-a/"]
  }
};
