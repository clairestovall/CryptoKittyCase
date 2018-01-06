# CryptoKittyCase
jQuery plugin to display your cryptokitties (https://www.cryptokitties.co).

![screenshot of CryptoKittyCase](screenshot.png)

It will also display whether your cats are "fancy" or "exclusive," if appropriate. Due to API constraints, you can display up to 12 kitties at a time.

Use the following example and set your address. You can find your address at the top of your profile page on the CryptoKitties site:
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>CryptoCase</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript" src="https://cdn.rawgit.com/clairestovall/CryptoKittyCase/2c6037c4/script.js"></script>
  <link rel="stylesheet" href="https://cdn.rawgit.com/clairestovall/CryptoKittyCase/2c6037c4/stylesheet.css">
</head>
<body>
  <div id="cryptokitties"></div>
  <script>
    $(document).ready(function() {
      const MY_ADDRESS = '0x519870e6cce87c4933981e91164e675a8b5a5b61';
      $('#cryptokitties').cryptoCase(MY_ADDRESS);
    });
  </script>
</body>
</html>
```
