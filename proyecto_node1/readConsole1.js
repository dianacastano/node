const readline = require("readline");

function readConsole() {
    const promesa = new Promise((resolve, reject) => {
        let persona3 = { name: null, usarname: null, age: null };
        pedirDatos("What is your name?:  ")
        .then((respuesta) => {
            persona3.name = respuesta;
            return pedirDatos("What is you usarname?:  ");
        })
        .then((respuesta) => {
            persona3.usarname = respuesta;
            return pedirDatos("What is you age?:  ");
        })
        .then((respuesta) => {
            persona3.age = respuesta;
            resolve(persona3);
        }) 
    });
    return promesa;
}

function pedirDatos(preguntar) {
    const dato = new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(preguntar, (respuesta) => { 
            resolve(respuesta);
            rl.close();
        });
    });
    return dato;
}

module.exports.readConsole = readConsole;