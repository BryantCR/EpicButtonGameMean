const express = require('express');
const app = express();

app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
app.set('views', __dirname + "/views");

const server = app.listen(8080, function(){
    console.log('Server with socket.io')
})
const io = require('socket.io')(server);

app.get('/', function(req, res){
    res.render('index');
});

io.on( 'connection' , function( socket ){
	console.log("You have reached the server, welcome!");



    io.socket.on('count' , function(counter){
		io.sockets.emit('listenAll', counter)
	});

})