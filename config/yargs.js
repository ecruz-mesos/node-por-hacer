const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    demand: true,
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente una tarea.'

}

const argv = require('yargs')
    .command('crear', 'Crea una elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea.', {
        descripcion,
        completado

    })
    .command('borrar', 'Elimina una tarea', {
        descripcion

    })
    .help()
    .argv

module.exports = {
    argv
}

/* const argv...

comando crear
--descripcion - d

comando actualizar 'Actualiza estado completado' */