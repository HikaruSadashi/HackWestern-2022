//npm install twilio

//cant make this file public because of account SID & etc
const client = require('twilio')('ACd3f20f3965aa588c0812aea6f9b7b6f1', '683bab841682a15e4712831822c06029');

//check database 


client.messages
  .create({
     body: 'Your hardcore gamer juice has expired!',
     from: '+12363045834',
     to: '+15196970940'
   })
  .then(message => console.log(message.sid));
