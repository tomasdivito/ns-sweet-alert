/**********************************************************************************
* (c) 2017, Tomas.
* Licensed under the MIT license.
*
* Version 1.0.0                                                  tomasdv2@gmail.com
**********************************************************************************/
var app = require('application');

const SweetAlert = cn.pedant.SweetAlert;

/***
Expects the context and you receive a SweetAlertDialog to do something like

dialog.setTitleText("hello").setContentText("this is a sweet-message").show();
***/
var simpleAlert = function(context) {
  var dialog = new SweetAlert.SweetAlertDialog(context);
  return dialog;
}

/***
Expects the context and you receive a SweetAlert dialog error type

works exactly like simpleAlert()
***/
var errorAlert = function(context) {
  var dialog = new SweetAlert.SweetAlertDialog(context, SweetAlert.SweetAlertDialog.ERROR_TYPE);
  return dialog;
}

/***
Expects the context and you receive a SweetAlert dialog Warning Type

usage:
dialog.setTitleText("hello").setContentText("this is a sweet-message").setConfirmText("yes, delete it").show();
***/
var warningAlert = function(context) {
  var dialog = new SweetAlert.SweetAlertDialog(context, SweetAlert.SweetAlertDialog.WARNING_TYPE);
  return dialog;
}

/***
Expects the context and you receive a SweetAlert dialog success type

works exactly like simpleAlert()
***/
var successAlert = function(context) {
  var dialog = new SweetAlert.SweetAlertDialog(context, SweetAlert.SweetAlertDialog.SUCCESS_TYPE);
  return dialog;
}



exports.simpleAlert = simpleAlert;
