const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Javacode098',   
    database: 'teacup'
});

app.use(bodyParser.urlencoded({extended:true}));

app.post('/api/registerverification', (request,response) => {
    const email = request.body.email;
    const password = request.body.password;

    const sqlstatement = "INSERT INTO users (email, password) VALUES (?,?);";

    db.query(sqlstatement, [email, password], (error, result) => {
        console.log(result);
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});