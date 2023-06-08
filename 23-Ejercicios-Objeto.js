//------------------------------------------------------------------------------------------------------------------//
//****************************************  EJERCICIOS  ************************************************************//
//------------------------------------------------------------------------------------------------------------------//

// OBJETOS:

function crearGato(nombre, edad) {
    // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
    // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
    // Además, agregar una propiedad con el nombre "meow".
    // La propiedad "meow" será una función que retorne el string: "Meow!".
    // Retornar el objeto.
    // Tu código:
 
    let objeto = {
       nombre: nombre, 
       edad: edad,
       meow: function(){ 
          return "Meow!" 
       }
    }
    return objeto   
 };
 
 function nuevoUsuario(nombre, email, password) {
    // Debes crear un nuevo objeto.
    // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
    // Retornar el objeto.
    // Tu código:
 
    let usuario = {
       nombre: nombre,
       email: email, 
       password: password
    }
    return usuario; 
 };
 
 function agregarPropiedad(objeto, propiedad) {
    // Recibirás un objeto por parámetro.
    // Debes agregarle una propiedad con el nombre recibido por parámetro.
    // Esta propiedad será igual al valor `null`.
    // Retornar el objeto.
    // Tu código:
 
    objeto[propiedad] = null
    return objeto 
 
 }
 
 function invocarMetodo(objeto, metodo) {
    // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
    // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
    // [NOTA]: no necesitar retornar nada.
    // Tu código: 
 
    objeto[metodo](); 
    
    
 }
 
 function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
    // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
    // Debes multiplicar este número por 5 y retornar el resultado.
    // Tu código:
    
    let resultado = objetoMisterioso.numeroMisterioso * 5
    return resultado;
 }
 
 function eliminarPropiedad(objeto, propiedad) {
    // El parámetro "propiedad" es una propiedad del objeto que recibes.
    // Debes eliminarla del objeto y retornarlo finalmente.
    // Tu código:
 
 delete objeto[propiedad]
 return objeto
 
 }
 
 function tieneEmail(objetoUsuario) {
    // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
    // En ese caso retornar true. Caso contrario, false.
    // Tu código:
 
      
    if (objetoUsuario['email']) return true;
    return false;
 
 }
 
 function tienePropiedad(objeto, propiedad) {
    // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
    // En ese caso retornar true. Caso contrario, false.
    // Tu código:
 
    if (objeto[propiedad]) return true;
    return false;
 
 }
 
 function verificarPassword(objetoUsuario, password) {
    // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
    // En ese caso retornar true. Caso contrario, false.
    // Tu código:
 
    if (objetoUsuario['password'] === password) return true;
    return false;   
 
 }
 
 function actualizarPassword(objetoUsuario, nuevaPassword) {
    // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
    // La nueva contraseña la recibes por parámetro.
    // Retornar el objeto.
    // Tu código:
 
    objetoUsuario.password = nuevaPassword
    return objetoUsuario;
 
 }
 
 function agregarAmigo(objetoUsuario, nuevoAmigo) {
    // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
    // Debes agregar el "nuevoAmigo" al final de este arreglo.
    // Retornar el objeto.
    // Tu código:
    
    
    objetoUsuario.amigos.push(nuevoAmigo)
    return objetoUsuario;
 }
 
 function pasarUsuarioAPremium(objetoMuchosUsuarios) {
    // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
    // Cada usuario tiene una propiedad llamada "esPremium".
    // Define esta propiedad de todos los usuarios como true.
    // Retornar el arreglo.
    // Tu código:
 
    let nuevoUsuario = objetoMuchosUsuarios.map((usuarios) => {
       return {
          esPremium : true
       }
    })
    return nuevoUsuario  
 }
 
 function sumarLikesDeUsuario(objetoUsuario) {
    // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
    // Este arreglo contiene objetos (post).
    // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
    // Debes sumar los likes de todos los post y retornar el resultado.
    // Tu código:
 
    let sumaLikes = 0;
                      // hasta la cantidad de posteos que haya con los likes adentro.
    for(let i = 0; i < objetoUsuario.posts.length; i++) {
       sumaLikes = sumaLikes + objetoUsuario.posts[i].likes; // Le sumo el numero de Like ubicado en la posicion de i  
    }                                                       // dentro de la prpopiedad del objeto.
    return sumaLikes; 
 }
 
 function agregarMetodoCalculoDescuento(objetoProducto) {
    // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
    // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
    // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
    // Luego debes restar del precio total del producto ese valor de descuento.
    // Retornar el precio final.
    // Ejemplo:
    // Precio ---> 10
    // PorcentajeDeDescuento ---> 0.2
    // Precio final ---> 8
    // Tu código:
    
    objetoProducto.calcularPrecioDescuento;
    objetoProducto.calcularPrecioDescuento = function() {  // Asi agregamos una funcion a la propiedad.
       let descuento = this.precio * this.porcentajeDeDescuento  // creamos la variable descuento para guardar el precio 
       let precioFinal = this.precio - descuento                 // del produto por el procentaje de descuento
       return precioFinal;                                       //Guardamos los resultados en variables.      
    }                                                            // Luego restamos al precio el descuento
    return objetoProducto;
 }

 function deObjetoAarray(objeto) {
    // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
    // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
    // Estos elementos debe ser cada par clave:valor del objeto recibido.
    // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
    // Tu código:
 
    let array = [];
 
    for ( let clave in objeto) {
       let newArray = [clave, objeto[clave]]
       array.push(newArray);
    }
    return array;
    
 }

 function numberOfCharacters(string) {
    // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
    // letras del string, y su valor es la cantidad de veces que se repite en el string.
    // Las letras deben estar en orden alfabético.
    // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
    // Tu código:
 
    let objetoRetornado = {};
    let stringOrdenado = string.split('').sort();
    
    for (i = 0; i < stringOrdenado.length; i++) {
       if (objetoRetornado[stringOrdenado[i]]){
          objetoRetornado [stringOrdenado[i]] +=1 ;
       } else {
          objetoRetornado[stringOrdenado[i]] = 1 ;
       }
    };
    return objetoRetornado;
 }

 