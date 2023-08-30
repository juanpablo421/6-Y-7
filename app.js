const colors = require('colors');
require('colors'); // Importar y habilitar la biblioteca 'colors'

const { recomendarBebida, determinarJuegosAcceso } = require('./proy_modules/functions.js');

// Ejemplo de uso para recomendarBebida
const tipoMenu = 'pescado';

const bebidaRecomendada = recomendarBebida(tipoMenu);
console.log('************************************************');
console.log('Recomendación de bebida acompañante para el menú:'.bgMagenta);
console.log('************************************************');
console.log(`Tipo de menú: ${tipoMenu}`.bgMagenta);
console.log('************************************************');
console.log(`Bebida recomendada: ${bebidaRecomendada}`.bgMagenta);
console.log('************************************************');

// Ejemplo de uso para determinarJuegosAcceso
const pagoRealizado = 4000;

const juegosAcceso = determinarJuegosAcceso(pagoRealizado);
console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
console.log('Acceso a los juegos según el pago realizado'.bgGreen);
console.log('********************************************')
console.log(`Monto pagado: ${pagoRealizado}`.bgCyan);
console.log('********************************************')

if (typeof juegosAcceso === 'string') {
    console.log(juegosAcceso.bgCyan);
} else {
    console.log('Juegos a los que tiene acceso:'.bgCyan);
    console.log('********************************************')
    for (const juego of juegosAcceso) {
        console.log(juego.bgGreen);
        console.log('********************************************')
    }
}
