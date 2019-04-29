var socket = io();

// Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos la conexion con el servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Yhomarth',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta del servidor: ', resp);
});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor : ', mensaje);
});