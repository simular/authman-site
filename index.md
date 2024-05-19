---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Authman"
  text: "Cross-Platform 2FA Made Easy"
  tagline: Authman 2FA is a free, secure and open source cross-platform app to help you manage your 2-step authentication tokens on iOS, Android and desktop, and securely sync them between devices.
  image:
    src: assets/images/home/authman-hero.png
    alt: Authman
#  actions:
#    - theme: brand
#      text: Markdown Examples
#      link: /markdown-examples
#    - theme: alt
#      text: API Examples
#      link: /api-examples

features:
  - title: Secure
    icon: 🔐
    details: Authman sign-in your account by secure remote password (SRP) protocol, your plain password will never be stored or transmitted to server.
  - title: Encryption
    icon: 🔑
    details: Authman encrypted your tokens by a key which is derived from your master password. You must provide your password when everytime you access the app. Since your password will never store in memory or server, no one can fetch your plain 2FA tokens. 
  - title: Biometrics
    icon: 👁️
    details: If you are tired to enter password every time, Authman could sign-in by Touch ID or Face ID, that can skip the tedious steps.
  - title: Cross-Platform
    icon: 📱
    details: Authman is available on iOS, Android, Windows and Mac, you just need to create an account, then you can sync your tokens between multiple devices.
  - title: Customization
    icon: 📷
    details: You can set a custom image or icon to every 2FA account. Authman provides font-awesome as built-in icon set, and you can also paste or upload your own image as account logo. 
  - title: Export / Import
    icon: 🗄️
    details: The most important is that you can export all your 2FA tokens to JSON format if you finally decided move to another app. Authman is open, just export tokens for any purpose you want.

---
