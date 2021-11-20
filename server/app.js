const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    console.log("Testing works!!!!!!!!!")
})

app.listen(8080, () => {
    console.log("Listening on port 8080...")
})
