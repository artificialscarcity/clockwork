'use strict';

var request = require('request');

require('dotenv').load();

module.exports = function (callback, req) {

  var formData = { state: req.checkDoor.state };

  var requestUri = process.env.TICKTOCK_URI;
  requestUri += '/house/' + process.env.HOUSE_ID;
  requestUri += '/door/' + process.env.DOOR_ID + '/state';

  request.post({
    url: requestUri,
    form: formData
  }, function (err, res, body) {
    if (err) {
      callback(err);
    } else {
      var parsedBody = JSON.parse(body);
      callback(null, parsedBody);
    }
  });
};
