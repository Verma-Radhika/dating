import {server} from './index.js'
// socket-io working with signaling server
let io=socket(server);
io.on('connection', function(socket){
    socket.on('join', function(roomName){
        let rooms = io.sockets.adapter.rooms
        let room = rooms.get(roomName)
        if(room == undefined){
            socket.join(roomName)
            socket.emit('created')
            console.log('room created')
        }else if (room.size == 1){
            socket.join(roomName)
            socket.emit('joined', roomName)
            console.log('room join')
        }else{
            console.log('Room is full')
            socket.emit('full')
        }
        console.log("generated room",rooms);
    })

    // stablish connection
    socket.on("ready", function(roomName){
        console.log( `connected to`, roomName);
        socket.broadcast.to(roomName).emit("ready")
    });

    // ice candidate
    socket.on("candidate",function(candidate,roomName){
        console.log('candidate', candidate)
        socket.broadcast.to(roomName).emit('candidate', candidate);
    });

    // create offer 
    socket.on('offer', function(offer, roomName){
        console.log('offer')
        console.log(offer)
        socket.broadcast.to(roomName).emit('offer', offer);
    });

    // getting peer response
    socket.on('answer', function(answer, roomName){
        console.log('answer')
        socket.broadcast.to(roomName).emit('answer', answer);
    })
})