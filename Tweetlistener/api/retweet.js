// imports module
var Twit = require("twit");
var config = require("../config"); //import keys
var Promise = require("promise");
var randnum = require("../utilities/randnum");
var T = new Twit(config); //Create a new Twit object that allows us to call functions

async function retweet() {
  var params = {
    q: "#tech, #science",
    result_type: "recent"
  }; // this is the param variable which will have key and value

  // searches for a tweet containing Params
  await T.get("search/tweets", params, searchedData);
}
async function searchedData(err, data, response) {
  var i = randnum.randnum(data.statuses);
  var tweet_id = data.statuses[i].id_str;
  await T.get("statuses/retweet/:id", { id: tweet_id }, onRetweet);
}
function onRetweet(err, response) {
  if (response) {
    console.log("Retweeted!!!");
  }
  // if there was an error while tweeting
  if (err) {
    console.log("Error");
  }
}
