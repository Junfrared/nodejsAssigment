const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log("sending response");
    res.send(`<h1>My first response</h1>`);
});

app.get("/second", (req, res) => {
    res.send(`<h1>My second response</h1>
                <p>This is my paragraph</p>
    `);
});
app.get("/third", (req, res) => {
    console.log("this is thirdone");
    res.send(`<h1>This is my third Response</h1>
            <p>This is my image</p>
            <img src="https://tdeecalculator.net/assets/images/food-scale.jpg">
    `);
});

app.use((req, res) => {
    res.status(404).send("This is my 404 response");
});

app.listen(3000);
