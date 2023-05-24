
//------------------------------------------------------------------------------------------------------------------//
//****************************STRINGS o CADENA DE TEXTO************************************************************//
//------------------------------------------------------------------------------------------------------------------//

let nombre = 'Camila';
let apellido = 'Castro';
let saludo = new String('Hola Mundo');
let domicilio = 'Mi casa se encuentra en Cajaravilla';
console.log(nombre, apellido, saludo);

// .LENGTH => nos permite ver la LONGITUD de caracteres.

console.log(nombre.length);

// MAYUSCULAS Y MINUSCULAS => toUpperCase() / toLowerCase() -

console.log(nombre.toUpperCase()); //Mayuscula
console.log(apellido.toLowerCase()); //Minuscula

//INCLUYE  => includes()

console.log(domicilio.includes('casa'));

//SPLIT => de string a ARREGLO

console.log(nombre.split(''));

//JOIN => de arreglo a STRING
let nuevoNombre = [ 'C', 'a', 'm', 'i', 'l', 'a' ]
console.log(nuevoNombre.join(''));

//REVERSE => invierte los caracteres. ====> Este metodo es especifico para ARREGLOS!!
console.log(nuevoNombre.reverse());


///*******---------CARACTERISTICAS DE CADENA DE TEXTO---------******///
///----------------Concatenacion / Interpolacion-------------------///

//Concatenacion: unir una cadena de texto con una variable (generalmente de strings) por medio del signo + .

let nombre1 = 'Camila';
let apellido1 = 'Castro';
let saludo1 = 'Hola, mi nombre es ' + nombre1 + ' ' + apellido1;
console.log(saludo1);

// Interpolacion de variables: meter dentro de una cadena de texto el valor dinamiamente de una variable.
// Usaremos TEMPLATE STRINGS `` y ${} con el nombre de las variables dentro.

let saludo2 = `Hola, mi nombre es ${nombre1} ${apellido1}`;
console.log(saludo2);

// Tambien las TEMPLATE STRINGS nos permiten hacer saltos de linea.
let saludo3 = `Camila
Mailen
Beto
Silvia
Matias`;
console.log(saludo3);

//------------------------------------------------------------------------------------------------------------------//







