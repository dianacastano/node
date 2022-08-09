const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let persona1= { name: "",
                usarname: "",
                age: ""
}

const fs = require ("fs");

rl.question("What is your name? ", (name) => {
        console.log(persona1.name = name);
        
        rl.question("What is you usarname? ", (usarname) => {
            console.log(persona1.usarname = usarname)
            
        rl.question("What is you age? ", (age) => {
            console.log(persona1.age = age);
            let dato = JSON.stringify(persona1)
            fs.writeFile ("persona1.JSON",dato,()=>{
                fs.readFile("persona1.JSON",()=>{
                    console.log(JSON.parse(dato));
                })
            })
            console.log("Closing the interface");
            rl.close();
        })
    });
    
});






