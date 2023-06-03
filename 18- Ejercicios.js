
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
