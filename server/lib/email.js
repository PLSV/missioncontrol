const API_KEY = 'key-099572ee6cd2260a358eeb65b3eeeef8';
const DOMAIN = 'mg.dav.network';
const mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

const mail = async (from,to,title,body) => {
  let MAILGUN_DATA = {
    from: from,
    to: to,
    subject: title,
    text: body
  };
  //code to send mail here
  await mailgun.messages().send(MAILGUN_DATA, function (error, responseBody) {
    console.log(responseBody);
  });
  return;
};

module.exports = {
  mail
};