# ns-sweet-alert
an implementation of sweet alert dialog for nativescript

Fill in a little about your plugin!

## License
This plugin is licensed under the MITlicense by Tomas

## Based on
Android: sweet-alert-dialog by @pedant
iOS: (wip) SweetAlert-iOS by @codestergit

## Current State
For now you can do not so many things but i will be adding new stuff in the next days.


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
var SweetAlert = require('ns-sweet-alert');

var alertNice = function() {
  SweetAlert.simpleAlert(app.android.foregroundActivity).setTitleText("hey!").setContentText("this is a sweetmessage");
}

var inError = function(args) {
  SweetAlert.errorAlert(app.android.foregroundActivity).setTitleText("Oops!").setContentText(args);
}

exports.alertNice = alertNice;
exports.inError = inError;
```

## Current Types

``` js
simpleAlert(context)
errorAlert(context)
warningAlert(context)
successAlert(context)

//you can use various methods with the dialog result
.setTitleText
.setContentText
.setConfirmText
```

I will be continue adding more things, like iOS support sometime this week!

And that's it!

Enjoy it.
