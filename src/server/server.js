let express = require('express');
let app = express();
let http = require('http').Server(app);
let swig = require('swig');
let io = require('socket.io')(http);

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

app.get('/register', function (req, res) {
    res.render('register');
});

io.on('connection', function(socket){
    socket.on('messageSend', function(msg){
        io.emit('messageSend', msg);
    });

    socket.on('userJoined', function (username) {
        io.emit('userJoined', username);
    })
});