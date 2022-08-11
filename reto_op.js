const express = require('express');

const app = express();

let puerto = 3000;


app.use(express.json());


app.get('/', (request, response) => {
    let name = request.query.name;
    let status = (name) ? 200 : 400; 
    let respuesta = (name) ? { ok: true, message: 'Petición aceptada', name: name }
                            : { ok: false, message: 'Petición incorrecta' };    
    response.status(status).json(respuesta);
});

app.post('/', (request, response) => {
    let respuesta = { ok: false, message: 'Petición incorrecta' };
    let status = 400;

    let { name, usarname, age } = request.body;
    let jsonIncompleto = (!name || !usarname || !age);
    status = (jsonIncompleto) ? 400 : 200;
    respuesta = (jsonIncompleto) ? { ok: false, message: 'Petición incorrecta' }
                                : { ok: true, message: 'Petición aceptada', name, usarname, age };
    
    response.status(status).json(respuesta);
});


app.listen(3000);