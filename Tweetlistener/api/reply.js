var Twit = require("twit");
var config = require("../config"); //import keys
var post = require("./post");
var Promise = require("promise");

var T = new Twit(config);
reply();
async function reply() {
  let stream = await T.stream("user");

  stream.on("tweet", tweetEvent);
  stream.on("error", onError);
}
function tweetEvent(eventMsg) {
  console.log("Reply event");
  var replyto = eventMsg.in_reply_to_screen_name;
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  if (replyto === "mpdsamuels") {
    var tweet = "@" + screenName + " Thank you for noticing me!";
    post.post(tweet);
  }
}

function onError(event) {
  console.log(event);
}

module.exports.reply = reply;
