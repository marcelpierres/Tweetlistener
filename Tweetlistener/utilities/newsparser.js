var Promise = require("promise");
var randnum = require("../utilities/randnum");

module.exports.newsparser = function(data) {
  var i = randnum.randnum(data.articles);
  var title = data.articles[i].title;
  var url = data.articles[i].url;
  var info = [title, url];
  return info;
};
