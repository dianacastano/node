const fs = require("fs/promises");
const readline = require("readline");

let fichero = './persona1.json';

array1();

async function array1() {
    try {
        let persona1= { name: "",
                usarname: "",
                age: ""}
        persona1.name = await pedirDatos("What is your name?:  ");
        persona1.usarname = await pedirDatos("What is you usarname?:  ");
        persona1.age = await pedirDatos("What is you age?:  ");

        await fs.writeFile(fichero, JSON.stringify(persona1));

        persona1 = JSON.parse(await fs.readFile(fichero));
        console.log("Nombre   :", persona1.name);
        console.log("Apellido :", persona1.usarname);
        console.log("Edad     :", persona1.age);

    
    } catch (error) {
        console.log(error)
    }
}

function pedirDatos(preguntar) {
    const promesa = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(preguntar, (respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });
    return promesa;
}