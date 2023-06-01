/* Las variables se pueden declarar de varias formas:
VAR: variable de AMBITO GLOBAL. No recomendable
LET: variable de AMBITO EN BLOQUE{}. Mas recomendable.
CONST: utilizamos cuando sabemos que ninguna variable o funcion
va a cambiar su valor. No puede haber constantes vacias.
EJ: const NUEVE; / En cambio var y let si. Ej: let nueve; */

var hola = 'Hola Mundo';   // Las strings se ponen entre comillas.
console.log(hola);  

let hello = 'Hello World';
console.log(hello);

const PI = 3.1416;
console.log(PI);    
/* Cuando declaramos variables con datos primitivos (strings, numeros, booleanos, etc)
no podemos modificar su valor porque nos tira error.
Pero SI PODEMOS MODIFICAR cuando usamos datos COMPUESTOS (arreglos, objetos, etc)
porque hacemos referencia al valor. */


