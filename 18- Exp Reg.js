// ------------------------------------------------------------------------------------------------------------------//
// **********************************    EXPRESIONES REGULARES   ****************************************************//
// ------------------------------------------------------------------------------------------------------------------//

/*Se utilizan para buscar coincidencias con un patron determinado
- Es una secuencia de caracteres que forman un patron de busqueda y que principalmente es utilizada en una busqueda
de cadenas de texto. Pueden ser numeros tmb.*/

//COMO SE DECLARA:

let cadena = 'Hola Mundo, adios mundo'

let expReg = new RegExp('mundo', ''); //('patron', 'flag')
let expReg2 = /mundo/i;  //(/patron/ flag;)  'i': no discrimina entre mayusculas y minusculas.
let expReg3 = new RegExp('mundo', 'ig') // 'ig' no discrimina mayusc y minusc, y no frena en la 1er coincidencia.

/* METODOS */
console.log(expReg.test(cadena));   // .TEST() = prueba que la expresion exista. Rta booleana. 
console.log(expReg2.test(cadena));

console.log(expReg.exec(cadena)); //.EXEC() = devuelve un arreglo con el objeto dentro con mas info de la coincidencia.
console.log(expReg2.exec(cadena));

// Rangos []: listado valido de coincidencias.

let numeros = [1, 2, 3, 4, 5]
let cadena2 = 'Hola Mundo, adios mundo'

let expReg4 = /[0-9]/i;
let expReg5 = /[a-z]/i;
console.log(expReg4.test(numeros));
console.log(expReg5.test(cadena2));

//Llaves {}: indica repeticion.

let expReg6 = /mundo{1}/i; //Indica si se repite 1 vez
let expReg7 = /mundo{1,3}/i; //Indica si se repite entre 1 y 3 veces.
console.log(expReg6.test(cadena2))
console.log(expReg7.test(cadena2))


//FLAGS: son pequeñas modificaciones que podemos agregar a la Expresion Regular.
/*
''  Se detiene en la primer coincidencia
g	Búsqueda global de todas las coincidencias, no se detiene en la primera.	
i	Búsqueda que no distingue entre mayúsculas y minúsculas.
m	Búsqueda multilínea, hace coincidir el principio y el final de cada linea.	
s	Permite que el . coincida con caracteres de nueva línea.	
u	"unicode"; tratar un patrón como una secuencia de puntos de código Unicode.	
y	Realiza una búsqueda que coincida a partir de la posición actual/indice en la cadena de destino.*/










