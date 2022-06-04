// The JavaSkript code is owned by Kristiyan Valchev and can only be viewed
// You are not allowed to use any of the following code

// todo - 

//* Server sockets (socket.io)
var Socket, io;
if (io) Socket = io.connect("/");

if (Socket) {
    Socket.emit("sendData", "Hello from client");

    Socket.on("resieveData", Data => {
        console.log(Data);
    });
}