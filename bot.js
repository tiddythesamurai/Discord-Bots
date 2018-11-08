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
  client.user.setAvatar('./avatar.png')
  .catch(console.error);
});

client.on("message", (message) => {

    const rand = random(0, 100);
    const author = message.author.username;
    const id = message.author.id;
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
    const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);

        
        switch(args[0].toLowerCase()){

        case 'meme':

            switch(args[1]){

                case undefined:
                    if(rand>=0&&rand<=5){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Dank Memes\\Meme1.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=6&&rand<=10){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Dank Memes\\Meme2.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=11&&rand<=15){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Dank Memes\\Meme3.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=16&&rand<=20){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Dank Memes\\Meme4.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=21&&rand<=25){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Dank Memes\\Meme5.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=26&&rand<=30){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Dank Memes\\Meme6.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=31&&rand<=35){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Dank Memes\\Meme7.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=36&&rand<=40){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Dank Memes\\Meme8.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=41&&rand<=45){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Dank Memes\\Meme9.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=46&&rand<=50){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Dank Memes\\Meme10.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);                        

                    }else if(rand>=51&&rand<=55){


                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Surreal Memes\\Meme11.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=56&&rand<=60){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Surreal Memes\\Meme12.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=61&&rand<=65){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Surreal Memes\\Meme13.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=66&&rand<=70){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Surreal Memes\\Meme14.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=71&&rand<=75){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Surreal Memes\\Meme15.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=76&&rand<=80){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Surreal Memes\\Meme16.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=81&&rand<=85){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Surreal Memes\\Meme17.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=86&&rand<=90){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Surreal Memes\\Meme18.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=91&&rand<=95){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Surreal Memes\\Meme19.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=96&&rand<=100){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Surreal Memes\\Meme20.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }
                    break;
                case "dank":
                    if(rand>=0&&rand<=10){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Dank Memes\\Meme1.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=11&&rand<=20){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Dank Memes\\Meme2.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=21&&rand<=30){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Dank Memes\\Meme3.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=31&&rand<=40){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Dank Memes\\Meme4.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=41&&rand<=50){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Dank Memes\\Meme5.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=51&&rand<=60){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Dank Memes\\Meme6.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=61&&rand<=70){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Dank Memes\\Meme7.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=71&&rand<=80){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Dank Memes\\Meme8.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=81&&rand<=90){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Dank Memes\\Meme9.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=91&&rand<=100){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Dank Memes\\Meme10.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);                        

                    }
                    break;

                case "surreal":
                    if(rand>=0&&rand<=10){


                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Surreal Memes\\Meme11.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=11&&rand<=20){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Surreal Memes\\Meme12.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=21&&rand<=30){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Surreal Memes\\Meme13.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=31&&rand<=40){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Surreal Memes\\Meme14.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=41&&rand<=50){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Surreal Memes\\Meme15.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=51&&rand<=60){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Surreal Memes\\Meme16.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=61&&rand<=70){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Surreal Memes\\Meme17.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=71&&rand<=80){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Surreal Memes\\Meme18.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=81&&rand<=90){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Surreal Memes\\Meme19.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }else if(rand>=91&&rand<=100){

                        message.channel.send("Here's a meme " +author, {

                            file: config.path + "\\Surreal Memes\\Meme20.JPG"

                        });
                        console.log(`${message.author.username} requested a meme in the ${message.channel.name} channel`);

                    }
                    break;

                default:
                    message.channel.send("Unrecognized argument", {

                        file: config.path + "\\confused-screaming.jpg"

                    });
                    console.log(`${message.author.username} made a syntax error in the ${message.channel.name} channel`);


            }

            case 'help':
                if(args[0] === 'help'){
                    switch(args[1]){

                        case undefined:
                            message.channel.send("Type `!help [arg]` for help on certain topics, the current topics for help are `rank`, `meme`, and `trivia`.");
                            break;
                        case 'rank':
                            message.channel.send("Each time you post a message you get a random number of XP between 15 and 25. To avoid flood, you can only gain XP once per minute. You can type `!rank` to get your rank and your level. Type `!levels` to get a link to the server leaderboard.");
                            break;
                        case 'meme':
                            message.channel.send("MemeBot can give you a random meme if you type `!meme [arg]`. Memes are split into two categories, `dank` and `surreal`. If you leave `[arg]` blank, MemeBot will give you a random one from either.");
                            break;
                        case 'trivia':
                            message.channel.send("Type `trivia play` and optionally a category after that to play trivia. Type `trivia categories` to get a list of all playable categories.");
                            break;
                        default:
                            message.channel.send("Unrecognized argument.", {


                                file: config.path + "\\confused-screaming.jpg"
                            });
                            console.log(`${message.author.username} made a syntax error in the ${message.channel.name} channel`);
                            break;


                    }
                }

            case 'rank':
                break;
            case 'levels':
                break;
            case 'changelog':

                fs.readFile(config.cd + "\\changelog.txt", 'utf8', (err, data) => {

                    if (err) throw err;
                    if(message.author.id === '303229369017565194') {client.channels.get('509503075074179102').send(data);}
                    else{message.channel.send('Error, illegal use of `!changelog` command. Only the owner is allowed to use it.')}

                });
                break;

            default:
                if(args[0]!='meme'&&args[0]!='help'&&args[0]!='changelog'){
                    message.channel.send("Unrecognized command.", {


                        file: config.path + "\\confused-screaming.jpg"
                    });
                    console.log(`${message.author.username} made a syntax error in the ${message.channel.name} channel`);
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
