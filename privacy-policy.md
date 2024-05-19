---
layout: doc
---

# Privacy Policy

## What is Authman

Authman 2FA is a free, secure and open source cross-platform app, release by Simular Inc., To help you manage your 2-step authentication tokens on iOS, Android and desktop, and securely sync them between devices.

## Who we are

Simular Inc. is a web design agency in Taipei, Taiwan. We develop and maintains many open-source packages, provides 
web design and development for our clients. We are experienced web development team and trying to make our software 
more secure and solid.

## Structure

Authman is a set of software contains several clients and server sides. User download and install client apps and 
sign-up there accounts, the client side will send user account data and 2FA tokens to the server, and sync between 
every device which was signed in the same accounts.

## Email Collected

The user email address is the only personal data that we collected. The user email will send to server to make a 
user account for registered users. This email will also use for following purpose:

- Send important system update notification. (Currently not implemented)
- The password reset verification gateway. (Currently not implemented)
- The sign-up activation gateway. (Currently not implemented)

We reserve the possibility of using email addresses for marketing purposes, such as promoting paid plans 
or our new products, to help us fund the maintenance of the Authman App. If this approach is adopted in the future, 
users will have the right to unsubscribe from related advertise.

## The Device Functions

- Camera access is only used for scanning QR codes.
- Secure storage is only used for store encryption key if biometrics unlock enabled.
- Touch ID / Face ID is only used to unlock app.

## Password and Key Handling

Authman will never transmit plain keys, tokens data or user password to server. Authman use SRP (Secure remote password)
protocol to sign-in and authenticate user, your plain password will never be stored or transmitted to server.
The 2FA tokens will be encrypted at local device and only send the encrypted data.

## Data Export / Import

You have your Data Autonomy, you can export your 2FA tokens, or import tokens from another Authman account.
Authman can export your all tokens to JSON file in one-click, and you could backup this file to your own storage reguarly. 

## Account Deletion

If you no-longer want to use Authman, you can simply remove yor account and tokens by one-click at options page in app.

## Amendments

The privacy policy of this app will be revised at any time in response to needs, and the revised terms will be posted
on this website.

## Contact Us. 

If you have any questions about this privacy policy, or if you would like to make a request to change 
or remove personal information, please contact to this email: simon@simular.co or open an issue on [GitHub](https://github.com/simular/authman-app).
