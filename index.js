const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + "/public"));

// Main page
app.get('/', (req, res) => {
	res.sendFile(__dirname + "/views/index.html");
});

// Send mail
async function sendMail(message) {
	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: parseInt(process.env.SMTP_PORT),
		secure: process.env.SMTP_SECURE == "true", // true for port 465
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD
		}
	})

	const info = await transporter.sendMail(message);
	console.log("Message sent: " + nodemailer.getTestMessageUrl(info));
}

// Contact us
app.route('/contact-us')
.get((req, res) => {
	res.sendFile(__dirname + "/views/contact.html");
})
.post((req, res) => {
	// I would really love to make it more secure but I don't give away free labour, why would I? This stuff costs money.
	const message = {
		from: req.body.email, 
		to: process.env.CONTACT_MAIL,
		subject: "Contact: " + req.body.topic,
		text: req.body.text
	}
	sendMail(message);	
	res.redirect('/')
});

// About us
app.get('/about-us', (req, res) => {
	res.sendFile(__dirname + "/views/about.html");
});

// Discouns
app.get('/discounts', (req, res) => {
	res.sendFile(__dirname + "/views/discounts.html");
});

// Error 404
app.use(function (req, res) {
	res.status(404).send("ERR 404 - Stop! You violated the law. Pay the court a fine or serve your sentence. Your stolen goods are now forfeit.");
});

// Listening
const port = process.env.APP_PORT;
app.listen(port, () => {
	console.log(typeof process.env.SMTP_PORT)
	console.log(`Example app listening at http://localhost:${port}`);
});