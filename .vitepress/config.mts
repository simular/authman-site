import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  appearance: 'force-dark',
  title: "Authman",
  description: "A Cross-Platform Personal 2FA App",
  themeConfig: {
    logo: "assets/images/authman-logo-h.png",
    siteTitle: false,

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'FAQs', link: '/faqs' },
    ],

    downloads: [
      {
        title: 'iOS',
        image: 'badge-ios.png',
        url: '#',
      },
      {
        title: 'Android',
        image: 'badge-google-play.png',
        url: '#',
      },
      {
        title: 'macOS',
        image: 'badge-macos.png',
        url: '#',
      },
      {
        title: 'Windows',
        image: 'badge-microsoft.png',
        url: '#',
      },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
