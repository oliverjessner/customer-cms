const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('<h1>Hallo Welt</h1>');
});

app.listen(3000);
