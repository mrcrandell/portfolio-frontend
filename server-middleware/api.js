const fs = require('fs');
const path = require('path');
const express = require('express');
const mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_SECRET, domain: process.env.MAILGUN_DOMAIN});
const mustache = require('mustache');
// const mg = mailgun({apiKey: process.env.MAILGUN_DOMAIN, domain: process.env.MAILGUN_SECRET})
// const nodemailer = require('nodemailer')
// const validator = require('validator')
// const xssFilters = require('xss-filters')

const app = express()

app.use(express.json())

app.get('/', function (req, res) {
  console.log(process.env.MAILGUN_DOMAIN)
  res.status(405).json({ error: 'sorry!' })
})

app.post('/contact', function (req, res) {
  const template = fs.readFileSync(path.resolve(__dirname, '../static/emails/contact.html'), 'utf8')
  // const template = "{{name}} writes {{message_text}}";
  const html = mustache.render(template, req.body);
  const data = {
    from: 'matt@crandelldesign.com',
    to: req.body.email,
    subject: `You've Been Contacted from Crandell Design by ${req.body.name}`,
    html
  }
  console.log(data);
  mailgun.messages().send(data, function (error, body) {
    if (error) {
      res.render('error', { error });
      console.log("got an error: ", error);
    } else {
      console.log(body)
      res.status(200).json({ body })
    }
    
  });
  
})

module.exports = {
  path: '/api',
  handler: app
}