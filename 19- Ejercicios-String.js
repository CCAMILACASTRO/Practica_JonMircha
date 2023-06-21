
//------------------------------------------------------------------------------------------------------------------//
//****************************************  EJERCICIOS  ************************************************************//
//------------------------------------------------------------------------------------------------------------------//

// STRINGS:

// Crea una variable de tipo string.
const nuevoString = "null";

function devolverString(string) {
    // Debe retornar un string.
    // Tu código:
    return string
 }

 function capToFront(string) {
    // Recibes un string con algunas letras en mayúscula y otras en minúscula.
    // Debes enviar todas las letras en mayúscula al comienzo del string.
    // Retornar el string.
    // [EJEMPLO]: soyHENRY ---> HENRYsoy
    // Tu código:
 
    let mayuscula = '';
    let minuscula = '';
 
    for(let i = 0; i < string.length; i++) {
       if (string[i].toUpperCase() === string[i]) {
          mayuscula += string[i];
       } else {
          minuscula += string[i];
       }
    }
    return mayuscula + minuscula;  
 
 }
 
 function asAmirror(frase) {
    // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
    // La diferencia es que cada palabra estará escrita al inverso.
    // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
    // Tu código:
 
    let nuevaString = '';
 
    let nuevaFrase = frase.split(' ');
    
    
    for(let i = 0; i < nuevaFrase.length; i++) {
       nuevaString += nuevaFrase[i].split('').reverse().join('');
       if ( i !== nuevaFrase.length -1) {
          nuevaString += ' ';
       }
    }
    return nuevaString;
   
 }
 console.log(asAmirror("The Henry Challenge is close!"))

 function deleteAbc(string) {
    // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
    // Retorna el string sin estas letras.
    // Tu código:
 
    let newString = "";
 
    for(let i = 0; i < string.length; i++){
       if (string[i] !== 'a' && string[i] !== 'b' && string[i] !== 'c'  ) {
          newString += string[i];
       }
       
    }
    return newString;
 }

 console.log(deleteAbc('basica'))


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
console.log(eliminarPatron("[xyz1, xyz2, xyz3, xyz4 y xyz5]", "xyz")) // devuelve en un arreglo
console.log(eliminarPatron("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z", '[a-z]'))


/*18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */

function contarLetras(string){
    if(!string) return 'No ingresaste una string';       // VALIDACIONES
    if(typeof string !== 'string') return 'El valor ingresado no es una string';

    let vocales = 0
    let consonantes = 0
    let espacios = 0
    let string1 = string.toLocaleLowerCase(); //Con este metodo retorna una nueva string con todas las letras en minusc.

    for(let i = 0; i < string1.length; i++){
        if(string1[i] === 'a' || string1[i] === 'e' || string1[i] === 'i' || string1[i] === 'o'||string1[i] === 'u'){
            vocales++;
        } else if(string1[i] === ' ') {
            espacios ++
        } else {
            consonantes ++
        }
    }
    return {
        string1: string,
        vocales: vocales,
        consonantes: consonantes,
    }
}
console.log(contarLetras("Hola Mundo"));
console.log(contarLetras()); // PROBANDO LAS VALIDACIONES
console.log(contarLetras(3));

// RESOLUCION CON EXPRESIONES REGULARES: -----------------------------------------------------------------

function contarLetras2(string){
    if(!string) return 'No ingresaste una string';
    if(typeof string !== 'string') return 'El valor ingresado no es una string';

    let vocales1 = 0
    let consonantes1 = 0
    let string2 = string.toLocaleLowerCase(); 
    
    for(let letra of string2){
        if(/[aeiou]/.test(letra)){
            vocales1 ++;
        }
        if(/[bcdfghjklmnpqrstvwxyz]/.test(letra)){
            consonantes1 ++;
        }
    }
    return {
        string2: string,
        vocales1: vocales1,
        consonantes1: consonantes1,
    }
}

console.log(contarLetras2('Hola Mundo'));

/*19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") 
devolverá verdadero. */

function validarNombre(nombre) {
    if(!nombre) return 'No ingresaste un nombre';
    if( typeof nombre !== 'string') return 'El valor ingresado no es un string';

    let expReg = /^[A-Za-zÑnÁÉÍÓÚáéíóú\s]+$/g.test(nombre);

    if(expReg) return `El ${nombre} es válido`;
    return `El ${nombre} NO es válido`;
    
}

console.log(validarNombre('Camila'));
console.log(validarNombre('Maria Paula'));


/*20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") 
devolverá verdadero. */

function validarEmail(email){

    if(!email) return 'No ingresaste un email';
    if(typeof email !== 'string') return 'El email ingresado no es una string';

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return (expReg)
    ? console.log(`El ${email} es un email válido`)
    : console.log(`El ${email} no es un email válido`)
}
validarEmail('camicastro.11.94@gmail.com')
validarEmail('CamilaCastro')






//------------------------------------------------------------------------------------------------------------------//

