const {io} = require('../server');

io.on('connection', (client)=>{
  console.log('Usuarios conectados');

  client.emit('enviarMensaje',{
      usuario: 'administrador',
      mensaje: 'Bienvenido a la aplicación'
  })
  client.on('disconnect',()=>{
      console.log('usuario desconectado');
  });
  //Escuchar el cliente
  client.on('enviarMensaje',(data, callback)=>{

      console.log(data);
      //a todo el mundo
      client.broadcast.emit('enviarMensaje', data)
      
      // if(mensaje.usuario){
      //     callback({
      //         resp: 'Todo salio bien'
      //     });
      // }else{
      //     callback({
      //         resp: 'Todo salio mal......'
      //     });
      // }
  })
})