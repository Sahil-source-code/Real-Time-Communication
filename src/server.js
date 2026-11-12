import app from "./app/app.js";
import {createServer} from "node:http"
import { Server } from "socket.io";

const httpServer=createServer(app)

const io=new Server(httpServer);
io.on("connection",(socket)=>{
    console.log("A user connected");
    socket.on("disconnect",()=>{
        console.log("A user disconnected")
    })
})




httpServer.listen(3000,()=>{
    console.log("server running")
})