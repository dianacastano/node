const fs = require("fs/promises");


const rc = require("./readConsole1");
const wr = require("./writeAndReadObject1");

let fichero = './persona3.json';

rc.readConsole ()
.then((persona3) => {
    return wr.writeAndReadObject(fichero, persona3);
})
.then((persona) => {
    console.log("Nombre   :", persona3.name);
    console.log("Apellido :", persona3.usarname);
    console.log("Edad     :", persona3.age);
    return fs.unlink(fichero);
})
.catch((error) => {
    console.log(error);
})