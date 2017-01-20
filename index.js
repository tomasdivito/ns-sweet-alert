/**********************************************************************************
* (c) 2017, Tomas.
* Licensed under the MIT license.
*
* Version 1.0.0                                                  tomasdv2@gmail.com
**********************************************************************************/
var app = require('application');

const SweetAlert = cn.pedant.SweetAlert;

//for context you can send app.android.context with the require('application')
var simpleAlert = function(title, context) {
  var dialog = new SweetAlert.SweetAlertDialog(context).setTitle(title);
  dialog.show();
}
exports.simpleAlert = simpleAlert;
