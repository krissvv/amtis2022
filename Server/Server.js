// todo - 

//* Packages
const express = require("express");
const http = require("http");
const fs = require("fs");
const colors = require("colors");

//* Create server
const app = express();
const Server = http.Server(app);

//* Middleware
app.use(express.json());
app.use(express.static("./publicHTML/"));

//* Routs
const Router = require("./allRouters");
app.use("/", Router);

//* 404 Error Page
const notFoundPageHTML = fs.readFileSync("./publicHTML/404.html", "utf-8");
app.use((req, res, next) => {
    res.status(404).end(notFoundPageHTML);
});

//* Socket.io communication
const io = require("socket.io")(Server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on("connect", Socket => {
    console.log("User connected".green + " - " + Socket.handshake.address.split("::ffff:")[1].yellow);

    Socket.on("sendData", Data => {
        console.log(Data);
        Socket.emit("resieveData", "Hello from server");
    });

    //* User disconnected
    Socket.on("disconnect", () => {
        console.log("User disconnected".red);
    });
});

//* Start server
const Port = 8000;
Server.listen(Port, () => {
    console.log();
    console.log(" --> App running on port " + Port + " ...");
    console.log();
});

/*
? https://socket.io/docs/v3/emit-cheatsheet/

? Emit to all users
io.emit();

? Emit back to the same user
Socket.emit();

? Emit to all users except me
Socket.broadcast.emit();

? Emit to all users in the room
io.in(roomID).emit();

? Emit to all users in the room except me
Socket.to(roomID).emit();

*/