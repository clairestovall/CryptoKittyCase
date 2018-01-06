# CryptoKittyCase
jQuery plugin to display your cryptokitties (https://www.cryptokitties.co).

![screenshot of CryptoKittyCase](screenshot.png)

It will also display whether your cats are "fancy" or "exclusive," if appropriate. Due to API constraints, you can display up to 12 kitties at a time.

You can find your address at the top of your profile page on the CryptoKitties site.

Example:
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
  <script src="https://code.jquery.com/jquery-2.2.4.js"></script>
  <script type="text/javascript" src="https://cdn.rawgit.com/clairestovall/CryptoKittyCase/023110f5/script.js"></script>
  <link rel="stylesheet" href="https://cdn.rawgit.com/clairestovall/CryptoKittyCase/023110f5/stylesheet.css">
</head>
<body>
  <div class="cryptokitties"></div>
  <script>
    $(document).ready(function() {
      $('.cryptokitties').cryptoCase('0x519870e6cce87c4933981e91164e675a8b5a5b61');
    });
  </script>
</body>
</html>
```
