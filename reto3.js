const express = require ('express');
const app = express();

app.get('/',function (request, response){
    console.log('Request received from client');
    console.log('Request URL : '+request.url);
    console.log('Request Method : '+request.method);
    console.log('User-agent : '+request.headers["user-agent"]);
    response.writeHead(200,{'Content-Type':'application/json'});
    response.write(JSON.stringify({ ok: true, message: 'Recibido!' }));
    response.end();
});

app.get('/bye',function (request, response){
    console.log('Request received from client');
    console.log('Request URL : '+request.url);
    console.log('Request Method : '+request.method);
    console.log('User-agent : '+request.headers["user-agent"]);
    response.writeHead(200,{'Content-Type':'application/json'});
    response.write(JSON.stringify({ ok: true, message: 'Adios!' }));
    response.end();
});

app.listen(4000);