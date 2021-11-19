console.log("connection!");

let socket = io('http://localhost:8080');
let counter = 0;

$('#addOne').on('click', function(event){
    event.preventDefault();
    counter++;
    socket.emit('count', counter)
})

socket.on('listenAll', function(counter){
    $('#numCounter').html(counter)
});

$('#reset').on('click', function(event){
    event.preventDefault();
    let counter = 0;
    socket.emit('count', counter);
});
