var unirest = require('unirest');

// These code snippets use an open-source library.
unirest.get("https://webaroo-send-message-v1.p.mashape.com/sendMessage?message=Hiii &phone=9611094964")
.header("X-Mashape-Key", "Yo1NzqGM7GmshCDiSxDJIcngnoKFp1nE2hgjsnGPmEXwsQSwgM")
.end(function (result) {
  console.log(result.headers, result.body);
});