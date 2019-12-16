const http = require('http'); // Se requiere para crear el servidor

// Creamos el servidor
// Todas las peticiones pasan por aqui
http.createServer((req, res) => {
        // //Respondiendo contenido en pagina web
        //     res.write('Hola mundo'); // Respuesta para el cliente
        //     res.end(); // Indicamos que finaliza la respuesta

        res.writeHead(200, { 'Content-Type': 'application/json' });
        let respuesta = {
            nombre: 'Alexander',
            apellido: 'Leiva',
            edad: 25,
            url: req.url
        }
        res.write(JSON.stringify(respuesta));
        res.end();
    })
    .listen(8080);
console.log('Escuchando en el puerto 8080');