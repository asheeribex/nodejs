var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Welcome to Ibexlabs" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Welcome to Ibexlabs" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Welcome to Ibexlabs" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
