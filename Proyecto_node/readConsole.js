const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function readConsole(callback) {
    let persona3 = {name: "",
                    usarname: "",
                    age: ""};
    rl.question("What is your name? ", (name) => {
        console.log(persona3.name = name);        
        rl.question("What is you usarname? ", (usarname) => {
            console.log(persona3.usarname = usarname)
            rl.question("What is you age? ", (age) => {
                console.log(persona3.age = age);
                callback(persona3);
                rl.close();
            });
        });
    });
}

module .exports.readConsole = readConsole;

