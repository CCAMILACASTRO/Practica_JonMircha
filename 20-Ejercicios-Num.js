//------------------------------------------------------------------------------------------------------------------//
//****************************************  EJERCICIOS  ************************************************************//
//------------------------------------------------------------------------------------------------------------------//

// NUMBERS:

// Crea una variable de tipo number.
const nuevoNumero = 4;

// Resuelve el siguiente problema matemático.
const nuevaResta = 10 - 7 === 3; 

// Resuelve el siguiente problema matemático.
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático.
const nuevoModulo = 21 % 5 === 1; 

function suma(x, y) {
    // Retorna el resultado de su suma.
    // Tu código:
    return x + y 
 }
 
 function resta(x, y) {
    // Retorna el resultado de la resta.
    // Tu código:
    return x - y 
 }
 
 function divide(x, y) {
    // Retorna el resultado de su división.
    // Tu código:
    return x / y 
 }
 
 function multiplica(x, y) {
    // Retorna el resultado de su multiplicación.
    // Tu código:
    return x * y 
 }
 
 function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y".
    // Tu código:
    return x % y 
 }

 function elevarAlCuadrado(num) {
    // Retorna el valor de "num" elevado al cuadrado.
    // Tu código:
    return Math.pow(num, 2); 
 }
 
 function elevarAlCubo(num) {
    // Retorna el valor de "num" elevado al cubo.
    // Tu código:
    return Math.pow(num, 3);
 }
 
 function elevar(num, exponent) {
    // Retorna el valor de "num" elevado al exponente "exponent".
    // Tu código:
    return Math.pow(num, exponent);
 }
 
 function redondearNumero(num) {
    // Redondea "num" al entero más próximo y retórnalo.
    // Tu código:
    return Math.round(num); 
 }
 
 function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba y retórnalo.
    // Tu código:
    return Math.ceil(num);
 }
 
 function numeroRandom() {
    // Genera un número al azar entre 0 y 1 y retórnalo.
    // Tu código:
    return Math.random(1); 
 }

 function capicua(numero) {
    // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
    // Caso contrario: "No es capicua".
    // Tu código:
 
    let res = 'Es capicua';
 
    let str = numero.toString(); // pasa de numero a string . 20 = '20'
    
    for(let i = 0; i < str.length; i++) {
       if(str[i] !== str[str.length - 1 - i]){
          res = 'No es capicua'
       }
    }
    return res;
 }

 


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



/*15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) 
devolverá 4 base 10.*/

function convertirBinarioDecimal(numero, base){
    if (base === 2){
        return parseInt(numero, base);
    }
}
console.log(convertirBinarioDecimal(100,2))

function convertirDecimalBinario(numero, base){
    if(base === 10){
        return numero.toString(2);
    }
}
console.log(convertirDecimalBinario(4,10));

/*16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada,
 pe. miFuncion(1000, 20) devolverá 800.*/

 function productoConDescuento(precio, descuento){
    let valorDescuento = descuento / 100;
    let precioDescuento = precio * valorDescuento;
    let precioFinal = precio - precioDescuento;
    return precioFinal; 

 }

 console.log(productoConDescuento(1000,20))

/*17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/ 

function calcularAnios(fecha){
    let hoyMenosFecha = new Date().getTime() - fecha.getTime();
    let aniosEnMilisegundos = 1000 * 60 * 60 * 24 * 365;
    let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMilisegundos);

    return aniosHumanos;
}
console.log(calcularAnios(new Date(1984,4,23)));



//Recibes un arreglo de letras y numeros. Crear un nuevo arreglo que contenga solo los números del arreglo.

function arregloDeNumeros(array){
    return array.flatMap(n => typeof n !== 'number' ? [] : n )
}

console.log(arregloDeNumeros([1, 'a', 2, 'b', 3, 'c']));


//Recibes un arreglo de letras y numeros. Crear un nuevo arreglo que contenga solo las letras del arreglo.

function arregloDeString(array){
    return array.flatMap(str => typeof str === 'string' ? str : [] )
}

console.log(arregloDeString([1, 'a', 2, 'b', 3, 'c']));













