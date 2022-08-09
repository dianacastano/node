const fs = require("fs/promises");


const rc = require("./readConsole1");
const wr = require("./writeAndReadObject1");

let fichero = './persona3.json';

array3();

async function array3() {
    try {
        persona3 = await rc.readConsole();
        
        persona3 = await wr.writeAndReadObject(fichero, persona3);
        console.log("Nombre   :", persona3.name);
        console.log("Apellido :", persona3.usarname);
        console.log("Edad     :", persona3.age);
        
        
    } catch (error) {
        console.log(error);
    }
}