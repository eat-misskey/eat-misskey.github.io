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
      {
        text: 'Overview',
        items: [
          { text: 'Sharkey/Misskey 食用指南', link: '/' },
          { text: '为什么要选择Fediverse？', link: '/docs/why-fediverse' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/eat-misskey/eat-misskey.github.io/' }
    ],

    outline: "deep"
  },
  
  markdown: {
    linkify: true,
    breaks: true,
  }
})
