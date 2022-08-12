const Professional = require ("../clase/profesional");

let professional = new Professional ("Miley Cyrus", 30, "femenino", 56, 175, "rubio",
                                    "azul", "blanco", false, "USA", 0, "cantante");

function getProfessional(request, response) {

    let respuesta;

    if (professional != null){
        
        respuesta = {error: true, codigo: 200 ,message: "Existe professional", response: professional};
    }
    else {
        respuesta ={error: true, codigo: 200 ,message: "No existe professional"};
    }
    response.send(respuesta);
}

function postProfessional(request, response) {
    
    let respuesta;
    let name = request.body.name;
    let age = request.body.age;
    let genre = request.body.genre;
    let weight = request.body.weight;
    let height = request.body.height;
    let hairColor = request.body.hairColor;
    let eyeColor = request.body.eyeColor;
    let race = request.body.race;
    let isRetired = request.body.isRetired;
    let nationality = request.body.nationality;
    let oscarsNumber = request.body.oscarsNumber;
    let profession = request.body.profession;

    if (professional == null){
        new Professional (name, age, genre, weight, height, hairColor, eyeColor, race,
                            isRetired, nationality, oscarsNumber, profession);
    
        respuesta = {error: false, codigo: 200, message: "Professional creado exitosamente", 
                    response: professional};
    }
    else {
        respuesta = {error: true, codigo: 200,
                    message: "Professional ya existe", response: null};
    }
    response.send(respuesta);
}

function putProfessional(request, response){

    let respuesta;
    let name = request.body.name;
    let age = request.body.age;
    let genre = request.body.genre;
    let weight = request.body.weight;
    let height = request.body.height;
    let hairColor = request.body.hairColor;
    let eyeColor = request.body.eyeColor;
    let race = request.body.race;
    let isRetired = request.body.isRetired;
    let nationality = request.body.nationality;
    let oscarsNumber = request.body.oscarsNumber;
    let profession = request.body.profession;


    if (professional != null){

        new Professional (name, age, genre, weight, height, hairColor, eyeColor, race,
            isRetired, nationality, oscarsNumber, profession);

        respuesta = {error: false, codigo: 200, message: "Professional modificado con éxito", response: professional};
    }
    else {
        respuesta ={error: true, codigo: 200, message: "No existe profesional", response: professional};
    }
    response.send(respuesta);
}


function deleteProfessional(request, response){

    let respuesta;

    if (professional != null) {

        professional = null;
        respuesta = {error: false, codigo: 200, message: "Profesional eliminado correctamente.", response: professional};
    }
    else {
        respuesta = {error: true, codigo: 200,
                    message: "Profesional no existe", response: professional};
    }
    response.send(respuesta);
}

module.exports = {getProfessional,postProfessional,putProfessional,deleteProfessional};



