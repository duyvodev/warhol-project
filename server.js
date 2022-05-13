const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.listen(3000); //the port you want to use
console.log("App running at port 3000...");
