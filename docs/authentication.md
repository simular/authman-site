---
layout: doc
---

# Authentication

## Sign Up

When you first open Authman, you may not have account yet, click `Create an account`
and go to sign up page:

<img width="355" alt="signup" src="https://github.com/simular/authman-app/assets/1639206/aaf3d291-dad0-4c7e-b672-36f9bda2e9ee">

Enter you email and password to sign-up, currently we won't send verify email to user, so make sure you enter correct personal email and use a strong password to protect your account.

<img width="351" alt="account" src="https://github.com/simular/authman-app/assets/1639206/7e76111f-d2ea-4348-8587-52a988e6d019">

After signed-up, you will auto login to Authman, please check [Token Managements](./token-managements.html)
 to see how to create your first token.

## Sign In

If you sign-out of Authman, or install on a new device, you must re-login to Authman. Just fill your email and password to sign-in.

<img width="336" alt="signin" src="https://github.com/simular/authman-app/assets/1639206/9247648d-7705-4ab0-a6d4-fb795fdeb4d9">

Note, Authman use your password to encrypt & decrypt your all tokens, if you forgot your password, currently it is no way to take your 2FA tokens back. Please see [FAQ](/faqs.html) to know how we protect your key and data.

## Screen Lock

Authman will auto lock your app if user has no any actions over 5 minutes.

<img width="375" alt="lock" src="https://github.com/simular/authman-app/assets/1639206/cf1d2433-08f9-42e4-8f1b-1f4edad39e44">

All decrypted tokens will release when app lock, you must provide your password to unlock, since we use your password to encrypt tokens, the password is necessary to re-decrypt tokens after unlock.

### Touch ID & Face ID

If you are tired to enter password to unlock every time, you can enable the Biometrics unlock mode. Go to **Options** and enable the Biometrics toggler. Authman will ask your password again and save the [KEK](/faqs.html#how-authman-encrypt-keys-by-my-password) (which is derived from your password.) in device secure storage. Next time you can unlock device by Touch ID or Face ID and without entering password.

<img width="379" alt="bio" src="https://github.com/simular/authman-app/assets/1639206/be59a633-31c8-4f2f-bd72-0be0dfb5cdcd">

> [!IMPORTANT]
> Authman will never store your password.

## Change Password

You could go to **Options > Change Password** to change your current password.

<img width="380" alt="change-password" src="https://github.com/simular/authman-app/assets/1639206/45875a8c-58e0-4269-862c-782990564abf">

You must provide your old password to unlock secret keys first, that you can enter new password to re-encrypt secret keys by your new password.

See also: [How Authman encrypt keys by my password?](/faqs.html#how-authman-encrypt-keys-by-my-password)

> [!IMPORTANT]
> If you forgot your current password, currently there is no any way to reset it.
> We are considering to provide a recover code or account clear options in the future.

## Sign-out from All Devices

Currently, Authman didn't log all your sign-in devices, so we don't provide a device managements.

If you missing you phone or you want to clear all sessions of your account, just go to **Options > My Account** and click the `Sign-Out from All My Devices`, Authman will make all API tokens expired. After this action, you must re-login again of current device.

<img width="379" alt="sign-out all" src="https://github.com/simular/authman-app/assets/1639206/bd1b6849-9ee7-4ace-8e7c-87a6b98c4a3c">

## Delete Account

If you no-longer want to use Authman, just go to **Options > My Account** and click the `Delete My Account` option.

<img width="385" alt="del account" src="https://github.com/simular/authman-app/assets/1639206/c0da42ec-aeaf-4e7b-954e-3fb76b102d8c">


Authman will delte you account and all tokens with no any backup, note this action cannot undo. 
