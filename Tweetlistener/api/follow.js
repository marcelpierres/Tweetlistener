// imports module
var Twit = require("twit");
var config = require("../config"); //import keys
var Promise = require("promise");
var post = require("./post");

var T = new Twit(config); //Create a new Twit object that allows us to call functions

async function follow(event) {
  var params = {
    status: "Tweeted from API TEST",
  }; // this is the param variable which will have key and value

  onFollowed(event);
}
function onFollowed(eventMsg) {
  console.log("------Follow event------");
  var name = eventMsg.user.name;
  var screenName = eventMsg.user.screen_name;
  var tweet = "@" + screenName + "  Thank you for mentioning me  " + name;
  post.post(tweet);
}

function onError(event) {
  console.log("Fail");
}

module.exports.follow = follow;
