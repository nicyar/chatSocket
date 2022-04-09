let socket=io();
let log=document.getElementById('log');
let chatBox =document.getElementById('chatBox');
let user;
Swal.fire({
    title:"Identificate",
    input:'text',
    allowOutsideClick:false,
    inputValidator:(value)=>{
        return !value && '¡necesitas registrarte primero!'
    }
}).then(result=>{
    user=result.value;
})

chatBox.addEventListener('keyup',evt=>{
    if(evt.key==="Enter"){
        if(chatBox.value.trim().length>0){//por lo menos se envia un simbolo
            socket.emit('message',{user,message:chatBox.value.trim()})//con esto enviamos el usuario y el mensaje
            chatBox.value="";
        }
    }
})



/* SOCKETS */
socket.on('log',data=>{
    
    let messages="";
    data.forEach(log=>{
        messages=messages+ `${log.user} dice:<-${log.message}-> </br>`
    })
    log.innerHTML=messages
})