import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Misskey 食用指南",
  description: "Misskey 和它的分支们的食用指南",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   // items: [
      //   //   { text: 'Markdown Examples', link: '/markdown-examples' },
      //   //   { text: 'Runtime API Examples', link: '/api-examples' }
      //   // ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    outline: "deep"
  },
  
  markdown: {
    linkify: true,
    breaks: true,
  }
})
