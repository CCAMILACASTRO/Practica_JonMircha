// ------------------------------------------------------------------------------------------------------------------//
// **********************************    OBJETOS   *******************************************************************//
// ------------------------------------------------------------------------------------------------------------------//

/* Coleccion de llaves - valor/ keys - values, de cualquier tipo de dato. */

/* COMO LOS DECLARAMOS ?*/

let b = {};  // Objeto vacio

let c = new Object() // con el constructor del Objeto Global de Objetos. 


/* - A las variables dentro del objeto se las llama PROPIEDADES
   - A las funciones dentro del objeto se las llama METODOS. */

let IVA = 1.21; // Creamos una propiedad desde una variable.


let jon = {
    nombre: 'Jon',
    apellido: 'MirCha',
    edad: 35,
    pasatiempos: ['Correr', 'Hacer ejercicio', 'Dar clases'], //ARREGLO
    soltero: false,
    contacto: {
        email: 'jonmircha@gmail.com',
        movil: 54112345,
    },
    saludar: function() {
        console.log('Hola')
        console.log('Hola mi nombre es ' + this.nombre + ' y mi email es ' + this.contacto.email)
    },
    iva: IVA,
}

jon.auto = 'Fiat Toro', // Asi CREAMOS la propiedad AUTO al objeto JON.

// delete jon.auto; // Asi ELIMINAMOS la propiedad AUTO.

console.log(jon.nombre);
console.log(jon.pasatiempos);
console.log(jon.pasatiempos[1]); // Accedo al valor del indice 1 del arreglo PASATIEMPOS dentro del objeto JON.
console.log(jon.contacto.email); // Accedo al valor de la propiedad EMAIL del objeto CONTACTO.
jon.saludar();
console.log(jon.auto);
console.log(jon)

/*----------------------------------------------------------------------------------------------------------------*/

/* != SINTAXIS */
/*
.propiedad  ===> Usamos estas dos formas cuando conocemos el nombre explicito de la propiedad y esta declarada
['propiedad']

[propiedad] ===> Usamos esta forma cuando no sabemos el nombre real de la propiedad. */

/*----------------------------------------------------------------------------------------------------------------*/

// AGREGAMOS UNA PROPIEDAD POR MEDIO DE UNA FUNCION

let comidas = {};
let propiedadesDeComidas = function(prop1, prop2) {  // En los parametro pasamos lo que seran las propiedades que luego
                                                     // le pondremos valor cuando invoquemos la funcion.
    comidas[prop1] = 'Frutas',    // prop1 y prop2 son propiedades de las cuales no sabemos el nombre y por eso 
    comidas[prop2] = 'Papa Frita'; // van entre [] y sin comillas.

}

propiedadesDeComidas('Saludable', 'NoSaludable'); //Asignamos valor a los parametros pasados en la funcion (prop1 y prop2)
console.log(comidas) 

/*----------------------------------------------------------------------------------------------------------------*/

//RECORREMOS OBJETOS(For in)

for(var prop in jon) {
    console.log('Esta es la propiedad: ', prop) ;
}

for(var prop in jon) {
    console.log('Este es el valor: ', jon[prop]) ;
}







