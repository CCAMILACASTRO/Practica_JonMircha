//-------------------------------------------------------------------------------------------------------------------//
//****************************************  EJERCICIOS DE SIMULACION   *********************************************//
//----------------------------------------------HENRY CHALLENGE----------------------------------------------------//

function soloNumeros(array) {
    // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
    // Debe devolver un arreglo con solo los enteros.
    // Ej: 
    // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]
  
    // Tu código aca:
  
    let numeros = []
  
    for(let i = 0; i < array.length; i++ ){
      if(typeof array[i] === 'number')
      numeros.push(array[i])
    }
    return numeros;
  
  }
  console.log(soloNumeros([1, 'Henry', 2]))

  function stringMasLarga(strings) {
    // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
    // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
    // Ej:
    // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
    // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'
  
    // Tu código aca
  
    let stringLarga = []
  
    for(let i = 0; i < strings.length; i++){
      if(strings[i].length > stringLarga.length)
      stringLarga = strings[i];
      
    }
    return stringLarga;

    //let stringLarga = strings.sort((a, b) => b.length - a.length);
    //return stringLarga[0];
   
  }


  function numeroSimetrico(num) {
    // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
    // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
    // Un número es simétrico cuando es igual a su reverso.
    // Ej:
    // numeroSimetrico(11711) devuelve true
  
    // Tu código:
  
    let nuevoNumero = num.toString().split('').reverse().join('');
    if (nuevoNumero == num) return true;
    return false;
  }

  function buscarAmigo(amigos, nombre) {
    // La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
    // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
    // recibe un string llamado 'nombre'.
    // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
    // Ej:
    //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
    //  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };
  
    // Tu código aca:
  
    let amigoEncontrado = {}
  
    for(let i = 0; i < amigos.length; i++){
      if(amigos[i].nombre === nombre){
        amigoEncontrado = amigos[i];
      }
    }  
    return amigoEncontrado;
  }

  function pluck(array, propiedad) {
    // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
    // propiedad.
    // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
    // Ej:
    // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
    // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
    // Pista: es una buena oportunidad para usar map.
  
    // Tu código acá:
  
    let nuevoArray = array.map((elementos) => elementos[propiedad]);
    return nuevoArray;
  
  }


  function crearClasePersona() {
    class Persona {
      constructor(nombre, edad, hobbies, amigos) {
        // El constructor de la clase Persona recibe nombre (string), edad (integer), hobbies (array de strings), amigos (array de objetos)
        // Inicializar las propiedades de la persona con los valores recibidos como argumento
  
        // Tu código aca:
  
        this.nombre = nombre;
        this.edad = edad;
        this.hobbies = hobbies;
        this.amigos = amigos;
  
      }
  
      addFriend(nombre, edad) {
        // El método 'addFriend' recibe un string 'nombre' y un entero 'edad' y debe agregar un objeto:
        // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
        // No debe retornar nada.
  
        // Tu código aca:
  
        this.amigos.push({
          nombre: nombre,
          edad: edad
        })
  
      }
  
      addHobby(hobby) {
        // El método 'addHobby' recibe un string 'hobby' y debe agregarlo al arreglo de hobbies de la persona.
        // No debe retornar nada.
  
        // Tu código aca:

        
  
        this.hobbies.push(hobby);
  
      }
      getFriends() {
        // El método 'getFriends' debe retornar un arreglo con sólo los nombres del arreglo de amigos
        // de la persona.
        // Ej:
        // Suponiendo que la persona tiene estos amigos: [{nombre: 'martin', edad: 31},{nombre: 'toni', edad: 33}]
        // persona.getFriends() debería devolver ['martin', 'toni']
  
        // Tu código aca:
  
        return this.amigos.map((elementos) => elementos.nombre);
      
  
      }
  
      getHobbies() {
        // El método 'getHobbies' debe retornar un arreglo con los hobbies de la persona
        // Ej:
        // persona.getHobbies() debe devolver ['correr', 'dormir', 'nadar']
  
        // Tu código aca:
  
        // let array = [];
        // for(let i = 0; i < this.hobbies.length; i++){
        //   array.push(this.hobbies[i].hobby)
        // } return array;

        //return this.hobbies;
  
        return Object.values(this.hobbies);
  
      }
  
      getPromedioEdad() {
        // El método 'getPromedioEdad' debe retornar el promedio de edad de los amigos de una persona
        // Ej:
        // Si la persona tuviera estos amigos:
        // {
        //   amigos: [{
        //     nombre: 'toni',
        //     edad: 33,
        //   }, {
        //     nombre: 'Emi',
        //     edad: 25
        //   }]
        // }
        // persona.getPromedioEdad() debería devolver 29 ya que (33 + 25) / 2 = 29
  
        // Tu código aca:
  
        let resultado = 0;
  
        for(let i = 0; i < this.amigos.length; i++ ){
          resultado = resultado + this.amigos[i].edad;
        }
        return resultado / this.amigos.length
      }
    };
  
    return Persona;
  }

  function filtrar(funcion) {
    // Escribi una función filtrar en el prototipo de Arrays,
    // que recibe una funcion (callback) que devuelve true o false.
    // filtrar los elementos de ese arreglo en base al resultado de esa funcion
    // comparadora, devolver un nuevo arreglo con los elementos filtrados.
    // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
    // ej:
    // var productos = [{
    //   price: 100,
    //   name: 'tv'
    // }, {
    //   price: 50,
    //   name: 'phone'
    // }, {
    //   price: 30,
    //   name: 'lamp'
    // }]
    // productos.filtrar(function(p) {
    //   return p.price >= 50;
    // }) => [{price: 100, name:'tv'}]
  
    Array.prototype.filtrar = function(cb) {
      
      let resultado = [];                                 //Nuevo arreglo donde iran los elementos que dan true.  
      for(let i = 0; i < this.length; i++){
        if(cb(this[i]) === true) resultado.push(this[i]);  //Si los elementos del arreglo(this[i]) de la funcion CB
      }                                                    // son iguales a TRUE, entonces enviarlo al nuevo arreglo.
      return resultado;
    }
  };

  /**********************************************************************************************************************/

  function fakeBinary2(string) {
    // La funcion llamada 'fakeBinary' recibe como argumento un string con numeros
    // y debe devolver un string en donde se remplaza los numeros menores de 5 con '0'
    // y los numeros iguales o mayores a 5 con '1'
    // Por ej:
    // fakeBinary2('5627') devuelve "1101"
    // fakeBinary("729") devuelve "101"
    // Tu código aca:
  
    // let numero = string.split("")
    // for (i =0 ; i < numero.length ; i++){
    //   parseInt(numero[i]) < 5? numero[i] = 0 : numero[i] = 1
    // }
    //  numero = numero.join('')
    //  return numero

    let numero = string.split('');
    for(let i = 0; i < numero.length; i++){
        if(parseInt(numero[i]) < 5){
            numero[i] = 0;
        } else {
            numero[i] = 1
        }
    }
    return numero.join('')

  }

  console.log(fakeBinary2('5627'))
  console.log(fakeBinary2('729'))


  function loboEstaONoEsta(array) {
    // La funcion recibe un array 'array' de strings y numeros  como parametro
    // la funcion debe retornar true o false dependiendo de si 'lobo' esta en el array o no
    // Por ej:
    // loboEstaONoEsta(['hola', 1, 3,  'palabra']) debe devolver false
    // ideas(['hola', 'buena', 'lobo', 4, 5, ]) debe devolver true
    // Tu código aca:

    return array.includes("lobo")    //includes()

    // for(let i = 0; i < array.length; i++){          //con bucle for
    //     if(array.includes('lobo')) return true;
    //     return false;
    // }

    // for(let i = 0; i < array.length; i++){        //con EXPRESION REGULAR
    //     if(/lobo/.test(array)) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }    
}

