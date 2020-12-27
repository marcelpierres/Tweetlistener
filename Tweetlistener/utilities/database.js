/*var firebase = require("firebase");
var token = require("../firebaseconfig");
var database;
var days;
var data;
var setday;

function connect() {
  firebase.initializeApp(token.token);
  database = firebase.database();
  days = database.ref("days");
  data = {
    count: 0
  };
}

function save(counter) {
  data = {
    count: counter
  };
  days.push(data, function(error) {
    if (error) {
      console.log("Database Error");
    } else {
      console.log("State Saved");
    }
  });
}

function getData(callback) {
  days.on(
    "value",
    function(data) {
      var counter = data.val();
      var keys = Object.keys(counter);
      var key = keys[keys.length - 1];
      var day = counter[key].count;
      setday = parseInt(day);
      //callback(setday);
    },
    function(err) {
      console.log("Error");
    }
  );
}

module.exports.connect = connect;
module.exports.save = save;
module.exports.getData = getData;
*/
