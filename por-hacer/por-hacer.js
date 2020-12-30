const fs = require('fs') // filesystem
let listadoPorHacer = []

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer)
        //const fs = require('fs')
    let nombreArchivo = './db/data.json';
    fs.writeFile(`${nombreArchivo}`, data, (err) => {
        if (err) throw new Error('No se pudo guardar', err)
    })


}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = []

    }

    console.log(listadoPorHacer);

}

const crear = (descripcion) => {
    cargarDB()
    let porHacer = {
        descripcion, //ecma6
        completado: false

    }
    listadoPorHacer.push(porHacer)
    guardarDB()
    return porHacer // para retroalimentacion
}

const getListado = () => {
    cargarDB()
    return listadoPorHacer
}

const actualizar = (descripcion, completado = true) => {
    cargarDB()
        /*     let index = listadoPorHacer.findIndex(tarea => {
                return tarea.descripcion === descripcion
            }) */
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadoPorHacer[index].completado = completado
        guardarDB()
        return true

    } else {
        return false

    }

}

const borrar = (descripcion) => {
    cargarDB()
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    })
    if (listadoPorHacer.length === nuevoListado.length) {
        return false
    } else {
        listadoPorHacer = nuevoListado
        guardarDB()
        return true
    }


}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar

}