function pedirComida(array) {
  // la funcion recibe un array de objetos en donde se detalla nombre y tipo de dieta de los integrantes de un meeting
  // debe retornar un objeto que diga cuantos menus de que tipo de dieta hay que pedir
  // (a fines practicos solo hay dieta "standard" y "vegan")
  // Por ej:
  // pedirComida([{nombre: "Harry", dieta: "standard"}, {nombre: "Luna", dieta: 'vegan'}, {nombre: "Goyle", dieta: "standard"}])
  // retorna {standard: 2, vegan: 1}
  // Tu código aca:

  let standar = 0;
  let vegan = 0;

  for(let i = 0; i < array.length; i++){
      if(array[i].dieta === 'vegan'){
          vegan++;
      } else {
          standar++
      }
  }
  return {
      vegan: vegan,
      standar: standar
  }
}

console.log(pedirComida([
{nombre: "Harry", dieta: "standard"}, 
{nombre: "Luna", dieta: 'vegan'}, 
{nombre: "Goyle", dieta: "standard"}]))

function cuantosMenores(invitados) {
  // La funcion llamada recibe como argumento un objeto 'invitados', en el objeto tenemos objetos que representan los invitados
  // a una fiesta en donde todos tienen una propiedad "edad" .
  // debe retornar la cantidad de invitados que son menores de 18.
  // Por ej:
  // let invitados = {
  //     Luna: {
  //         edad: 25
  //     },
  //     Sebas: {
  //         edad: 7
  //     },
  //     Marce: {
  //         edad: 34

  //     },
  //     Nicky: {
  //         edad: 15
  //     }
  // };
  // cuantosMenores(invitados) devuelve 2
  // Tu código aca:

 let menores = 0
 
  for (prop in invitados){

 if (invitados[prop].edad <  18) { menores ++} 
  }
  
return menores;

}
console.log(cuantosMenores({
  Luna: {edad: 25},
  Sebas: {edad: 7},
  Marce: {edad: 34},
  Nicky: {edad: 15}
}))


