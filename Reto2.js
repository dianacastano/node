let persona = { name: "Darwin",
                surname: "Larrahondo",
                age: 27,
}


const fs = require ("fs");
let dato = JSON.stringify(persona)

fs.writeFile ("persona.JSON",dato,()=>{
    fs.readFile("persona.JSON",()=>{
        console.log(JSON.parse(dato));
    })
})