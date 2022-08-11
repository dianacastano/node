const http = require('http');

const servidor = http.createServer(function (request, response){
    let respuesta;

    console.log("Request received from client");
    console.log("Request URL: " + request.url);
    console.log("Request Method: " + request.method);
    console.log("Header Request: " + request.headers.host);
    console.log(" - content-type  : ", request.headers["Content-Type"]);
    console.log(" - content-lenght: ", request.headers["content-length"]);
    console.log(" - user-agent    : ", request.headers["user-agent"]);

    if (request.url == "/") {
        respuesta = { ok: true, message: "Recibido!" };
    } else if (req.url == "/bye") {
        respuesta = { ok: true, message: "Adios!" };
    }
    console.log("Response Status code:" + response.statusCode);
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(respuesta));  
    
    response.end();
});

servidor.listen(3000);
