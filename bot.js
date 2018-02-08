const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const fs = require("fs");
var chance = 0;

function random(max){

    chance =  Math.ceil(Math.random() * max);
    return chance;

}

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    switch(command) {

        case 'ping':

            message.channel.send("pong!");
            break;

        case 'foo':

            message.channel.send("bar!");
            break;

        case 'meme':

            switch(random(100)){

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
                case 18:
                case 19:
                case 20:

                    message.channel.send("Here's a meme about jeff burger", {

                        file: "C:\\Users\\knigh\\Desktop\\Discord Bots\\First Bot\\Meme Folder\\Meme5.JPG"

                    });
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

                    message.channel.send("Here's a meme about pranks", {

                        file: "C:\\Users\\knigh\\Desktop\\Discord Bots\\First Bot\\Meme Folder\\Meme1.JPG"

                    });
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

                    message.channel.send("Here's a meme about word leprosy", {

                        file: "C:\\Users\\knigh\\Desktop\\Discord Bots\\First Bot\\Meme Folder\\Meme2.JPG"

                    });
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

                    message.channel.send("Here's a meme a horse", {

                        file: "C:\\Users\\knigh\\Desktop\\Discord Bots\\First Bot\\Meme Folder\\Meme3.JPG"

                    });
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

                    message.channel.send("Here's a meme about a small child", {

                        file: "C:\\Users\\knigh\\Desktop\\Discord Bots\\First Bot\\Meme Folder\\Meme3.JPG"

                    });
                    break;

            }

            

  }

});

client.login(config.token);