// ------------------------------------------------------------------------------------------------------------------//
// **********************************    PROTOTIPOS   ***************************************************************//
// ------------------------------------------------------------------------------------------------------------------//

/* Son mecanismos por el cual un objeto puede HEREDAR atributos(propiedades) y métodos(funciones).*/

//FUNCION CONSTRUCTORA:
/* Construimos una funcion UNA SOLA VEZ y a partir de ella generamos nuevas instancias(objetos) que sean de ese tipo de
funcion constructora. Es decir, creamos una funcion con propiedades y metodos de base para luego crear objetos que tengan
esas mismas propiedades y metodos.*/

function Animal(nombre, genero) {
    
    this.nombre = nombre;  //Atributos que deben tener el mismo nombre pasado por parametro.
    this.genero = genero;  //this. hace referencia al contexto dentro de Animal

    this.sonar = function() {   // Metodo/ funcion
        console.log('Hago sonidos porque estoy vivo')
    }
}

const snoopy = new Animal('Snoopy', 'Macho'); // Creamos las instancias que heredaran los atributos de la funcion
const lolaBunny = new Animal('Lola Bunny', 'Hembra'); //Paso los valores de los parametros de funcion.
console.log(snoopy); // Imprimimos las instancias creadas con sus atributos heredados.
console.log(lolaBunny);
snoopy.sonar();  // Invocamos el metodo/ funcion creada dentro de la funcion constructora.


/*.....................................................................................................................*/

// COMO PODEMOS MEJORAR EL RENDIMIENTO O GASTAMOS MENOS ESPACIO DENTRO DE NUESTRO PROGRAMA??
/* Los metodos creados al prototipo del objeto padre, en este caso Animal, los agregamos por fuera de la 
funcion constructora por medio del prototipo del objeto padre.*/

function Animales (nombre, genero) {
    this.nombre = nombre;               //CREAMOS LA FUNCION SOLO CON ATRIBUTOS
    this.genero = genero;
}

Animales.prototype.ruido = function () {
    console.log(`Soy ${this.nombre} y hago mucho ruido`)  //CREAMOS EL METODO CON EL PROTOTITPO DEL OBJETO ANIMALES
}

Animales.prototype.saludar1 = function () {
    console.log(`Hola soy ${this.nombre} y soy ${this.genero}`);
}

const snoopy1 = new Animales('Freda', 'Macho'); // CREAMOS LAS INSTANCIAS
const enya = new Animales('Enya', 'Hembra');
console.log(enya);
console.log(snoopy1);
enya.ruido(); // Invocamos el metodo creado desde el prototipo de Animales.
snoopy1.saludar1();

// ------------------------------------------------------------------------------------------------------------------//
// **********************************    HERENCIA   *****************************************************************//
// ------------------------------------------------------------------------------------------------------------------//

/*Capacidad de poder heredar caracteristicas de un Objeto padre a otros objetos hijos */

//Herencia prototipica

function Perro (nombre, genero, tamanio) {  //Creamos una nueva funcion constructora de un Objeto HIJO
    this.super = Animales;             // Por medio del SUPER llamamos al constructor de Animal para heredar sus atributos
    this.super(nombre, genero);        // Al super le agregamos los atributos que queremos que herede de Animal
    this.tamanio = tamanio;            // Creamos la nueva propiedad de Perro.

}
//HERENCIA  
Perro.prototype = new Animales();  // Asignamos al prototipo de Perro que sea una instancia de Animales.

Perro.prototype.constructor = Perro // Al igualarlo al mismo constructor (Perro), se estaran colgando las caracteristicas
                                    // del prototypo padre Animales.

// METODOS
Perro.prototype.sonar = function() {            // Este metodo heredado de Animales lo modificamos
    console.log('Soy un perro y mi sonido es ladrar');
}

Perro.prototype.ladrar = function() {
    console.log('Guauu Guauu!!')
}

//Comprobaciones

const snoopy2 = new Perro ('Enya', 'Hembra', 'Madiana')
console.log(snoopy2);
snoopy2.sonar();
snoopy2.ladrar();












