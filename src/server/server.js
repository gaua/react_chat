var express = require('express');
var app = express();
var http = require('http').Server(app);
var swig = require('swig');
var io = require('socket.io')(http);

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/../client/');

app.use('/public', express.static(__dirname + '/../client/public/'));
app.use('/node_modules', express.static(__dirname + '/../../node_modules/'));


http.listen(3000, function(){
    console.log('listening on *:3000');
});

app.get('/', function (req, res) {
    res.render('index');
});

io.on('connection', function(socket){
    socket.on('messageSend', function(msg){
        io.emit('messageSend', msg);
    });
});