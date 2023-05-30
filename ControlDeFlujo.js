// ------------------------------------------------------------------------------------------------------------------//
// **********************************    CONTROL DE FLUJO   ************************************************************//
// ------------------------------------------------------------------------------------------------------------------//

/* El control de flujo es un mecanismo que permite controlar el flujo de la programacion.
Puede ser: SECUENCIAL (paso a paso seguidos), CONDICIONAL (depende de una condicion para ejecutarse), LOOPS/CICLOS.*/

/*---------------------------------------  CONDICIONALES  ----------------------------------------------*/

/* HAY 4 ESTRUCTURAS PARA TRABAJAR CONDICIONELES: 

/* IF y ELSE => nos permiten tomar una decision y si se cumple se ejecutaran ciertas acciones*/

//EJ1: 
let edad = 17;
if(edad > 17){  // En este caso al usar solo el > NO INCLUYE el valor que le comparamos.
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}

//EJ:
let edad1 = 17;
if(edad >= 17) { // En este caso al usar >= INCLUYE el valor que le comparamos.
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}

/* IF Y ELSE ANIDADOS */

//EJ1:
let hora = 5;
if(hora >= 0 && hora <= 5) {
    console.log('Dejame dormir');
} else if(hora >= 6 && hora <= 11) {
    console.log('Buenos dias');
} else if(hora >= 12 && hora <= 18) {
    console.log('Buenas tardes');
} else if(hora >= 19 && hora <= 23 ) {
    console.log('Buenas noches');
}

/* OPERADOR TERNARIO: sirve para una sola linea de codigo como If y Else pero mas simplificada*/
let edad2 = 17; 

//nueva variable / condicion /     parte verdadera   /     parte falsa
let eresMayor = (edad2 >= 18) ? 'Eres mayor de edad' : 'Eres menor de edad';
console.log(eresMayor);

/* SWITCH - CASE => permiten evaluar diferentes VALORES para una misma variable */

let dia = 2;

switch(dia) {
    case 0:
        console.log('Domindo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    default:
        console.log('El dia no existe');
        break;    
}