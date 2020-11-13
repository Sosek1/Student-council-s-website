const nodemailer = require("nodemailer");

module.exports = (app) => {
	app.get("/", (req, res) => {
		res.render("index");
	});

	app.get("/about-us", (req, res) => {
		res.render("about-us")
	});

	app.get("/discounts", (req, res) => {
		res.render("discounts")
	});

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

	app.route("/contact-us")
		.get((req, res) => {
			res.render("contact-us");
		})
		.post((req, res) => {
			// I would really love to make it more secure but I don"t give away free labour, why would I? This stuff costs money.
			const message = {
				from: req.body.email,
				to: process.env.CONTACT_MAIL,
				subject: "Contact: " + req.body.topic,
				text: req.body.text
			}
			sendMail(message);
			res.redirect("/")
		});
}