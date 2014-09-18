//var JSON = require ('json');
var express = require('express');
var app = express();
var user = {
  user: {
    id: 1,
    username: 'serverSideName'
  }
};
var token = {
  "access_token":"2YotnFZFEjr1zCsicMWpAA",
  "token_type":"bearer"
};

//app.use('/',express.static(path.join(__dirname,'public')));
app.use('/',express.static(__dirname));

app.use(function (req, res, next) {
  console.log('req headers: ',JSON.stringify(req.headers));
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': 0
  });
  next();
});

app.get('/users/:id', function(req, res){
  res.send(JSON.stringify(user));
});

app.post('/token', function(req, res){
  res.send(JSON.stringify(token));
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
