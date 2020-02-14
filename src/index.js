var nodemailer = require("nodemailer");
var ejs = require("ejs");

const dotenv = require('dotenv');
dotenv.config();

console.log(`Your port is ${process.env.SMTP_PORT}`); // 8626
/* 
var transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

ejs.renderFile(
  __dirname + "/templates/mailer.ejs",
  {
    name: "User",
    images: {
      logo: "https://nodejs.org/static/images/logo.svg"
    }    
  },
  function(err, data) {
    if (err) {
      console.log(err);
    } else {
      var mainOptions = {
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO,
        subject: process.env.MAIL_SUBJECT,
        html: data
      };

      transporter.sendMail(mainOptions, function(err, info) {
        if (err) {
          console.log(err);
        } else {
          console.log("Message sent: " + info.response);
        }
      });
    }
  }
);
 */
