const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const db = require('./db/db');
const loginRoute = require('./routes/userRoutes/loginRoute');
const registerRoute = require('./routes/userRoutes/registerRoute');
const forgetPasswordRoute = require('./routes/userRoutes/forgetPasswordRoute');
let port = process.env.PORT || 6249;

const http = require('http').Server(server);
server.use(bodyParser.json());
// test call

const accountSid = 'ACae047f7a8f4ef67347c1cea00435fe57';
const authToken = 'fee176588ceccf1614ed0726fd5127be';
const client = require('twilio')(accountSid, authToken);

// client.calls.create({
//          url: 'https://demo.twilio.com/welcome/voice',
//          to: '+923217850909',
//          from: '+12132143870'
//        }).then((call) => {
//         console.log(call.sid);
//       }).catch((err) => {
//         console.log(err);
//       });

// test call

// test receive sms

const MessagingResponse = require('twilio').twiml.MessagingResponse;
const User = require('./models/userModel/userModel');
const nodemailer = require('nodemailer');

server.get('/sms', (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'letslocate42@gmail.com',
          pass: 'objab@97'
        }
    });

    mailOptions = {
        from: 'letslocate42@gmail.com',
        to: 'usamasarfraz822@gmail.com',
        subject: `Let's Locate Verification`,
        text: `anything`
      };

      transporter.sendMail(mailOptions, function(error, info){

      })
    // User.findOneAndUpdate({email: 'usamasarfraz822@gmail.com'},{password: '1234567'},function(err,data){
        
    // });
});

// test receive sms
server.use('/user/login',loginRoute);
server.use('/user/register',registerRoute);
server.use('/user/forgetpassword',forgetPasswordRoute);
http.listen(port,()=>{
    console.log('Server is up on '+port+'.');
});














// telesign

// var TeleSignSDK = require('telesignsdk');

// const customerId = "";
// const apiKey = "*********************************";
// const rest_endpoint = "https://rest-api.telesign.com";
// const timeout = 10*1000; // 10 secs

// const client = new TeleSignSDK( customerId,
//     apiKey,
//     rest_endpoint,
//     timeout // optional
//     // userAgent
// );

// const phoneNumber = "**********";
// const message = "You're scheduled for a dentist appointment at 2:30PM.";
// const messageType = "ARN";

// console.log("## MessagingClient.message ##");

// function messageCallback(error, responseBody) {
//     if (error === null) {
//         console.log(`Messaging response for messaging phone number: ${phoneNumber}` +
//             ` => code: ${responseBody['status']['code']}` +
//             `, description: ${responseBody['status']['description']}`);
//     } else {
//         console.error("Unable to send message. " + error);
//     }
// }
// client.sms.message(messageCallback, phoneNumber, message, messageType);
