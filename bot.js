const Discord = require('discord.js'),

    client = new Discord.Client({sisableEveryone: true})

    console.log("muuuuuuuuute,");

client.on('guildMemberAdd', member => {

const mohamed= member.guild.channels.get("511595760345939968");

if(!mohamed) return;

if(mohamed) {

setTimeout(() => mohamed.send(`**Welcome to Power Server..**`), 4000)        

}

});


const prefix = "$"


client.on('message', message => {

  if (!message.content.startsWith(prefix)) return;

  var args = message.content.split(' ').slice(1);

  var argresult = args.join(' ');

  if (message.author.id !== '232564113459511306') return;

if (message.content.startsWith(prefix + 'g')) {

  client.user.setGame(argresult);

    message.channel.sendMessage(white_check_mark  : ${argresult})

} else 

if (message.content.startsWith(prefix + 'w')) {

client.user.setActivity(argresult, {type:'WATCHING'});

    message.channel.sendMessage(white_check_mark  : ${argresult})

} else 

if (message.content.startsWith(prefix + 'l')) {

client.user.setActivity(argresult, {type:'LISTENING'});

    message.channel.sendMessage(white_check_mark  : ${argresult})

} else 

if (message.content.startsWith(prefix + 's')) {

  client.user.setGame(argresult, "https://www.twitch.tv/ht3998425);

    message.channel.sendMessage(white_check_mark  : ${argresult})

}

});






client.login(process.env.BOT_TOKEN);
