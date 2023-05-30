// ------------------------------------------------------------------------------------------------------------------//
// **********************************    CICLOS / LOOPS  ************************************************************//
// ------------------------------------------------------------------------------------------------------------------//

/* WHILE: mientras la condicion sea verdadera se imprimira el resultado en la consola. Cuando deja de ser verdadera
          sale del cliclo. */

let contador = 0; // valor inicial del ciclo.

while (contador < 10) { //condicion
    console.log(contador); // si la condicion es verdadera la imprime en la consola
    contador ++; // luego de imprimirla en la consola, le suma 1 al valor de contador.
}

// ------------------------------------------------------------------------------------------------------------------//

/* DO - WHILE: primero imprime el resultado en la consola, al menos la primera vez, y luego EVALUA la condicion.*/

do {
    console.log('do while ' + contador); //  Imprime el codigo por primera vez
    contador++ ;
} while (contador < 10);               // evalua la condicion

/*En el siguiente caso, como el valor de contador es 10 por el ciclo WHILE, en el DO WHILE entra al ciclo, lo imprime y
como la condicion no se cumple sale del ciclo. */

let contador2 = 0;
do{
    console.log('do while vale: ' + contador2);
    contador2++;
} while (contador2 < 10)

// ------------------------------------------------------------------------------------------------------------------//

/* FOR: consta de 3 partes: Inicializacion; Condicion; Incremento (++) o decremento (--) */

//EJ1:

for(let i = 0; i < 10; i++) {
    console.log('for ' + i);
}

//EJ2: con ARRAYS. (En este caso itera todas las posiciones/indices del array)

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for(let i = 0; i < numeros.length; i++) {
    console.log('for con arrays: ' + numeros[i])
}

// ------------------------------------------------------------------------------------------------------------------//

/* FOR - IN : permite recorrer solamente OBJETOS. Itera todas las propiedades del objeto. */

const jon = {
    nombre: 'Jon',
    apellido: 'Mircha',
    edad: 35
}

//Recorrer e imprimir solo las propiedades del objeto.

for (const propiedad in jon) {
    console.log('for in: ', propiedad);
}

//Recorrer e imprimir los valores.

for (const propiedad in jon) {
    console.log(jon[propiedad]);
}

//Recorrer e imprimir las propiedades junto con sus valores.

for (const propiedad in jon) {
    console.log(`Key: ${propiedad}, Valor: ${jon[propiedad]}`);
}

// ------------------------------------------------------------------------------------------------------------------//

/*FOR - OF: permite recorrer cualquier elemento ITERABLE en JavaScript */

let arrayNumeros = [10, 20, 30, 40, 50, 60, 70, 80, 90]

for (const elemento of arrayNumeros) {
    console.log(elemento)
}

let cadena = 'Hola Mundo';

for (const caracter of cadena) {
    console.log(caracter);
}
