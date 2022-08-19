//importing express
const express = require("express");

//creating server
const app = express();

//Adding Middleware for parsing requestBody
app.use(express.urlencoded({ extended: false }));

//Creating Routes
app.get("/", (req, res) => {
    console.log("my first response");
    res.send(`<h1>This is my first response</h1>`);
});

app.get("/2nd", (req, res) => {
    console.log("my second response");
    res.send(`<h2>This is my second response ${res}</h2>`);
});

app.route("/form")
    .get((req, res) => {
        res.status(200).send(`
        <form action = '/form' method = 'POST'>
        <label>First Name</label><br>
        <input type = "text" name="fname" placeholder = "type your 1st name"><br><br>

        <label>Last Name</label><br>
        <input type ="text" name = "lname" placeholder = 'type your last name'><br>
        <br>
        <label>Email</label><br>
        <input type = 'email' name = 'email' placeholder = 'type a valid email'><br>
        <br>
        <label>Phone</label><br>
        <input type = 'tel' name = 'phone' placeholder = '000-000-0000' pattern = '[0-9]{3}-[0-9]{2}-[0-9]{4}'><br>
        <label>Age</label><br>
        <input type = 'number' name = 'age' placeholder = '00' min = '0' max = '100'><br>
        <br>
        <input type = 'password' name = 'pass' placeholder = 'password'><br>
        <br>
        <button type = 'submit'>Submit</button>


        </form>
        

    `);
    })
    .post((req, res) => {
        console.log(req.body);
        res.status(200).send(req.body.fname);
    });

//creating 404 route
app.use((req, res, next) => {
    console.log("404");
    res.status(404).send(`<h3>this my third ${res}</h3>`);
});
//making server live at port 3000
app.listen(3000);
