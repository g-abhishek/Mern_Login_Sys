var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('./config/mongoose.config');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(require('./routes/notes.route'));
app.use(require('./routes/user.route'))

app.get('/', (req, res)=>{
    res.json({'message':'welcome to notes taking system'});
})

app.listen("3003", ()=>{
    console.log('Server is running on http://127.0.0.1:3003');
});