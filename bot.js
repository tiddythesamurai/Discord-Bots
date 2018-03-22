const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
//const rep = require('./reputation.json');
const fs = require("fs");
var chance = 0;

function random(min, max){

    chance =  Math.ceil(Math.random() * max) + min + 1;
    return chance;

}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.username} with id of ${client.user.id}`);
  client.user.setPresence({ game: { name: 'MEMES' }, status: 'online' })
  .catch(console.error);
  /*client.user.setAvatar('./avatar.png')
  .catch(console.error);*/
});

client.on("message", (message) => {

    
    const author = message.author.username;
    if (message.content.toLowerCase() === "ur mom gay"){

        message.channel.send("ur dad lesbian");


    }else if(message.content.toLowerCase() === "ur dad lesbian" && !message.author.bot){

        message.channel.send("ur granny tranny");

    }else if (message.content.toLowerCase() === "ur granny tranny" && !message.author.bot){

        message.channel.send("ur grandpap a trap");

    }else if (message.content.toLowerCase() === "ur grandpap a trap" && !message.author.bot){

        message.channel.send("ur family tree lgbt");

    }else if (message.content.toLowerCase() === "ur family tree lgbt" && !message.author.bot){

        message.channel.send("no u");

    }else if(message.content.toLowerCase() === "no u" && !message.author.bot){

        message.channel.send("AAAAAAAAAAAAAAAAAAAAAAAA");

    }else if (message.content.toLowerCase() === "diagnosis plz" && !message.author.bot){

        switch(random(0, 100)){
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
                message.channel.send("I diagnose you, @" + message.author.username + " with gay.");
                console.log(`${message.author.username} requested a diagnosis in the ${message.channel.name} channel`);
                break;
            case 26:
            case 27:
            case 28:
            case 29:
            case 30:
            case 31:
            case 32:
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:
            case 47:
            case 48:
            case 49:
            case 50:
                message.channel.send("I diagnose you, @" + message.author.username + " with ded.");
                console.log(`${message.author.username} requested a diagnosis in the ${message.channel.name} channel`);
                break;
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
            case 58:
            case 59:
            case 60:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
                message.channel.send("I diagnose you with, @" + message.author.username + " Hepatitis B and a side of cancer");
                console.log(`${message.author.username} requested a diagnosis in the ${message.channel.name} channel`);
                break;
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
            case 86:
            case 87:
            case 89:
            case 90:
            case 91:
            case 92:
            case 93:
            case 94:
            case 95:
            case 96:
            case 97:
            case 98:
            case 99:
            case 100:
                message.channel.send("I diagnose you with, @" + message.author.username + " the thousand year gay.");
                console.log(`${message.author.username} requested a diagnosis in the ${message.channel.name} channel`);
                break;
        }

    }
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);

        
        switch(args[0].toLowerCase()){

        case 'ping':

            message.channel.send("pong!");
            break;

        case 'meme':

            switch(random(0, 100)){

                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                message.channel.send("Here's a meme @" + message.author.username, {

                        file: config.path + "\\Dank Memes\\Meme5.JPG"

                    });
                console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);
                    break;
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                message.channel.send("Here's a meme @" + message.author.username, {

                        file: config.path + "\\Dank Memes\\Meme8.JPG"

                    });
                    console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);
                    break;
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                message.channel.send("Here's a meme @" + message.author.username, {

                        file: config.path + "\\Dank Memes\\Meme1.JPG"

                    });
                console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);
                    break;
                case 31:
                case 32:
                case 33:
                case 34:
                case 35:
                case 36:
                case 37:
                case 38:
                case 39:
                case 40:
                message.channel.send("Here's a meme @" + message.author.username, {

                        file: config.path + "\\Dank Memes\\Meme2.JPG"

                    });
                 console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);
                    break;
                case 41:
                case 42:                
                case 43:
                case 44:
                case 45:
                case 46:
                case 47:
                case 48:
                case 49:
                case 50:
                message.channel.send("Here's a meme @" + message.author.username, {

                        file: config.path + "\\Dank Memes\\Meme3.JPG"

                    });
                    console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);
                    break;
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                case 58:
                case 59:
                case 60:
                message.channel.send("Here's a meme @" + message.author.username, {

                        file: config.path + "\\Dank Memes\\Meme9.JPG"

                    });
                    console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);
                    break;
                case 61:
                case 62:
                case 63:
                case 64:
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                 message.channel.send("Here's a meme @" + message.author.username, {

                        file: config.path + "\\Dank Memes\\Meme4.JPG"

                    });
                    console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);
                    break;
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                message.channel.send("Here's a meme @" + message.author.username, {

                        file: config.path + "\\Dank Memes\\Meme6.JPG"

                    });
                    console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);
                    break;
                case 81:
                case 82:
                case 83:
                case 84:                 
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                message.channel.send("Here's a meme @" + message.author.username, {

                        file: config.path + "\\Surreal Memes\\Meme10.JPG"

                    });
                    console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);
                    break;
                case 91:
                case 92:
                case 93:
                case 94:
                case 95:
                case 96:
                case 97:
                case 98:
                case 99:
                case 100:
                 message.channel.send("Here's a meme @" + message.author.username, {

                        file: config.path + "Meme7.JPG"

                    }); 
                    console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);
                    break;
                   

            }

            case 'help':
                if(args[0] === 'help'){
                    switch(args[1]){

                        case undefined:
                            message.channel.send("Type `!help <arg>` for help on certain topics, the current topics for help are `rank`, `meme`, `trivia`.");
                            break;
                        case 'rank':
                            message.channel.send("Rank is earned by simply typing messages, you can use the `!rank` command to display your experience and rank.");
                            break;
                        case 'meme':
                            message.channel.send("MemeBot can give you a random meme if you type `!meme`. Try it out now!");
                            break;
                        case 'trivia':
                            message.channel.send("Type `trivia play` and optionally a category after that to play trivia. Type `trivia categories` to get a list of all playable categories.");
                            break;
                        default:
                            message.channel.send("Unrecognized command.", {


                                file: config.path + "confused-screaming.jpg"
                            });
                            break;


                    }
                }

            default:
                if(args[0]!='ping' && args[0]!='meme'&&args[0]!='help'){
                    message.channel.send("Unrecognized command.", {


                        file: config.path + "confused-screaming.jpg"
                    });
                    break;
                }
        }

    

});

/*client.on("message", (message) => {

    const msg = message.toString();
    const points = msg.length();
    const author = message.author.username;

    var reputation = 0;

    fs.readFile('reputation.json', function(err, buf){

        if(err) throw err;
        if(data.indexOf(author) >= 0){

            fs.appendFile('reputation.json', '{\n\"' + author + '\"\n\"reputation\" : \"' + reputation + '\"', (err) => {

                if (err) throw err;

            });

        }

    });

});*/


client.login(config.token);