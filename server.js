const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

let PORT = process.env.PORT || 3009;

//middleware
app.use(express.static('public'));
app.use(express.json());

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/nameofhtml.html');
// });
app.post('/', (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'Solomonkorede15@gmail.com',
      pass: 'Odeyemi1998@',
    },
  });
  const mailOptions = {
    form: req.body.email,
    to: "Solomonkorede15@gmail.com'",
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: req.body.message,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      res.send('There is an Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Successful');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
