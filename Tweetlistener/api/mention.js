// imports module
var Twit = require("twit");
var config = require("../config"); //import keys
var Promise = require("promise");
var parser = require("../utilities/msgparser");
var post = require("./post");
var Subjects = require("../models/dbHelpers"); // ability to call on db helper methods
var T = new Twit(config); //Create a new Twit object that allows us to call functions

async function mention(event) {
  var params = {
    status: "Tweeted from API TEST",
  }; // this is the param variable which will have key and value
  var message = event.text; // takes in the message
  var cmd = parser.parse(message);
  var screenName = "" + event.user.screen_name + "";
  if (screenName === "MarcelpierreS") {
    onAdminCommand(event,cmd);
  }  else{
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

function onAdminCommand(eventMsg,cmd) {
  console.log("------Admin Command event------");
  var tweet = "---Command Requested---";
  var name = eventMsg.user.name;
  var screenName = eventMsg.user.screen_name;
  if (cmd.length == 3){

  var request = ""+cmd[1]+"";
  var categ = ""+cmd[2]+"";

  if (request === "show"){
    var obj = JSON.parse('{"name":'+'"'+categ+'"'+'}')
    Subjects.add(obj);
    var tweet = "Now Showing "+categ;
  }
}
  post.post(tweet);
}

function onCommand(eventMsg, cmd) {
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
