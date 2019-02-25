import discord
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
client.login(process.env.NTQ4MDc3Mjc5OTE0MzYwODMy.D1T8AA.fk3FIXC08jJJHUwpfMnUnhZfEQ4);
