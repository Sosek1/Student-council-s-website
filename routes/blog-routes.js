module.exports = (app) => {
	app.get("/blog", (req, res) => {
		res.render("blog/index");
	});

	app.get("/blog/:content", (req, res) => {
		const content = req.params.content,
			contentTypes = {
				articles: "Artykuły",
				interviews: "Wywiady",
				felietons: "Felietony",
				stories: "Opowiadania",
				reportages: "Reportaże",
				poetry: "Kącik poetycki"
			}

		if (contentTypes[content] == undefined) {
			res.redirect("/404");
		}

		const contentData = require("../content/data.json")[content];

		res.render("blog/blog-content", {
			contentType: contentTypes[content],
			content: contentData.slice().reverse(),
			type: content
		});
	});
}