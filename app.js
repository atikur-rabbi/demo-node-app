var express = require('express');
var app = express();
var port = 8080 || process.env.PORT
app.use('/', express.static('public'));

// app.listen(port);

app.listen(port, function () {
    console.log(`Listening on port ${port}...`)
})