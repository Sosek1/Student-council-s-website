const markdownIt = require("markdown-it")({
	html: true,
	linkify: false,
	typographer: true
});
const requireText = require("require-text");
const nodemailer = require("nodemailer");

module.exports = (app) => {
	async function sendMail(message) {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_PASSWORD
			}
		})

		await transporter.sendMail(message, err => console.log(err));
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