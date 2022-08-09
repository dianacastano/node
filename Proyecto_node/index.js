const rc = require('./readConsole');
const wr = require('./writeAndReadObject');

rc.readConsole((persona3) => {
    wr.writeAndReadObject('./persona3.json', persona3, (persona3) => {
        console.log('Nombre   :', persona3.name);
        console.log('Apellido :', persona3.usarname);
        console.log('Edad     :', persona3.age);
    });
});