var socket = io();
        socket.on('connect', function(){
            console.log('conectado al servidor');
        })
        //escuchar informacion
        socket.on('disconnect', function(){
            console.log('conexion perdida con el servidor');  
        })
        //enviar informacion
        socket.emit('enviarMensaje', {
            usuario:'alberto',
            mensaje: 'hola mundo'
        }, function(resp){
            console.log('respuesta del servidor:',resp);
        });
        //escuchar la información
        socket.on('enviarMensaje',function(res){
            console.log('servidor: ', res);
            
        })