var express = require('express');
var app = express();
var user = {
  user: {
    id: 1,
    name: 'serverSideName'
  }
}

//app.use('/',express.static(path.join(__dirname,'public')));
app.use('/',express.static(__dirname));

app.get('/users/:id', function(req, res){
    res.send(JSON.stringify(user));
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
