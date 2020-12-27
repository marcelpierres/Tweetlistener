// imports module
var Twit = require("twit");
var config = require("../config"); //import keys
var Promise = require("promise");
var T = new Twit(config); //Create a new Twit object that allows us to call functions

async function post(info) {
  var params = {
    status: info
  }; // this is the param variable which will have key and value
  // console.log(info[1]);
  // posts the tweet
  await T.post("statuses/update", params, tweeted);
}

function tweeted(err, data, response) {
  if (err) {
    console.log("Error in post");
  } else {
    console.log("Success");
  }
} //

module.exports.post = post;
