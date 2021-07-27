const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Javacode098',   
    database: 'teacup'
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/login', (request, response) => {
    response.send({
        token:'testtoken'
    });
});

app.get('/api/getlogin', (request,response) => {
    const email = request.query.user;
    const password = request.query.password;
    const sqlstatement = "SELECT * FROM users WHERE email = ? AND password = ?;";
  
    db.query(sqlstatement, [email, password], (error, result) => {
        console.log(result);
        response.send(result);
    });
})

app.get('/api/getprofile', (request, response) => {
    const sqlstatement = "SELECT * FROM users";

    db.query(sqlstatement, (error, result) => {
        response.send(result);
    });
});

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