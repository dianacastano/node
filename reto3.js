const express = require('express');

const app = express();

app.all("*", function(request, response) {
    let respuesta;
    
    console.log("Request received from client");
    console.log("Petición: ");
    console.log(" - url       : ", request.url);
    console.log(' - método    : ', request.method);
    console.log(" - user-agent: ", request.headers["user-agent"]);

    if (request.url == "/") {
        respuesta = { ok: true, message: "Recibido!" };
    } else if (request.url == "/bye") {
        respuesta = { ok: true, message: "Adios!" };     
    };
    response.status(200).json(respuesta);
});

app.listen(3000);