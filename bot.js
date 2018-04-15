const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDM0ODY5MzYzMTY2OTM3MDg4.DbRcQw.DQmokmCUAorMfy1qlos6xutCuEI);
