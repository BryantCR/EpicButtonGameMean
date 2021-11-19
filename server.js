const express = require('express');
const app = express();
var counter = 0;

app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
app.set('views', __dirname + "/views");

const server = app.listen(8080);
const io = require('socket.io')(server);

app.get('/', function(req, res){
    res.render('index');
});

io.on( 'connection' , function( socket ){
	console.log("You have reached the server, welcome!");

    /*socket.on('information', function(info){
        socket.emit('displayInformation', info)
        console.log(info);
    });*/

    io.sockets.on('general' , function(data){
		io.sockets.emit('listenAll', {message : "Broatcast message"})
	});

})