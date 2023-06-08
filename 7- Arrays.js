// ------------------------------------------------------------------------------------------------------------------//
// **********************************    ARRAYS   *******************************************************************//
// ------------------------------------------------------------------------------------------------------------------//

/* Los arreglos son una coleccion de elementos de diferentes tipos: numeros, strings, boolean, objetos, arreglos, etc.*/

/* COMO DECLARARLOS?*/

let a = []; // Crea un arreglo vacio
console.log(a);
let b = [1, true, 'Hola', ['A', 'B', 'C']]; // Crea un arreglo con elementos dentro
console.log(b);
let c = Array.of('X', 'Y', 'Z', 9, 8, 7); // Crea un arreglo con el Objeto Global y .of
console.log(c);
let d = Array(10).fill(false); // Crea un arreglo con 10 posiciones que contentan el valor false
console.log(d);
let e = new Array(); // Crea un arreglo vacio desde el constructor del Objeto Global de Array.
console.log(e);

// /* PROPIEDADES Y METODOS*/
let colores = ['Rojo', 'Verde', 'Azul'];
let numeros = [1, 2, 3, 4];

/* .LENGTH => nos permite saber la longitud de un arreglo y saber cuantos elementos tiene.*/
console.log(colores.length) ; 

/* .PUSH() => Agrega un elemento al final del array*/
colores.push('Negro');
console.log(colores)

/*.POP() => Elimina el ultimo elemento del array*/
colores.pop();
console.log(colores);

/*.unshift() => Agrega un elemento al inicio del arreglo */
numeros.unshift(0)
console.log(numeros);

/*.shift() => Elimina el primer elemento del arreglo */
numeros.shift()
console.log(numeros);

/*.includes() => permite saber si un arreglo incluye o no un elemento. RTA boolea.*/
console.log(colores.includes('Rojo'));

/*.split() => convierte string en Arreglo */
let string = 'HOLA'
console.log(string.split(''));

/*.join() => convierte el arreglo en un string */
console.log(colores.join('/')); 

/*.forEach() => recorre el array y ejecuta lo que le pidamos con cada uno */
// colores.forEach((color) => {
//     console.log(color);
// })

colores.forEach(function(color, i) {
    console.log(i + color); // Nos muestra la posicion y el color.
})

/*.find() => recorre el array y retorna el PRIMER elemento que cumpla con la condicion */ 
colores.find((color) => {
    console.log(color === 'Rojo');
}) 

/*.filter() => recorre el array y retorna nuevo array con todos los elementos que cumplen la condicion */
numeros.filter((numero) => {
    console.log(numero <= 2);
})

/*.some() => recorre el array y responde T o F segun si encuentra o no un elemento que cumpla la condicion */ 
colores.some((color) => {
    console.log(color === 'Verde');
});

/*map() => recorre el array y retorna un nuevo array con los elementos transformados del array original */

numeros.map((numero) => {
    console.log(numero + 1);
})

/*.reduce() => recorre el array y retorna un unico valor tras hacer una operacion entre ellos. */

let total = numeros.reduce((acumulador, numero) => acumulador + numero ,0);
console.log(total)

/*.sort() =>  */ 
numeros.sort((a, b) => b - a) // de Mayor a Menor
console.log(numeros)

numeros.sort((a, b) => a - b) // de Menor a Mayor
console.log(numeros)

/* .flat() => aplana un arreglo cuando tengo uno dentro de otro. */

let array = [1,2,3,[4,5]]
console.log(array.flat()) 

/* flatMap() => mapea/ recorre el array y luego lo aplana. En estos ejemplos, primero envia todos los elementos que
son diferentes a numeros y los mete en un array vacio, y luego lo aplana, se eliminan los array vacios y retorna
el array con los elementos que son iguales a numero. */

//EJ1: Devuelve en el arreglo solo los numeros
let array2 = [1, 'a', 2, 'b', 3, 'c'];

console.log(array2.flatMap(n => typeof n !== 'number' ? [] : n )) //operador ternario

//EJ2: Devuelve en el arreglo solo los strings

let array3 = [1, 'a', 2, 'b', 3, 'c'];

console.log(array3.flatMap(str => typeof str !== 'string' ? [] : str )) // operador ternario



 
 
 
 
 







