import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  appearance: 'force-dark',
  title: "Authman",
  description: "Cross-Platform 2FA Made Easy",
  head: [
    ['link', { rel: 'icon', href: 'assets/images/icon.png' }]
  ],
  themeConfig: {
    logo: "assets/images/authman-logo-h.png",
    siteTitle: false,

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      { text: 'FAQs', link: '/faqs' },
      { text: 'Privacy Policy', link: '/privacy-policy' },
    ],

    downloads: [
      {
        title: 'iOS',
        image: 'badge-ios.png',
        url: 'https://apps.apple.com/us/app/authman-2fa/id6502499482',
      },
      {
        title: 'Android',
        image: 'badge-google-play.png',
        url: 'https://play.google.com/store/apps/details?id=io.authman',
      },
      {
        title: 'macOS',
        image: 'badge-macos.png',
        url: 'https://github.com/simular/authman-app/releases',
      },
      {
        title: 'Windows',
        image: 'badge-windows.png',
        url: 'https://github.com/simular/authman-app/releases',
      },
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // },
      {
        text: 'FAQs',
        link: '/faqs',
      },
      {
        text: 'Privacy Policy',
        link: '/privacy-policy',
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/simular/authman-app' }
    ],

    footer: {
      message: 'Released under the GPL-3.0 License.',
      copyright: 'Copyright © 2024 <a href="https://simular.co/" target="_blank">Simular Inc.</a>'
    }
  }
});
