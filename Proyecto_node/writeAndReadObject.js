const fs = require('fs')

function writeAndReadObject(fichero, objeto, callback) {
    fs.writeFile(fichero, JSON.stringify(objeto), () => {
        fs.readFile(fichero, 'utf-8', (error, datos) => {
            callback(JSON.parse(datos));
        });
    })
}

module. exports.writeAndReadObject = writeAndReadObject;