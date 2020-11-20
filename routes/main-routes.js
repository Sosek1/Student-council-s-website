const markdownIt = require("markdown-it")({
	html: true,
	linkify: true,
	typographer: true
});
const requireText = require("require-text");
const nodemailer = require("nodemailer");

module.exports = (app) => {
	async function sendMail(message) {
		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT),
			secure: Number(process.env.SMTP_PORT) == 465,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASSWORD
			}
		})

		const info = await transporter.sendMail(message);
		//console.log("Message sent: " + nodemailer.getTestMessageUrl(info));
	}

	app.get("/", (req, res) => {
		res.render("index");
	});

	app.get("/about-us", (req, res) => {
		const descriptions = require("../content/descriptions.json");
		let texts = [];
		descriptions.forEach(item => {
			texts.push(markdownIt.render(requireText(`../content/descriptions/${item.file}.md`, require)))
		});

		res.render("about-us", {
			data: descriptions,
			texts: texts
		});
	});

	app.get("/discounts", (req, res) => {
		res.render("discounts");
	});

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
				text: `${req.body.name}\n\n${req.body.text}`
			}
			sendMail(message);
			res.redirect("/")
		});
}