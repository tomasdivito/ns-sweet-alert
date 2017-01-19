/**********************************************************************************
* (c) 2017, Tomas.
* Licensed under the MIT license.
*
* Version 1.0.0                                                  tomasdv2@gmail.com
**********************************************************************************/
var app = require('application');
var context = app.android.context;

const SweetAlert = cn.pedant.SweetAlert;

var simpleAlert = function(args) {
  var dialog = new SweetAlert.SweetAlertDialog(context).setTitle(args);
  dialog.show();
}
exports.simpleAlert = simpleAlert;
