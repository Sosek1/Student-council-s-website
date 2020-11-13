const express = require("express");
const bodyParser = require("body-parser");
const mainPageRoutes = require("./routes/main-routes");
const blogRoutes = require("./routes/blog-routes");

require("dotenv").config({ path: __dirname + "/.env" });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + "/public"));
app.set("view engine", "pug")

// Import routes
mainPageRoutes(app);
blogRoutes(app);

// Error 404
app.use(function (req, res) {
	res.status(404).send("ERR 404 - Stop! You violated the law. Pay the court a fine or serve your sentence. Your stolen goods are now forfeit.");
});

// Listening
const port = process.env.APP_PORT;
app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});