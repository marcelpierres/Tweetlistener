// imports module
var Twit = require("twit");
var config = require("../config"); //import keys
var Promise = require("promise");
var post = require("./post");

var T = new Twit(config); //Create a new Twit object that allows us to call functions

async function mention(event) {
  var params = {
    status: "Tweeted from API TEST",
  }; // this is the param variable which will have key and value
  var screenName = "" + event.user.screen_name + "";
  if (screenName === "MarcelpierreS") {
    onCommand(event);
  } else {
    onMention(event);
  }
}

function onMention(eventMsg) {
  console.log("------Mention event------");
  var name = eventMsg.user.name;
  var screenName = eventMsg.user.screen_name;
  var tweet = "@" + screenName + "  Thank you for mentioning me  " + name;
  post.post(tweet);
}

function onCommand(eventMsg) {
  console.log("------Command event------");
  var name = eventMsg.user.name;
  var screenName = eventMsg.user.screen_name;
  var tweet = "---Command Requested---";
  post.post(tweet);
}

function onError(event) {
  console.log("Fail");
}

module.exports.mention = mention;
