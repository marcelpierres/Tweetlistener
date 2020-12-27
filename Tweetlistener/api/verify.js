// imports module
var Twit = require("twit");
var config = require("../config"); //import keys
var Promise = require("promise");
var T = new Twit(config); //Create a new Twit object that allows us to call functions

async function verify() {
  var params = {
    include_entities: false,
    skip_status: true,
    include_email: false
  };

  await T.get("account/verify_credentials", params, onAuthenticated);
}
function onAuthenticated(err, res) {
  if (err) {
    throw err;
  }

  console.log("Authentication successful. Running bot...\r\n");
}

module.exports.verify = verify;
