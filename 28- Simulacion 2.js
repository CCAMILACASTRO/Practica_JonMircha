function mayorMenosMenor(arr) {
    // Obtener del array "arr" el número mayor y el menor. Devuelve la resta entre los mismos
    // NOTA: No utilizar los métodos "min" y "max" de "Math".
    //
    // Tu código:
  
    var numeroMayor = 0;
    var numeroMenor = 0;
  
    for(i = 0; i < arr.length; i++){
      if (arr[i] > numeroMayor){
        numeroMayor = arr[i]
      } else if (arr[i] < numeroMayor ){
        numeroMayor = numeroMayor;
      } else {
        return("no es un numero") 
      }
    }  
    return numeroMayor-numeroMenor;
  };

function ingredienteEnMalEstado(menu, comida, ingrediente) {
    // El ingrediente de cierta comida está en mal estado. Hay que sacar los ingredientes próximos a éste,
    // ya que deben estar contaminados también.
    // La funcion recibe un objeto "menu" que contiene las comidas del día. "comida" es un array de ingredientes.
    // Si "ingrediente" está en el array, devolver un array con el ingrediente y los elementos en un índice de 
    // diferencia.
    // Ej:
    /*let menuDelDia = {
        raviolesConSalsa: ["Harina", "Sal", "Huevos", "Aceite", "Peceto", "Ricota"],
        bagnaCauda: ["Ajo", "Anchoas", "Aceite", "Crema", "Papas", "Zanahorias"],
        tallarines: ["Harina", "Pollo", "Aceite", "Huevos", "Tomates", "Cebolla"]
    } */
    // ingredienteEnMalEstado(menuDelDia, "raviolesConSalsa", "Peceto") devuelve => ["Aceite", "Peceto", "Ricota"];
    // ingredienteEnMalEstado(menuDelDia, "tallarines", "Aceite") devuelve => ["Pollo", "Aceite", "Huevos"];
    // En caso de no encontrarse el ingrediente en la comida, devolver "El menú está perfecto".
    // NOTA: No utilizar el método "includes".
    //
    // Tu código:

    var newArray=[];
        for (let i=0; i<menu[comida].length; i++){
            if (menu[comida][i] === menu[comida][ingrediente]){
                newArray.push(menu[comida][i], menu[comida][i+1], menu[comida][i-1]);
            } else{
                return "El menú está perfecto";
            }
        }
        return newArray;
       
  }


  function bienvenidoSr(persona) {
    // La funcion recibe un objeto "persona".
    // de la forma: 
    /*{
     nombre: 'Lionel
     apellido: 'Messi',
     invitado: true
     }*/
    // Si tiene la propiedad "invitado" y, además, tiene las propiedades "nombre" y "apellido", tomar esos valores y retorna:
    // "Lionel Messi, un gusto tenerlo nuevamente! Bienvenido".
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "apellido", retornar:
    // "Bienvenido Sr. Messi".
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "nombre", retornar:
    // "Hola Lionel, tu mesa está lista".
    // En caso de que no tenga la propiedad "invitado" retornar:
    // "Disculpe señor, no está invitado a la fiesta".
    //
    // Tu código:

    var keysPersona = Object.keys(persona);
  var valuePersona = Object.values(persona);
  var tieneNombre = keysPersona.includes("nombre");
  var indexNombre = keysPersona.indexOf("nombre")
  var tieneApellido = keysPersona.includes("apellido");
  var indexApellido = keysPersona.indexOf("apellido")
  var tieneInvitacion = keysPersona.includes("invitado")
  
  
  if (tieneNombre && tieneApellido && tieneInvitacion){
     return `${valuePersona[indexNombre]} ${valuePersona[indexApellido]}, un gusto tenerlo nuevamente! Bienvenido`
  } else if (tieneNombre && !tieneApellido && tieneInvitacion){
    return `Hola ${valuePersona[indexNombre]}, tu mesa está lista`
  } else if (!tieneNombre && tieneApellido && tieneInvitacion){
    return `Bienvenido Sr. ${valuePersona[indexApellido]}`
  } else if ( !tieneInvitacion){
    return "Disculpe señor, no está invitado a la fiesta"
  }


}


  // if(Object.keys(invitado) && Object.keys(nombre) && Object.keys(apellido)) return `${nombre} ${apellido}, un gusto tenerlo nuevamente! Bienvenido `
  // if(Object.keys(invitado) && Object.keys(apellido)) return `Bienvenido Sr. ${apellido}`
  // if(Object.keys(invitado) && Object.keys(nombre)) return `Hola ${nombre}, tu mesa está lista`
  // if(! Object.keys(invitado)) return `Disculpe señor, no está invitado a la fiesta`; 


  function obtenerSoloLosMejores(estudiantes, nota1, nota2) {
    // "estudiantes" es un array de objetos "estudiante". Crea un nuevo array con el nombre y apellido de los estudiantes
    // que en sus propiedades "check1" y "check2", tengan una nota mayor o igual a "nota1" y "nota2" respectivamente.
    // Ej:
    /* var estudiantes = [
        { nombre: "Mengano", apellido: "Solis", check1: 16, check2: 8},
        { nombre: "Fulano", apellido: "Rodriguez", check1: 20, check2: 20},
        { nombre: "Zutano", apellido: "Alvarez", check1: 10, check2: 0},
        { nombre: "Perengano", apellido: "Leiria", check1: 17, check2: 19}
    ] */
    // obtenerSoloLosMejores(estudiantes, 15, 15); retorna => ["Fulanito Rodriguez", "Perengano Leiria"];
    //
    // Tu código:
  
    var nuevoArray=[]
    var keys =[]
    var values = []
    var alumno =null;
    for( i=0;i< estudiantes.lenght;i++){
      keys = Object.keys(estudiantes[i])
      values = Object.values(estudiantes[i])
      
      if (values[2]>=nota1 && values[3 >= nota2]){
  
        alumno = values[0]+" "+values[1];
        nuevoArray.push(alumno);
      }
    }
    return nuevoArray;
  }

  function buscaDestruye(arreglo, num) {
    // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
    // Esta funcion tiene que eliminar los numeros del array que coincidan con el numero recibido como argumento (num).
    // La función debe retornar el array sin los números sacados.
    // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
    // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
    // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
    //
    // Tu código aca:

    var nuevoArreglo = arreglo
    for (i = 0; i < nuevoArreglo.length; i++){
      if (nuevoArreglo[i] === num){
        nuevoArreglo.splice([i],1) 
      }
    }
    return nuevoArreglo
  }


  function crearClaseAlumno() {
    class Alumno {
        constructor (nombre, apellido, cohorte, grupoDeAmigos, notasCheckpoints) {
            // El constructor de la clase recibe nombre (string), apellido (string), cohorte (number), 
            // grupoDeAmigos (array de objetos), notasCheckpoints (array de numbers).
            // Inicializar las propiedades del alumno con los valores recibidos como argumento.
            //
            // Tu código:
  
            this.nombre = nombre;
            this.apellido = apellido;
            this.cohorte = cohorte;
            this.grupoDeAmigos =grupoDeAmigos
            this.notasCheckpoints = notasCheckpoints 
            
        };

        addAmigos(nombre, apellido) {
            // Este método debe agregar amigos al array de grupoDeAmigos del alumno.
            // Añade un objeto con las propiedades "nombre", "apellido" y "cohorte" (siendo 
            // el value de cohorte el mismo que tiene asignado la instancia de "Alumno") 
            // en el array de grupoDeAmigos.
            // No debe retornar nada.
            //
            // Tu código:

            this.grupoDeAmigos.push({
              nombre : nombre,
              apellido : apellido,
              cohorte :this.cohorte,
            })
            
        };
  
        obtenerAmigos() {
            // Este método debe devolver la cantidad de amigos que tiene el alumno.
            //
            // Tu código:
  
            var cantidadAmigos = this.grupoDeAmigos.length;
            return cantidadAmigos;

            // return this.grupoDeAmigos.length;
            
        };
  
        addNota(nota) {
            // Este método añade una nota al array de notasCheckpoints
            // No debe retornar nada.
            //
            // Tu código:

            this.notasCheckpoints.push(nota);
        };
  
        obtenerNotas() {
            // Este método debe devolver un array con las notas del alumno.
            //
            // Tu código:
  
            return this.notasCheckpoints;

        //   let array = [];
        //   for(let i = 0; i < this.notasCheckpoints.length; i++){
        //     array.push(this.notasCheckpoints[i].nota)
        //  } return array;
            
            //return Object.values(this.notasCheckpoints);
            
        };
  
        presentacion() {
            // Este método debe devolver un string utilizando el nombre, el apellido y 
            // el cohorte del alumno.
            // Ej: Si ejecutamos presentacion() en la instancia de alumno, devolvería: 
            // "Hola, soy el alumno Lionel Messi del cohorte 13";
            //
            // Tu código:
  
            return `Hola, soy el alumno ${this.nombre} ${this.apellido} del cohorte ${this.cohorte}`
  
        };
        
    };
  
    return Alumno;
  }

  function intercambio(objeto) {
    // Devolver un objeto con los pares clave-valor intercambiados.
    // Ej: intercambio({ nombre: "Fulano", apellido: "Rodriguez" }); devuelve => { Fulano: "nombre", Rodriguez: "apellido" }
    // NOTA: No utilizar métodos de Object (values, keys, entries);
    //
    // Tu código:
  
    var keys = []
    var values = []
    var nuevoObjeto = {};
    for (var prop in objeto){
  
      keys.push (prop);
      values.push(objeto[prop]);
    
    }
    for (i = 0 ; i < keys.length;i++){
      nuevoObjeto[values[i]] = keys[i];
    }
  
    return  nuevoObjeto;
  }

