const port = 3000;
const express = require('express')
const app = express();

const NAME = process.env.NAME == undefined ? 'Anonymous' : process.env.NAME;

app.get('/', function (req, res) {
    res.send('Hello '+NAME);
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})