// ------------------------------------------------------------------------------------------------------------------//
// **********************************    CALLBACKS   ****************************************************************//
// ------------------------------------------------------------------------------------------------------------------//

/* Son funciones que se pasan por parametro a otras funciones. Nos aseguran que una funcion se ejecutará justo despues
de que la tarea se haya cumplido.
- Si tenemos una funcion1 que recibe por parametro a la funcion2, cuando la funcion1 ejecuta la funcion2 a eso se lo llama
CALLBACK. */

//EJ1: funciones cb sin parametros.

let usuario = function(){
    return 'Camila';                          /* Creamos una funcion 1 o callback sin parametro. */
}

let saludo = function(){                      /* Creamos una funcion 2 o callback sin parametro. */
    return 'Hola'
}

let saludoUsuario = function(cb1, cb2){       /* Creamos una funcion 3 que pase las callbacks por parametro */
    return cb1() + ' ' + cb2();
}

let saludoFinal = saludoUsuario(saludo, usuario)  // Invocamos las callbacks sin pasar el valor por parametro sino
console.log(saludoFinal);                        //   la definicion de sus funciones

/*-----------------------------------------------------------------------------------------------------------------*/

//EJ2: Funcion callback con un parametro.

let devuelvoFrase = function(comida){      /* Funcion callback con un argumento pasado por parametro */
    return `Hoy quiero comer ${comida}`;
}

let hablar = function (comida, cb) {      /* Funcion 2 donde pasamos la callback por parametro, junto con el argumento */
    return cb(comida)
}

let fraseFinal = hablar ('Pizza', devuelvoFrase);
console.log(fraseFinal);

/* En el caso de las funciones CALLBACKS siempre enviaremos por parametro la definicion de la funcion y no el resultado
de la invocacion (valores del parametro) 
- En el 2do ejemplo al pasarle el argumento 'Comida' a las variables hablar y devuelvoFrase, en la ultima variable
'fraseFinal se pasa el valor del parametro 'Pizza' y la funcion callback 'devuelvoFrase' */



