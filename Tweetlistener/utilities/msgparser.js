
// parses the command
function parse(msg) {
 msg = msg.toLowerCase();
 // splic the messge to a array
 var command = msg.split(' ').filter(w => w !== '');
 // make sure the name request is @mpdsamuels
 var name = ""+command[0]+"";
 // the specific command
 var dec = ""+command[1]+"";

 if (name === "@mpdsamuels"){
     // checks to make sure the length of command is 3
    if (command.length == 3){
        return command;
    }
 }
 return command;
}

module.exports.parse = parse;
