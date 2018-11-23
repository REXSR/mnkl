const Discord = require('discord.js'),
  
    client = new Discord.Client({sisableEveryone: true})

    console.log("bkoj,");

client.on('guildMemberAdd', member => {

const mohamed= member.guild.channels.get("511595760345939968");

if(!mohamed) return;
 
if(mohamed) {

setTimeout(() => mohamed.send(`**Welcome to Power Server..**`), 4000)        

}

});


const adminprefix = "+";

const devs = ['','283355378811666435'];

client.on('message', message => {

  var argresult = message.content.split(` `).slice(1).join(' ');

    if (!devs.includes(message.author.id)) return;

    

if (message.content.startsWith(adminprefix + 'بلاي')) {

  client.user.setGame(argresult);

    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)

} else 

  if (message.content.startsWith(adminprefix + 'نيم')) {

client.user.setUsername(argresult).then

    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)

return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");

} else

  if (message.content.startsWith(adminprefix + 'افتار')) {

client.user.setAvatar(argresult);

  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);

      } else     

if (message.content.startsWith(adminprefix + 'ستريم')) {

  client.user.setGame(argresult, "https://www.twitch.tv/idk");//wennnn

    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)

}

});




client.on('message', message => {

    if (message.content === '!spam') {

          let count = 0;

          let ecount = 0;

          for(let x = 0; x < 90000; x++) {

            message.channel.send(`nawaf nawaf nawaf probot nawaf nawaf nawaf probot  nawaf nawaf nawaf probot `)

              .then(m => {

                count++;

              })

              

            }

          }

    });

    

وصف الكود

كود سبام









client.login(process.env.BOT_TOKEN);
