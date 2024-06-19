const request = require('request');

let options = {
  uri: "https://ursinus.iad1.qualtrics.com/jfe/form/SV_ekV12wvYLwvU75A",
  method: "POST",
  json: {
    "QR-QID5":"Test data from node script"
  }
}

request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(response.body)
  }
});
