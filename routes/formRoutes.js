const express = require("express");

//importing controller functions
const { getForm, submitForm } = require("../controllers/formController");

const router = express.Router();

router.route("/form").get(getForm).post(submitForm);

module.exports = router;
