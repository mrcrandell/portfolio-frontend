const fs = require('fs');
const path = require('path');
const express = require('express');
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.MAILGUN_API});
// const mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_SECRET, domain: process.env.MAILGUN_DOMAIN});
const mustache = require('mustache');
const juice = require('juice');
const { body, validationResult } = require('express-validator');
const axios = require('axios');

const app = express()

app.use(express.json())

app.get('/', function (req, res) {
  // console.log(process.env.MAILGUN_DOMAIN)
  res.status(405).json({ error: 'sorry!' })
})

const validationBodyRules = [
  body('name').not().isEmpty().trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('message_text').not().isEmpty().trim().escape(),
  // body('recaptcha_token').not().isEmpty(),
];

app.post('/contact', 
  validationBodyRules,
  function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    axios
    .post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.INVISIBLE_RECAPTCHA_SECRETKEY}&response=${req.body.recaptcha_token}`).then((response) => {
      if (!response.data.success) {
        // return res.status(400).json({ errors: [{"msg":"Recaptcha failed","param":"recaptcha_token","location":"body"}] });
      }
      const emailData = {
        name: req.body.name,
        email: req.body.email,
        message_text: req.body.message_text,
        year: new Date().getFullYear()
      };
      const template = fs.readFileSync(path.resolve(__dirname, '../static/emails/contact.html'), 'utf8')
      emailData.emailBody = `<div>
          <h1>You've Been Contacted by ${emailData.name}</h1>
          <p><strong>Name:</strong> ${emailData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${emailData.email}" target="_blank">${emailData.email}</a></p>
          <p>${emailData.name} writes... ${emailData.message_text}</p>
        </div>`
      // const template = "{{name}} writes {{message_text}}";
      let html = juice(mustache.render(template, emailData));
      let data = {
        from: 'postmaster@mailgun.mattcrandell.com',
        to: 'me@mattcrandell.com',
        'h:Reply-To': emailData.email,
        subject: `You've Been Contacted from Your Website by ${emailData.name}`,
        html
      }
      client.messages.create(process.env.MAILGUN_DOMAIN, data)
      .then(() => {
        res.status(200).json({ 'success_message': 'Thank you for contacting me, I will get back to you as soon as possible.' })
      })
      .catch((error) => {
        console.log("got an error: ", error);
      });
      /* mailgun.messages().send(data, function (error, body) {
        if (error) {
          // res.render('error', { error });
          console.log("got an error: ", error);
        } else {
          // console.log(body)
          res.status(200).json({ 'success_message': 'Thank you for contacting me, I will get back to you as soon as possible.' })
        }
      }); */

      emailData.emailBody = `<div>
          <h1>Thank You for Contacting Matt Crandell</h1>
          <p>I will get back to you as quickly as possible.</p>
        </div>`
      html = juice(mustache.render(template, emailData));
      data = {
        from: 'postmaster@mailgun.mattcrandell.com',
        to: req.body.email,
        'h:Reply-To': 'me@mattcrandell.com',
        subject: 'Thank You for Contacting Matt Crandell',
        html
      }
      client.messages.create(process.env.MAILGUN_DOMAIN, data)
      .then((res) => {
        // res.status(200).json({ 'success_message': 'Thank you for contacting me, I will get back to you as soon as possible.' })
      })
      .catch((error) => {
        res.render('error', { error });
        console.log("got an error: ", error);
      });
      /* mailgun.messages().send(data, function (error, body) {
        if (error) {
          res.render('error', { error });
          console.log("got an error: ", error);
        } else {
          // console.log(body)
          // res.status(200).json({ 'success_message': 'Thank you for contacting me, I will get back to you as soon as possible.' })
        }
      }); */
      
    });
    
  
  })

module.exports = {
  path: '/api',
  handler: app
}