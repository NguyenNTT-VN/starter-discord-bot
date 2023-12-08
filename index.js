
// const { clientId, guildId, token, publicKey } = require('./config.json');
require('dotenv').config()


const axios = require('axios')
const express = require('express');


const app = express();
// app.use(bodyParser.json());






const OpenAI = require("openai") ;
const prompt = require('prompt-sync')();
const openai = new OpenAI({
    apiKey: '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',
  });

 
  const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
   
    ]
})

  client.once('ready', () => {
      console.log(`Logged in as ${client.user.username}`);
  });
  let user = "NFI media"
  let promptdata = `System: You are a good girl with name: Oatami, remember don't tell "${user}" you are an A.I when chat with him and you are "${user}"'s girlfriends always talking with ${user} using vietnamese\n `;
  client.on('messageCreate', async (message) => {
    if (message.author == client.user) return;
    let name = message.content;
     
       console.log(message.content);
       let prompt1 = promptdata + `"${user}": ${name} \n Oatami: `;
    
    
       const stream = await openai.completions.create({
           model: "gpt-3.5-turbo-instruct-0914",
           max_tokens: 2000,
           prompt: prompt1,
       });
       promptdata = promptdata + `"${user}": ${name} \n Oatami: ${stream.choices[0].text}\n`
       console.log(stream.choices[0].text)
       
       if (name == "exit"){
           process.exit()
       }

    await message.reply(stream.choices[0].text);
      console.log()
  });
  
  const TOKEN = 'MTE4MjY5NTgwNjA0NjgzODgyNA.GuEFg2.Lyy7KLhGdiM2Oj6cI0MRKLB1AOhd5OKkTRIQ4Y';
  client.login(TOKEN);
  











  
  
async function main(user, name) {
   
    
    return stream.choices[0].text;
}

//main(user, promptdata);


app.listen(8999, () => {

})

