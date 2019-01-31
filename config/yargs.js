const opts_crear = {
    descripcion: {
        demand: 'true',
        alias: 'd'
    }
}

const opt_actualizar = {
    descripcion: {
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
}

const opt_borrar = {
    descripcion: {
        alias: 'd'
    }
}

const argv = require('yargs').command('crear', 'Crea un elemento por hacer', opts_crear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opt_actualizar)
    .command('borrar', 'Borra el registro con la descripcion entrada', opt_borrar)
    .help().argv;

module.exports = {
    argv
}