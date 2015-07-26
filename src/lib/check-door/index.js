'use strict';

var gpio = require('pi-gpio');

var CONTACT_PIN = process.env.DOOR_READ_PIN;

module.exports = function (callback, req) {
  gpio.read(CONTACT_PIN, function (err, state) {
    if (err) throw err;
    callback(state);
  });
};
