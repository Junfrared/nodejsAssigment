const getForm = (req, res) => {
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
};

const submitForm = (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body.fname);
};

const firstResponse = (req, res) => {
    console.log("my first response");
    res.send(`<h1>This is my first response</h1>`);
};

module.exports = { getForm, submitForm, firstResponse };
