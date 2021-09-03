const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require("mysql");
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/images/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage})

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
        response.send({user:result,token:{token:'testtoken'}});
    });
});

app.get('/api/getcontent', (request,response) => {
    const email = request.query.user;
    //console.log ("Email is " + email);
    const sqlstatement = "SELECT user_id FROM users WHERE email = ?;";
    let user_id;
    
    db.query(sqlstatement, email, (error, result) => {
        console.log(result[0].user_id);
        const sqlstatement2 = "SELECT * FROM pictures LEFT JOIN users ON pictures.poster_id = users.user_id;";

        db.query(sqlstatement2, (error, result2) => {
            console.log(result2);
            response.send({feed:result2});
        });
    });
    
    
});

app.get('/api/getprofile', (request, response) => {
    const sqlstatement = "SELECT * FROM users";

    db.query(sqlstatement, (error, result) => {
        response.send(result);
    });
});

app.post('/api/uploadfile', upload.single('file'), (request, response) => {
    if (request.files === null) {
        return response.status(400).json({msg: 'No file uploaded' });
    }
    console.log(request);
    const file = request.file;
    console.log(request.file);
    const caption = request.body.caption;
    const poster = request.body.poster;
    const sqlstatement = `INSERT INTO pictures (poster_id,image_dir, picture_caption) VALUES (${poster},\"/images/${file.originalname}\", \"${caption}\"); `; 

    db.query(sqlstatement, (error, result) => {
        response.send({fileName: file.originalname, filePath: `/images/${file.originalname}`});
        console.log(result);
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