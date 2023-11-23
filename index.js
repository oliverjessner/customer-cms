const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('<h1>Hello Codesphere 🚀</h1>');
});

app.listen(3000);
