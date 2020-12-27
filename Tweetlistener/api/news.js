var config = require("../newsconfig");
var newsparser = require("../utilities/newsparser");
var Promise = require("promise");
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(config.apikey());
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
var info = [null, null];
/*function news() {
  newsapi.v2
    .everything({
      q: "samsung",
      language: "en"
    })
    .then(response => {
      //console.log(response);

      info = newsparser.newsparser(response);
      console.log(info);
    })
    .catch(err => {
      return err;
    });
}*/

async function news() {
  try {
    let val = await newsapi.v2.everything({
      q: "technology, android",
      language: "en"
    });
    info = newsparser.newsparser(val);
    return info;
  } catch (e) {
    console.log("error");
  }
}

module.exports.news = news;
