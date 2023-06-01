// ------------------------------------------------------------------------------------------------------------------//
// **********************************    CLASES   *******************************************************************//
// ------------------------------------------------------------------------------------------------------------------//

/* Son plantillas o modelos de una entidad, que nos dan un concepto base.
INSTANCIAS: son los nuevos objetos que usaran las clases como plantillas con atributos y metodos. Usan la palabra 
reservada NEW + nombre de la clase. */

// FORMAS DE DECLARARLA: Funcion Constructora (+ compleja) o Expresion de Clase (+ actual y simplificada).

class Animal {
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }
    sonar() {
        console.log('Hago sonidos porque estoy vivo')
    }
    saludar(){
        console.log('Hola mi nombre es ' + this.nombre);
    }
}

// const mimi = new Animal('Mimi', 'Hembra');    // Creamos las instancias que usaran la clase Animal como plantilla
// const scooby = new Animal('Scooby', 'Macho');
// console.log(mimi)                            // Invocamos las variables y metodos.
// console.log(scooby);
// scooby.sonar();
// mimi.sonar();

//HERENCIA DE CLASE:

class Perro extends Animal {
    constructor(nombre, genero, tamanio){
        super(nombre, genero)
        this.tamanio = tamanio
    }
    ladrar() {
        console.log(`Me llamo ${this.nombre} y mi sonido es Guauu Guauu!!`);
    }
}

const mimi = new Animal('Mimi', 'Hembra')
const scooby = new Perro('Scooby', 'Macho', 'Gigante');
console.log(mimi);
mimi.sonar();
console.log(scooby);
scooby.sonar();
scooby.ladrar();
scooby.saludar();