//   function intercambio(objeto){
//     let nuevoObjeto = {};
//     for ( let propiedad in objeto){
//         nuevoObjeto[objeto[propiedad]]=propiedad;
//     }
//     return nuevoObjeto;

// }

  function soloNumeros(array) {
    // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
    // Debe devolver un arreglo con solo los enteros.
    // Ej:
    // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]
  
    // Tu código aca:
  let nuevoArray = []
    for (let i = 0; i < array.length; i++) {
      if(typeof(array[i]) === 'number') arr.push(array[i])
    }
    return nuevoArray
   
  }

  function sumaTodos(array) {
    // La funcion llamada 'sumaTodos' recibe como argumento un array con dos numeros
    // y debe devolver la suma total entre todos los numeros dentro de ese rango
    // ej:
    // sumaTodos([1,3]) => 1 + 2 + 3 = 6
    // Nota: Los numeros estan ordenados de menor a mayor.
  
    // Tu código aca:
  
    let sum = 0;
    for (let i = array[0]; i <= array[1]; i++) {
      sum += i;
    }
    return sum;
  }


  function checkInventario(inventario, item) {
    // La funcion 'checkInventario' recibe como argumento un array de objetos llamado 'inventario' y el nombre de un item llamado 'item'
    // Cada objeto tiene una propiedad 'nombre' y 'cantidad'.
    // La funcion debe devolver la cantidad de items que hay.
    // Si el item no existe la funcion tiene que devolver 0 (cero).
    // Ej:
    // var inventario = [
    //   {
    //     nombre: 'tenedor',
    //     cantidad: 6
    //   },
    //   {
    //     nombre: 'cuchara',
    //     cantidad: 4,
    //   },
    // ]
    // checkInventario(inventario, 'tenedor') devuelve => 6
  
    // Tu código aca:
    for(let i = 0 ; i < inventario.length; i++){
      if(inventario[i].nombre === item){
        return(inventario[i].cantidad)
    }else if(i == inventario.length-1){
      return 0
    }
  }
}

