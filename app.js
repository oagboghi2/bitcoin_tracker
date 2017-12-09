const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
var filePath = path.join(__dirname, 'relative/path/to/file');


var mainRoutes = require('./routes.js');
app.use('/', mainRoutes);

require('ejs');
app.set("view engine", 'ejs');

app.listen(3000, function(){
  console.log("Backedn is in another castle");
});
