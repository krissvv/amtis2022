// todo - 

//* Packages
const express = require("express");
const fs = require("fs");

//* HTML pages
const pageHTML = fs.readFileSync("./publicHTML/index.html", "utf-8");

//* Router element
const Router = express.Router();

//* index
Router.route(["/", "/home", "Home"]).get((req, res) => {
    if (req.originalUrl != "/") res.status(200).redirect("/");
    else res.status(200).end(pageHTML);
});

module.exports = Router;