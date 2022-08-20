//importing express
const express = require("express");

//importing Controllers
const {
    firstResponse,
    secondResponse,
    pageNotFound,
} = require("./controllers/formController");

//Importing Routes
const formRoutes = require("./routes/formRoutes");

//creating server
const app = express();

//Adding Middleware for parsing requestBody
app.use(express.urlencoded({ extended: false }));

//Using Router
app.use(formRoutes);

//Creating Routes
app.get("/", firstResponse);

app.get("/2nd", secondResponse);

//creating 404 route
app.use(pageNotFound);
//making server live at port 3000
app.listen(3000);
