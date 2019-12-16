const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

// para que funcione en heroku
const port = process.env.PORT || 3000;

// sirve la pagina web del directorio public
app.use(express.static(__dirname + '/public'));

// Express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        titulo: 'Hola mundo',
        texto: 'Este es un texto'
    })
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});

//Respondiendo json
//Solo las peticiones que tengan ese path
// app.get('/', (req, res) => {
//     //res.send('Hello World')
//     let respuesta = {
//         nombre: 'Alexander',
//         apellido: 'Leiva',
//         edad: 25,
//         url: req.url
//     }

//     res.send(respuesta);
// });

// app.get('/data', (req, res) => {
//     //res.send('Hello World')
//     let respuesta = {
//         nombre: 'Alexander',
//         apellido: 'Leiva',
//         edad: 25,
//         url: req.url
//     }

//     res.send(respuesta);
// });