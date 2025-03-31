const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("A running API...");
});

app.get("/another", (req, res) => {
	res.send("Another endpoint...");
});

module.exports = app;
