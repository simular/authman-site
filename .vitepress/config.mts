import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  appearance: 'force-dark',
  title: "Authman - Cross-Platform 2FA Made Easy",
  description: "Authman 2FA is a free, secure and open source cross-platform app to help you manage your 2-step authentication tokens on iOS, Android and desktop, and securely sync them between devices.",
  head: [
    // Links
    ['link', { rel: 'icon', href: '/assets/images/icon-128.png' }],

    // Meta
    ['meta', { name: 'google-site-verification', content: 'UZhRggks92cAVN9DSN2avqsi16IiRSdl3nSP0kS7v7A' }],

    // Scripts
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-JX9FF1GPEE' }],
    ['script', {}, `  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-JX9FF1GPEE');`],
  ],
  themeConfig: {
    logo: "/assets/images/authman-logo-h.png",
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
        url: 'https://github.com/simular/authman-app/releases/latest',
      },
      {
        title: 'Windows',
        image: 'badge-windows.png',
        url: 'https://github.com/simular/authman-app/releases/latest',
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
      copyright: 'Copyright © 2024 <a href="https://simular.co/" target="_blank">Simular Inc.</a> / Allstars Inc.'
    }
  }
});
