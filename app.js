//const argv = require('yargs').argv
const argv = require('./config/yargs').argv
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors')

let comando = argv._[0]

console.log(argv)

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log('Valor ', tarea);

        console.log('Crear por hacer');
        break;
    case 'listar':
        let listado = porHacer.getListado()
        for (let tarea of listado) {
            console.log('==================Por hacer ================'.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('============================================'.green);

        }
    case 'borrar':
        console.log('Inicio borrado');
        let borrado = porHacer.borrar(argv.descripcion)
        console.log(borrado);




        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);
        break;
    default:
        console.log('Comando no es reconocido.');

}