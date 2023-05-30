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

const numeros = [1,2,3,4,5];

numeros.forEach((num, i) => {
    console.log(num + ' esta en la posición: ' + i)
});






