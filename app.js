//importing express
const express = require("express");
const { getForm, submitForm, firstResponse } = require("./formController");

//creating server
const app = express();

//Adding Middleware for parsing requestBody
app.use(express.urlencoded({ extended: false }));

//Creating Routes
app.get("/", firstResponse);

app.get("/2nd", (req, res) => {
    console.log("my second response");
    res.send(`<h2>This is my second response ${res}</h2>`);
});

app.route("/form").get(getForm).post(submitForm);

//creating 404 route
app.use((req, res, next) => {
    console.log("404");
    res.status(404).send(`<h3>this my third ${res}</h3>`);
});
//making server live at port 3000
app.listen(3000);
