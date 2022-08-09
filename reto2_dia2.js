const fs = require("fs/promises");

let fichero = "./persona.json";
let persona = { name: "Darwin",
                surname: "Larrahondo",
                age: 27,
};

array();

async function array() {
    try {
        await fs.writeFile(fichero, JSON.stringify(persona));

        let jsonPersona = JSON.parse(await fs.readFile(fichero));
        console.log("Nombre   :", jsonPersona.name);
        console.log("Apellido :", jsonPersona.surname);
        console.log("Edad     :", jsonPersona.age);

    } catch (error) {
        console.log(error)
    }
}