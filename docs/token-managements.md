---
layout: doc
---

# Token Managements

## Create A New Token

Click `New` on the header bar:

<img width="383" alt="header" src="https://github.com/simular/authman-app/assets/1639206/f6ca29df-fbd1-44f5-b19d-9547c3b92fbc">

You may enter the TOTP secret or just scan QRCode by click the `Scan QRcode` button:

<img width="346" alt="qrcode" src="https://github.com/simular/authman-app/assets/1639206/c05f38b0-4563-4239-bd5d-4b6bea8d888e">

After secret and title filled, click `Next` to configure the token icon:

<img width="361" alt="icon" src="https://github.com/simular/authman-app/assets/1639206/cec80802-5906-425c-aa5c-63821aab1ebc">

You can search icon from font-awesome, and set the color from color options. You can also upload the logo you prepared or just copy / paste from browser.

> [!NOTE]
> All images will convert to a small png file.

After you select the icon you want, click the `Create` button, now you have your first 2FA token:

<img width="372" alt="token" src="https://github.com/simular/authman-app/assets/1639206/abad810b-606c-426d-9660-d6be2979bafd">

Click the number will copy it to clipboard.

## Show Backup QRcode

Someone will like to backup their 2FA tokens when everytime they setup a new 2FA token to another 2FA app.

<img width="383" alt="menu" src="https://github.com/simular/authman-app/assets/1639206/3942bb57-614f-432a-bf45-e93b5d64ade8">

Authman provides a function to show QRCode for backup usage, just click the dots on token right-bottom side of token modal, and click `Show QRcode`, Authman will display a QRCode image for this token, you can use another app or device to scan it. 

<img width="368" alt="qrcode" src="https://github.com/simular/authman-app/assets/1639206/6bbdc458-6be4-4032-a864-0849e83775a0">

## Delete Tokens

To delete one token, you may simply click the dots and select the `Delete` option.

<img width="383" alt="menu" src="https://github.com/simular/authman-app/assets/1639206/3942bb57-614f-432a-bf45-e93b5d64ade8">

To delete multiple tokens, click the `Edit` button on app header, and checked the tokens you want to delete, then click the `Delete` button on app header:

<img width="384" alt="delete multiple" src="https://github.com/simular/authman-app/assets/1639206/ebef238a-e1fa-4205-996a-6de940fce19c">

## Export Tokens

If you want to export your tokens for backup usage or transfer to another app, just go to **Options > My Account** and click `Export` option.

![export](https://github.com/simular/authman-app/assets/1639206/336b4862-9a72-44d2-8040-5408ac44d643)

Authman will ask your password again and download all decrypted tokens as a JSON file, you can choose a directory to save it.

## Import Tokens

If you have an Authman exported JSON file, you can import it to another Authman account, or use it to recover your tokens.

Go to **Options > My Account** and click `Import` option, then choose the json file.

![import](https://github.com/simular/authman-app/assets/1639206/11503c25-f798-4257-84a7-62a96689e2c5)

> [!NOTE]
> Currently, Authman only supports import file which is exported from Authman, we are considering add the way to import from other 2FA apps in the future.