function index() {
  // Escribi una función encontraIndex en el prototipo de Arrays,
  // que recibe un elemento.
  // La function tiene que devolver el indice (index) del primer elemento que coincida con el pasado como parametro dentro del array.
  // Si el elemento se repite dentro del Array, este devuelve el indice del Primer elemento.
  // Si no existe ese elemento la funcion debe devolver -1
  // NO USAR LA FUNCION indexOf DE LOS ARREGLOS.
  // ej:
  // var numeros = [5, 6, 4, 65, 8, 4]
  // numeros.encontraIndex(4) debe devolver 2.
  // ya que el numero 4 se encuentra en la posicion 2 dentro del array.
  // numeros.encontraIndex(23) debe devolver -1 ya que ese elemento no existe en ese array.

  // Tu código aca:

  Object.defineProperty(Array.prototype, 'encontraIndex', {
    value: function(numero) {
      for(let i = 0; i < this.length ; i++){
          if(this[i] === numero){
         return i
          }
    }
    return  -1
    }
});
};



function cuantosRepetidos(array, elemento) {
  // La funcion llamada 'cuantosRepetidos' recibe como argumento un array de arrays llamado 'array' y un string llamado 'elemento'
  // Cada subarray contiene strings.
  // Debe devolver la cantidad de veces que 'elemento' se repite dentro de los subarrays.
  // Ej:
  // cuantosRepetidos([['manzana', 'naranja'],['sandia', 'pera'],['uva', 'manzana']], 'manzana') debe retornar 2
  // ya que 'manzana' se repite 2 veces.
  // Nota: Podes usar for loops anidados.

  // Tu código aca:

  let nuevoArray = 0
  for (i = 0; i < array.length; i++) {
    for(j = 0; j < array[i].length; j++){
      if (array[i][j] === elemento){
        nuevoArray ++;
     }
    }
  }
 return nuevoArray;
}


