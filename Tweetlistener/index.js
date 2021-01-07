require("dotenv").config(); // gives ability to use .env files
var Promise = require("promise");
//var Subjects = require("./models/dbHelpers"); // ability to call on db helper methods
var newsparser = require("./utilities/newsparser");
var news = require("./api/news");
var post = require("./api/post");
var verify = require("./api/verify");
var mention = require("./api/mention");
var database = require("./utilities/database");
var fs = require("fs");
var Twit = require("twit");
var config = require("./config.js");
var T = new Twit(config);
verify.verify();

// when "@mpdsamuels" is in the twitter stream start the stream.on() method
var stream = T.stream("statuses/filter", {
  track: "@mpdsamuels",
  language: "en",
});

stream.on("tweet", function mentioned(event) {
  // var name = event.user.name;
  //var screenName = event.user.screen_name;
  //console.log("I was mentioned by: " + name + " " + screenName);
  mention.mention(event);
  console.log(event);
});

/*function followed(event) {
  follows.follow(event);
}
*/
// connect to fire base
//database.connect();
// verify twitter connection

//read from the log file
//var log = fs.readFileSync("log.txt", "utf-8");
//var count = parseInt(log);
//console.log("LOG DAYS: " + count);
// causes a error, constally refeashes state
/*database.getData(function(day) {
  count = day;
  console.log(count);
});*/

/* function speak() {
  news.news().then((result) => {
    post.post(result);
  });
}
*/
/*function daypost() {
  count += 1;
  var tweet = "Day " + count + " Posting from Akua's Word :)";
  post.post(tweet);
  // save to firebase
  //database.save(count);
  // write to file
  fs.writeFile("log.txt", count, err => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}
if (count == 0) {
  daypost();
}*/

//setInterval(daypost, 1000 * 60 * 60 * 24);
//setInterval(speak, 1000 * 60 * 60 * 3);