function crearClaseMascota() {
  class Mascota {
    constructor(nombre, dueño, actividades) {
      // El constructor de la clase Mascota recibe nombre (string), dueño (objeto), actividades (array de objetos)
      // ej:
      //[{actividad: 'salir a caminar', frecuencia: '1 vez al dia'}, {actividad: 'baño', frecuencia: '1 vez al mes'}]
      // Inicializar las propiedades de la mascota con los valores recibidos como argumento
      // Tu código aca:
      
      this.nombre = nombre;
      this.dueño = dueño;
      this.actividades = actividades;       

    }

    getNombre() {
      // este método debe retornar el nombre de la mascota.
      // Tu código aca:

      return this.nombre
      
    }

    getDueño() {
      // El método debe retornar nombre y apellido del dueño (concatenados).
      // Tu código aca:

      return Object.values(this.dueño).join(' ');
     
    
    }

    addActividad(actividad, frecuencia) {
      // El método recibe un string 'actividad' y otro string 'frecuencia'  y debe agregarlo al arreglo de actividades de la mascota.
      // No debe retornar nada.
      // Tu código aca:

      this.actividades.push({actividad: actividad, frecuencia: frecuencia}); 

    }

    getActividades() {
      // El método debe retornar un arreglo con sólo las actividades de las mascotas.
      // Ej:
      // [{actividad: 'salir a caminar', frecuencia: '1 vez al dia'}, {actividad: 'baño', frecuencia: '1 vez al mes'}]
      // mascotas.getActividades() debería devolver ['salir a caminar, 'baño']
      // Tu código aca:

      let array = []
      for(let i = 0; i < this.actividades.length; i++){
          array.push(this.actividades[i].actividad)
      }
      return array;

      // let nuevoArray = Object.values(actividades)
      // return nuevoArray;

    }

    getFrecuencia(actividad) {
      // El metodo debe retornar la frecuencia de dicha actividad
      // ej:
      // [{actividad: 'salir a caminar', frecuencia: '1 vez al dia'}, {actividad: 'baño', frecuencia: '1 vez al mes'}]
      // mascotas.getFrecuencia('baño') debería devolver '1 vez al mes'
      // Tu código aca:

      return this.actividades.find((objeto) => objeto.actividad == actividad).frecuencia;
       

    }
  }

  return Mascota;
}