// Crea una funcion que sume los numeros de dos arrays indice por indice:

function sumarNumerosArrays(array1, array2){

// let array1 = [1, 2, 3, 4, 5]
// let array2 = [6, 7, 8, 9, 10]

let resultado = []

let menorLongitud = Math.min(array1.length, array2.length) // determina el numero maximo de iteracion

for(let i = 0; i < menorLongitud; i++){
  resultado.push(array1[i] + array2[i])
}
return resultado;

}
console.log(sumarNumerosArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]))


// Eliminar un dato especifico de un arreglo con indexOf() y splice()

function eliminarNumero(array){
  
  let datoAEliminar = 3;

  let indice = array.indexOf(datoAEliminar);
  if(indice >= 0) {
    array.splice(indice, 1)
  } return array;
}
console.log(eliminarNumero([1, 2, 3, 4, 5, 6]))

//// Funcion que reciba un arreglo de entero y retor el num que mas se repite

function masFrecuente(numeros){
  let conteo= {};
  let enteroMasFrecuente;
  let maximoConteo=0;
  for (let i=0;i<numeros.length;i++){
      let entero = numeros[i];
      if (conteo[entero]===undefined){
          conteo[entero]=1;

      }else{
          conteo[entero]++;
      }
      if(conteo[entero ]> maximoConteo){
          enteroMasFrecuente = entero;
          maximoConteo = conteo[entero];
      }
  }
  return enteroMasFrecuente;
}

// Evaluar si tienen la misma cantiad de caracteres

function mismaCantidadCaracteres(strings, caracteres) {
    
  const resultados = [];

for (let str of strings) {
  if (str.length === caracteres) {
    resultados.push(str);
  }
}

return resultados;
}

// Crear una funcion que sume los numeros primos de un arreglo de enteros

function sumaTodosPrimos(numeros){
  let suma = 0;
function esPrimo(numeros){
  if (numeros < 2 ){
      return false;
  }
for (let i = 2 ; i <= Math.sqrt(numeros); i++){
  if (numeros % i === 0){
      return false;

  }
}
return true;
}
for(let i = 0;i < numeros.length; i++){
  if (esPrimo(numeros[i])){
      suma += numeros[i];
  }
}
return suma;
}


// Crear una funcion que cuente la cantidad de invitados son vegan.
/*  let invitado = { 
  luna: { vegan: false },
  sebas:{ vegan:false},
  marce: {vegan: false},
  nicky:{vegan: true}*/

function vegan(invitados) {
    
  let contador = 0;
  for (let invitado in invitados ){
      if (invitados[invitado].vegan === true){
          contador++;
      }
  }
  return contador;
  }

  //Crear la clase Emprendedor:

  class Emprendedor {
    // Inicializar las propiedades del emprendedor con los valores recibidos como argumento
    // tu código aquí
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;  
    
        
    }

    getNombreCompleto(){
      // Retorna un string conteniendo nombre y apellido del emprendedor
      // tu código aquí

        return `${this.nombre} ${this.apellido}`;

    }

    addMascota(mascota) {
      // Agrega una mascota al arreglo de mascotas
     // tu código aquí
        this.mascotas.push(mascota);
        
    }

    countMascotas() {
      // Retorna la cantidad de mascotas del emprendedor
        // tu código aquí
        return this.mascotas.length;
    }

    addLibro(titulo, autor) {
          // Agregar un objeto: { titulo: titulo, autor: autor }
        // al arreglo de libros.
        // tu código aquí
        

        this.libros.push( {titulo, autor});
    
    }

    getLibros() {
      // Retorna un arreglo con los títulos de todos los libros en el arreglo de libros
      // tu código aquí
        
        return this.libros.map((libros) => libros.titulo);
    }

}











  
  