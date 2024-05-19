# FAQs

## What is SRP and how does it protect my password?

The Secure Remote Password (SRP) is an authentication protocol that will never transmit your password to server, significantly reducing the risk of interception or server compromise. The benefits are that it stops different types of attacks like MITM (man-in-the-middle) attacks, doesn't need a password change if user data leaks, and lets both the user and server confirm each other's identity.


## How Authman encrypt my tokens?

Authman will create a master key to encrypt your tokens, this master key will be encrypted by a secret key, and the secret key will be encrypted by your password. The server will only store the encrypted secret key and master key, so even if server DB was leaked, the hacker cannot do anything with these keys. And every time you change your password, Authman will re-encrypt the secret key.


## How Authman encrypt keys by my password?

You will be asked to enter a master password when you sign-up. After you submit the password, the plain password will derive to a KEK (Key Encryption Key), then the password will be dropped and secret key will be encrypted by this KEK, then the secret key will be used to encrypt the master key, then the encrypted secret and master keys will send to server store. We only keep KEK in memory when app is signed-in until the screen is locked. Everytime you sign-in or unlock app, you will be asked to enter password again, and the KEK will be derived again until next sign-out or lock. If you enable the biometrics unlock feature, we will store the KEK into device secure storage, which won't be synced to iCloud or another devices.


## How Authman protects keys and tokens when syncing with server.

Authman will never transmit plain tokens data or keys to server. the 2FA tokens will be encrypted at local device and only send the encrypted data. And the secret & master keys will be encrypted by the KEK. When Authman transmits the encrypted secret & master keys, it will encrypt them again by the Pre-master Secret which is generated from SRP processing. These actions protects your tokens and keys from MITM attacks, and will never be decrypted since no one knows your password.


## What are the cipher and derive algo which Authman uses?

Authman derives your password by ARGON2, and encrypts tokens and keys by XSalsa20 authenticated cipher. This was done by the libsodium on the app side.
