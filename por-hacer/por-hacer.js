const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    console.log(listadoPorHacer);

    return porHacer;

}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('C:/Drive/Desarrollos/nodejs/proyectos/04-por-hacer/db/data.json', data, (err) => {
        if (err) {
            return `${err}: No se pudo grabar el archivo`;
        }
    });
    return `${data}\n`;
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('C:/Drive/Desarrollos/nodejs/proyectos/04-por-hacer/db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const getListado = () => {

    try {
        listadoPorHacer = require('C:/Drive/Desarrollos/nodejs/proyectos/04-por-hacer/db/data.json');

    } catch (error) {
        listadoPorHacer = [];

    }

    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
    } else {
        return "No existe elemento con dicha descripcion";
    }
    guardarDB();
    return true;



}

module.exports = {
    crear,
    guardarDB,
    cargarDB,
    getListado,
    actualizar,
    borrar
}