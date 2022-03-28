import { Server } from 'engine.io';
import express from 'express';
import {server} from 'socket.io';
import __dirname from './utils.js'

const app = express();
const PORT= process.env.PORT||8080;
app.use(express.static(__dirname+'/public'))//cargue todo lo que este adentro de public--->con el dirname encuentra la ruta
const server =app.listen(PORT,()=>{
    console.log(`listening on PORT ${PORT}`)
})

const io =new Server(server);

const log=[];
io.on('connection',socket=>{
    socket.on('Message',data=>{
        log.push(data);
        /* socket.emit */
        io.emit//este es para todos en general 
    })
})