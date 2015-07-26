'use strict';

var async = require('async');
var fs = require('fs');

var checkDoor = require('src/lib/check-door');
var sendState = require('src/lib/send-state');

var G_ERR = null;

async.whilst(
  function () { return (G_ERR === null); },
  async.auto({
    'checkDoor': [checkDoor],
    'sendState': [sendState]
  }, function (err, res) {
    if (err) {
      throw err;
    } else {
      console.log(res);
    }
  }),
  function (err) {
    throw err;
  }
);
