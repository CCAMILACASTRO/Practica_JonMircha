// ------------------------------------------------------------------------------------------------------------------//
// **********************************    FUNCIONES   ****************************************************************//
// ------------------------------------------------------------------------------------------------------------------//

// --------------------------------- FUNCION DECLARADA -------------------------------------------------------------//

//EJ 1:
// function estoEsUnaFuncion() {  // Entre las llaves va el cuerpo del codigo.

//     console.log('Uno') // imprime lo que queremos ver en la consola.
//     console.log('Dos')

// }

// estoEsUnaFuncion() ; // Forma de invocar la funcion, usando siempre el nombre de la funcion y los parentesis,
                    //  pero no devuelve ningun valor.   

// EJ 2:
// function unaFuncionQueDevuelveValor () {

//     console.log('Uno')
//     console.log('Dos')
//     return 'La funcion ha retornado una cadena de texto'; // palabra reservada para retornar el valor de la funcion.

// }

// /*Para poder ejecutar la funcion hay que asignarla a una variable para que imprima el valor de la funcion.*/

// let valorDeLaFuncion = unaFuncionQueDevuelveValor() ;
// console.log(valorDeLaFuncion); // con este console.log vemos lo que retorna en la consola.

// EJ 3:

// function unaFuncionQueDevuelveValor() {

//     console.log('Uno')
//     return 19; // Con el return se corta el funcionamiento del codigo e ignora lo que queda debajo.
//     console.log('Dos');

// }

// let valorDeLaFuncion1 = unaFuncionQueDevuelveValor();
// console.log(valorDeLaFuncion1);

// ------------------------------------------------------------------------------------------------------------------//
// FUNCION CON VALORES DECLARADOS POR PARAMETRO.---------------------------------------------------------------------//

function saludar(nombre, edad) {
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`) // usamos template string para resumir el codigo.
}

saludar('Kenai', 7); // Pasamos los valores de lo que pasa por parametro. Se escribe en el orden que aparecen en la funcion.

// --------------------------------- FUNCION EXPRESADA -------------------------------------------------------------//

/* Tambien se las conoce como funciones ANONIMAS porque no llevan nombre dsp del function.
Creamos una funcion y se la asignamos dinamicamente como valor a una VARIABLE */

let funcionExpresada = function() {
    console.log(' Esto es una funcion expresada.') ;
}

funcionExpresada(); // Para invocar la funcion usamos el nombre que le dimos a la variable. 

/*DIFERENCIAS ENTRE FUNCION DECLARADA Y FUNCION EXPRESADA:
> La funcion DECLARADA podemos invocarla (inicializarla) antes o despues de declararla sin que nos arroje error.
> La funcion EXPRESADA NO podemos invocarla (inicializarla) ANTES de declararla porque nos arroja error.*/





