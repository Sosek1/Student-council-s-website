const markdownIt = require("markdown-it")({
	html: true,
	linkify: true,
	typographer: true
});
const requireText = require("require-text");

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
			};

		if (contentTypes[content] == undefined) {
			res.status(404).send("ERR 404 - Stop! You violated the law. Pay the court a fine or serve your sentence. Your stolen goods are now forfeit.");
			return;
		}

		const contentData = require("../content/blog.json")[content];
		res.render("blog/blog-content-list", {
			contentType: contentTypes[content],
			content: contentData.slice().reverse(),
			type: content
		});
	});

	app.get("/blog/:content/:id", (req, res) => {
		const content = req.params.content,
			id = Number(req.params.id),
			contentTypes = {
				articles: "Artykuły",
				interviews: "Wywiady",
				felietons: "Felietony",
				stories: "Opowiadania",
				reportages: "Reportaże",
				poetry: "Kącik poetycki"
			};

		const contentData = require("../content/blog.json");
		if (contentTypes[content] == undefined || id == 0 || contentData[content].length < id) {
			res.status(404).send("ERR 404 - Stop! You violated the law. Pay the court a fine or serve your sentence. Your stolen goods are now forfeit.");
			return;
		}

		const bodyPath = `../content/blog/${content}/${contentData[content][id - 1].filename}.md`;
		res.render("blog/blog-content", {
			content: contentData[content][id - 1],
			body: markdownIt.render(requireText(bodyPath, require))
		})
	})
}