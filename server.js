require('dotenv').config();

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// set up transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

// Route to handle form submission
app.post("/send", (req, res) => {
  const { from, subject, message } = req.body;

  // Constructing the message with the sender's email included
  const fullMessage = `Sender's Email: ${from}\nSubject: ${subject}\n\nMessage:\n${message}`;
  
  console.log("full", fullMessage)
  const mailOptions = {
    from: from,
    to: process.env.GMAIL_TO,
    subject: subject,
    text: fullMessage,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: ", info.response);
      res.send("Email sent successfully");
    }
  });
});

// Serve the HTML form
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
