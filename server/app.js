const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send("hey");
})

app.listen(3001, () => {
    console.log("running on port 3001");
});