
//------------------------------------------------------------------------------------------------------------------//
//****************************************  EJERCICIOS  ************************************************************//
//------------------------------------------------------------------------------------------------------------------//

// STRINGS:

/*1) Programa una función que cuente el número de caracteres de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá 10.*/

function miFuncion1(string) {
    return string.length;
}

console.log(miFuncion1("Hola Mundo"))


/*2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

function miFuncion2(string, corte){
    //return string.split('', corte).join('');   
    return string.slice(0, corte);
}

console.log(miFuncion2("Hola Mundo", 4))



/*3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

function miFuncion3(string) {

    let nuevoString = string.split(' ');
    return nuevoString;
   
}
console.log(miFuncion3('hola que tal'))

/*4) Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */



function miFuncion4(string, longitud) {

    let nuevoString1 = [];

    for(let i = 0; i < longitud; i++){
        nuevoString1.push(string)
    }
    return nuevoString1.join(' ');
}

console.log(miFuncion4('Hola Mundo', 3)) 

/* Con BUCLE WHILE*/

function miFuncion5 (string, longitud){

    let nuevoString = [];

    while(nuevoString.length < longitud){
        nuevoString.push(string)
    }
    return nuevoString.join(' ');
    }
    console.log(miFuncion5('Hola Mundo', 4)) 

//------------------------------------------------------------------------------------------------------------------//

// STRINGS:

/* 5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */

function miFuncion6(string){
    return string.split('').reverse().join('');
}
console.log(miFuncion6('Hola Mundo'))


/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

function miFuncion7(string, palabra){

    let i = 0
    let contador = 0

    while(i !== -1){
        i = string.indexOf(palabra, i)
        if(i !== -1){
            i++;
            contador++;
        }        
    }
    return contador;    
}   

console.log(miFuncion7('hola mundo adios mundo', 'mundo'));


/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que 
en otro), pe. mifuncion("Salas") devolverá true.*/

function palindromo(string){

    let nuevaString = string.split('').reverse().join('');
    if(nuevaString === string) return true;
    return false;
}

console.log(palindromo("salas"));
console.log(palindromo("casa"));


/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5*/

function eliminarPatron(string, patron) {

return string.replace(new RegExp(patron, 'ig'), '');

}
console.log(eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"))
console.log(eliminarPatron("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z", '[a-z]'))

//------------------------------------------------------------------------------------------------------------------//

// NUMBERS:

/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/

function aleatorio() {
    return Math.round((Math.random()*100) + 500);
}
console.log(aleatorio());

function numeroAleatorio(min, max){
    return Math.round(Math.random()* (max - min) + min );
}
console.log(numeroAleatorio(501, 600));


/*10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro)
, pe. miFuncion(2002) devolverá true.*/

function capicua(num){
    let nuevoNum = num.toString().split('').reverse().join('');
    if(nuevoNum == num) return true;
    return false 
}

console.log(capicua(232))
console.log(capicua(132))

/*11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define 
como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120 */

function factorial(numero) {
	if (numero < 0) numero = numero * -1;  //numero*= -1
	if (numero <= 0) return 1;
	let factorial = 1;
	while (numero > 1) {
		factorial = factorial * numero;    // factorial *= numero
		numero--;
	}
	return factorial;
}

function factorial2(numero){
    if (numero < 0) numero = numero * -1; 
	if (numero <= 0) return 1;
    let factorial2 = 1
    for(let i = numero; i > 1; i--){
        factorial2 *= i;
    }
    return factorial2
}

console.log(factorial(5));
console.log(factorial2(5));


/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, 
pe. miFuncion(7) devolverá true. */

function esPrimo(num){

    if(num < 2) return false;

    for(let i = 2; i < num; i++){
        if(num % i === 0) return false;
    }
    return true;
}
console.log(esPrimo(5))
console.log(esPrimo(3))
console.log(esPrimo(4))


/*13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */

function parOImpar (num){
    if(num %2 === 0) return 'Es Par';
    return 'Es Impar'
}
console.log(parOImpar(28));
console.log(parOImpar(29));


/*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.*/

function convertirCelciusAFarenheit(celcius){
    let resultadoFarenheit = (celcius * 9/5) +32;
    return resultadoFarenheit + '°F';
}

function convertirFarenheitACelcius(farenheit) {
    let resultadoCelcius = (farenheit - 32) * 5/9;
    return resultadoCelcius + '°C'
}

console.log(convertirCelciusAFarenheit(100));
console.log(convertirFarenheitACelcius(100));

/* --En una sola sentencia ---------------------------------------------------------- */

function convertirGrados(grados, unidad){
    if(unidad === 'C'){
        return `${grados}°C = ${Math.round((grados * (9/5)) + 32)}°F`;
    } else if(unidad === 'F') {
        return `${grados}°F = ${Math.round(((grados - 32) * (5/9)))}°C `
    }
}
console.log(convertirGrados(100, 'C'));
console.log(convertirGrados(100, 'F'));


