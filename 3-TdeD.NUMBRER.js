//------------------------------------------------------------------------------------------------------------------//
//************************************* NUMBERS ********************************************************************//
//------------------------------------------------------------------------------------------------------------------//

let a = 2; 
let b = new Number(1);
let c = 7.19;
let d = '5.6'
console.log(a, b, c);


// METODOS:

//toFixed() ==> me dice cuantos numeros DECIMALES va a tener un valor numerico.
//Ej.
console.log(c.toFixed(1)); // aca me deja UN numero decimal y lo redondea hacia arriba.
console.log(c.toFixed(5)); // aca me deja 5 numeros decimales luego de la coma.

//parseInt() ===> devuelve solo la parte entera de un numero.
//Ej.
console.log(parseInt(c));

//parseFloat() ===> imprime la parte entera y flotante(decimal).
//Ej.
console.log(parseFloat(c));

// OPERADOR typeof ===> nos dice de qué tipo de dato es la variable.
//Ej.
console.log(typeof c, typeof d);

/*EN EL CASO DE QUERER HACER UNA OPERACION CON UN NUMERO Y UN STRING PODEMOS CONVERTIR ESE STRING EN NUMERO:
CON PARSEINT Y PARSEFLOAT.*/

//Ej1.
console.log(c + d); // nos devuelve el numero y el string concatenados.

//Ej2.
console.log(c + parseInt(d)); // nos devuelve el numero sumado pero con los decimales con error.

//Ej3.
console.log(c + parseFloat(d)); // nos devuelve la suma CORRECTA con entero y decimal.
