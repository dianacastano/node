const Professional1 = require ("../clase/profesional");

let profesionales = [];

let profesional1 = new Professional1 ("Keanu Reeves", 57, "masculino", 79, 186, "negro", 
                    "negro", "blanco", false, "Canadiense", 0, "actor");

let profesional2 = new Professional1 ("Miley Cyrus", 30, "femenino", 56, 175, "rubio",
                    "azul", "blanco", false, "USA", 0, "cantante");

let profesional3 = new Professional1 ("Emma Watson", 32, "femenino", 54, 170, "castaño",
                    "marron", "blanco", false, "Reino Unido", 0, "actriz");

profesionales.push(profesional1);
profesionales.push(profesional2);
profesionales.push(profesional3);

function getProfessional1(request, response) {

    let id = request.query.id;
    console.log(id);
    let respuesta;

    if ( id >= profesionales.length){
        respuesta = {error: true, codigo: 200, message: "No existe el id del profesional"};
    }
    else if (profesionales != null && id){
        respuesta = {error: false, codigo: 200, message: "Existe el id del profesional.", response: profesionales[id]};
    }
    else {
        respuesta = {error: false, response: profesionales};
    }
    response.send(respuesta);
    
}

function postProfessional1(request, response) {
    
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

    let profesional = new Professional1 (name, age, genre, weight, height, hairColor, eyeColor,
                    race, isRetired, nationality, oscarsNumber, profession);

    profesionales.push(profesional);
    respuesta = {error: false, codigo: 200, message: "Nuevo profesional creado exitosamente", response: profesional};
    response.send(respuesta);
}

function putProfessional1(request, response){

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
    let id = request.body.id;


    if ( id >= profesionales.length){
        respuesta = {error: false, codigo: 200, message: "El índice introducido no existe."};
    }
    else if (profesionales[id] == null){
        respuesta = {error: false, codigo: 200, message: "La clase proffesional no existe."};
    }
    else {
        profesionales[id] = new Professional1 (name, age, genre, weight, height, hairColor, 
                            eyeColor, race, isRetired, nationality, oscarsNumber, profession);

        respuesta ={error: false, codigo: 200, message: "Profesional modificado correctamente", response: profesionales}   
    }
    response.send(respuesta);
}


function deleteProfessional1(request, response){

    let respuesta;
    let id = request.body.id;

    if (profesionales != null) {
        profesionales.splice(id,1)
        respuesta = {error: false, codigo: 200, message: "Profesional eliminado correctamente."};
    }
    else {
        respuesta = {error: true, codigo: 200,
                    message: "No ha eliminado ningún profesional."};
    }
    response.send(respuesta);
}

module.exports = {getProfessional1,postProfessional1,putProfessional1,deleteProfessional1};
