const colors = require('colors');

function recomendarBebida(menu) {
    switch (menu.toLowerCase()) {
        case 'carne':
            return 'Vino tinto';
        case 'pescado':
            return 'Vino blanco';
        case 'verdura':
            return 'Agua';
        default:
            return 'Agua';
    }
}

function determinarJuegosAcceso(pago) {
    if (pago >= 4000) {
        return ['Consolas', 'Juegos 2D', 'Juegos 3D', 'Realidad Virtual'];
    } else if (pago >= 3000) {
        return ['Consolas', 'Juegos 2D', 'Juegos 3D'];
    } else if (pago >= 2000) {
        return ['Consolas', 'Juegos 2D'];
    } else if (pago >= 1000) {
        return ['Consolas'];
    } else {
        return 'Debe ingresar más dinero para acceder a los juegos.';
    }
}

// Exportar ambas funciones en un solo objeto
module.exports = {
    recomendarBebida,
    determinarJuegosAcceso
};
