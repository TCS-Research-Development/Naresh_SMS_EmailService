var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport('smtps://nareshshetty.2011@gmail.com:Naresh@123@smtp.gmail.com');

var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'nareshshetty.2011@gmail.com', 
            pass: 'Naresh@123' 
        }
        
    });

var text = 'Hello from Naresh \n\n';

var mailOptions = {
    
    from: '" Shetty " <nareshshetty.2011@gmail.com>',  // sender address
    to: 'milindsmahajan93@gmail.com', // list of receivers
    subject: 'Test Mail', // Subject line
    text: text //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
};

// var mailOptions = {
//     from: '" Shetty " <nareshshetty.2011@gmail.com>', // sender address
//     to: 'milindsmahajan93@gmail.com', // list of receivers
//     subject: 'Hello ✔', // Subject line
//     text: 'Hello world', // plaintext body
//     html: '<b>Hello wo</b>' // html body
// };

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
     if(error){
         return console.log(error);
     }
     console.log('Message sent: ' + info.response);
});
