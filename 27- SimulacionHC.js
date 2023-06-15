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

