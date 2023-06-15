// ------------------------------------------------------------------------------------------------------------------//
// **********************************    FUNCIONES FLECHA   *********************************************************//
// ------------------------------------------------------------------------------------------------------------------//

/* Nueva forma de definir funciones ANONIMAS / EXPRESADAS, donde la invocacion de la funcion solo puede realizarse luego
de declarar la funcion, y no antes como en las funciones declaradas. */

//EJ FUNCION ANONIMA:

const saludar = function() {
    console.log('Hola Mundo!');
}
saludar();

// Idem con Funcion Flecha

const saludar1 = () => {
    console.log('Hola Mundo con funcion flecha')
}
saludar1();

/*-------------------------------------------------------------------------------------------------------------*/

const saludar2 = () => console.log('Hola Mundo con funcion flecha y una sola linea de codigo');

saludar2();
/* cuando usan una sola linea de codigo podemos quitar las llaves y el return estaria implicito */

// FUNCION FLECHA CON 1 PARAMETRO Y UNA LINEA DE CODIGO:

const saludar3 = nombre => console.log(`Hola mi nombre es ${nombre} `); //Con 1 parametro puede ir sin ().

saludar3('Camila');

//Idem con 2 parametros

const sumar = function(a, b) {
    return a + b;
}

console.log(sumar(9, 8))

/*-------------------------------------------------------------------------------------------------------------*/

const sumar1 = (a, b) => a + b; // el return ya esta implicito

console.log(sumar1(4, 4));

// FUNCION FLECHA SIN PARAMETROS Y CON 2 LINEAS DE CODIGO:

const variasLineas = () => {
    console.log('Uno');
    console.log('Dos');
    console.log('Tres');
}

variasLineas();

// FUNCION FLECHA CON PARAMETROS Y VARIAS LINEAS DE CODIGO:

const variasLineas1 = (num1, num2, num3) => {
    console.log(num1 + num2);
    console.log(num1 + num3);
    console.log(num1 + num2 + num3);
}

variasLineas1(2, 4, 6);

// Idem con el RETURN.

const variasLineas2 = (num1, num2, num3) => {
    return(num1 + num2);
}

console.log(variasLineas2(2, 4, 6));

/*-------------------------------------------------------------------------------------------------------------*/

// FUNCION FLECHA CON METODOS DE ARREGLOS Y OBJETOS:

const numeros1 = [1,2,3,4,5];

numeros.forEach((num, i) => {
    console.log(num + ' esta en la posición: ' + i)
});

////********************************************************************************////
////************************METODOS DE BUSQUEDA Y TRANSFORMACION*******************////
////********************************************************************************////

//Creamos arrays.

let numeros = [50, 12, 37, 17, 25, 6]
let animales = ['Perro', 'Gato', 'Cisne', 'Tortuga']
let productos = [
    {nombre: 'Mesa', precio: 3500},
    {nombre: 'Silla de plástico', precio: 2000},
    {nombre: 'Silla de madera', precio: 2500},
    {nombre: 'Ventana', precio: 4500},
    {nombre: 'Puerta', precio: 3000},
]

////// FOR.EACH = recorre el array y ejecuta lo que le digamos con cada elemento///////////

numeros.forEach((numero) =>{
    console.log(numero);  // Nos devuelve cada uno de los numeros
})

productos.forEach((producto) => {
    console.log(producto);
})

productos.forEach((producto) => {
    console.log(producto.nombre);  // .nombre = nos permite acceder a cada propiedad de nuestros objetos.
    console.log(producto.precio);  // Ahora nos devuelve el nombre y el precio.
    
})


////// FIND = recorre el array y retorna el primer elemendo que comple con una condicion///////////
// Debemos crear primero una variable.

let perro = animales.find((animal) => {
    return animal === 'Perro';
})
console.log(perro);

////// FILTER = recorre el array y retorna un nuevo array con todos los elementos que cumplan con una condición/////

let gato = animales.filter((animal) => {
    return animal === 'Gato';
})

console.log(gato);

let mayorQueTreinta = numeros.filter((numero) => {
    return numero > 30;
})

console.log(mayorQueTreinta);


for(let i = 0; i < numeros.length ; i++){
    mayorAVeinte = numeros.filter((numero) => {
        return numero > 20;
    })        
        
}
console.log(mayorAVeinte);




let silla = productos.filter((producto) => {
    return producto.nombre.includes('Silla');
})

console.log(silla);


////// SOME = recorre el array y retorna TRUE o FALSE segun si encuentra o no un elemento que cumpla con una condicion//

let cisne = animales.some((animal) => {
    return animal === 'Cisne';
})
console.log(cisne);


let caballo = animales.some((animal) => animal === 'Caballo'); // FORMA ABREVIADA DE HACER LA FUNCION FLECHA.
console.log(caballo);


////// MAP = recorre el array y retorna uno nuevo con los elementos transformados del array original//

let nombreDeProductos = productos.map((producto) => producto.nombre); // FUNCION SIMPLE XQ HAY 1 PARAMETRO Y 1 SENTENCIA.
console.log(nombreDeProductos)

let preciosActualizados = productos.map((producto)=> {
    return {
        nombre: producto.nombre,
        precio: producto.precio * 1.5
    }
})
console.log(preciosActualizados); 


////// REDUCE = recorre el array y retorna un unico valor tras hacer una operacion sobre los elementos.////////

let total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(total);


let totalNumeros = 0
for (let i = 0; i < numeros.length; i++) {
    totalNumeros = totalNumeros + numeros[i];
}
console.log(totalNumeros)

let totalNumeros1 = 0
for (let i = 0; i < numeros.length; i++) {
    totalNumeros1 = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}
console.log(totalNumeros1)


////// SORT = recorre el array y ordena segun el criterio que le indiquemos. Transforma el array original//

// let menorAMayor = numeros.sort((a, b) => a - b);
// console.log(menorAMayor);

let mayorAMenor = numeros.sort((a, b) => a + b);
console.log(mayorAMenor);






