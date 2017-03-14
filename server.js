var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

app = express();
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(process.env.PORT || 8100, function(req,res){
    //TODO: replace console log with loggly
    console.log('server started listening at port 8100');
});