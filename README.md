# ns-sweet-alert
an implementation of sweet alert dialog for nativescript

Fill in a little about your plugin!

## License
This plugin is licensed under the MITlicense by Tomas

## Current State
For now you can do not so many things but i will be adding new stuff in the next days.

Still not thinking into making this for iOS for now.

## Installation
To install type

```
tns plugin add ns-sweet-alert
```

## Usages

Once added into the project
In your main-page.js like file do something like this

``` js
var app = require('application');
var SweetAlert = require('com.nativescript.alert-sweet-ns');

var alertNice = function() {
  SweetAlert.simpleAlert("Hey this is a pretty alert for NS!", app.android.foregroundActivity);
}
exports.push = push;
```

And that's it!

Enjoy it.
