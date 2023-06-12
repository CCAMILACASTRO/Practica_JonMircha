//------------------------------------------------------------------------------------------------------------------//
//****************************************  EJERCICIOS  ************************************************************//
//------------------------------------------------------------------------------------------------------------------//

// ARRAYS:

function devolverPrimerElemento(array) {
    // Retornar el primer elemento del arreglo recibido por parámetro.
    // Tu código:
    return array [0];
 }
 
 function devolverUltimoElemento(array) {
    // Retornar el último elemento del arreglo recibido por parámetro.
    // Tu código:
    return array [array.length -1]; 
 }
 
 function obtenerLargoDelArray(array) {
    // Retornar la longitud del arreglo recibido por parámetro.
    // Tu código:
    return array.length; 
 }
 
 function incrementarPorUno(array) {
    // El arreglo recibido por parámetro contiene números.
    // Retornar un arreglo con los elementos incrementados en +1.
    // Tu código:
    for (var i = 0; i < array.length; i++){
       array [i] += 1; 
    }
    return array; 
 }
 
 function agregarItemAlFinalDelArray(array, elemento) {
    // Agrega el "elemento" al final del arreglo recibido.
    // Retorna el arreglo.
    // Tu código:
    array.push(elemento);
    return array; 
 }
 
 function agregarItemAlComienzoDelArray(array, elemento) {
    // Agrega el "elemento" al comienzo del arreglo recibido.
    // Retorna el arreglo.
    // Tu código:
    array.unshift(elemento);
    return array;
 }
 
 function dePalabrasAFrase(palabras) {
    // El argumento "palabras" es un arreglo de strings.
    // Retornar un string donde todas las palabras estén concatenadas
    // con un espacio entre cada palabra.
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
    // Tu código:
       array = palabras.join(' ');
       return array;
 }
 
 function arrayContiene(array, elemento) {
    // Verifica si el elemento existe dentro del arreglo recibido.
    // Retornar true si está, o false si no está.
    // Tu código:
    
     if (array = array.includes(elemento)) {
        return true;
     } else {
        return false;
     }
    } 
 
 function agregarNumeros(arrayOfNums) {
    // El parámetro "arrayOfNums" debe ser un arreglo de números.
    // Suma todos los elementos y retorna el resultado.
    // Tu código:
    let resultado = 0; 
 
    for(var i = 0; i < arrayOfNums.length; i++){ 
       resultado += arrayOfNums[i]
    }
    return resultado;    
    }
 
 function promedioResultadosTest(resultadosTest) {
    // El parámetro "resultadosTest" es un arreglo de números.
    // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
    // Tu código:
    let resultado = 0;
    for(var i = 0; i < resultadosTest.length; i++) {
       resultado += resultadosTest [i] 
    }
    return resultado / resultadosTest.length;
 }
 
 function numeroMasGrande(arrayOfNums) {
    // El parámetro "arrayOfNums" es un arreglo de números.
    // Retornar el número más grande.
    // Tu código:
  let mayor = arrayOfNums[0];
  for(let i = 1; i < arrayOfNums.length; i++) {
    if(arrayOfNums [i] > mayor) {
       mayor = arrayOfNums [i];
    }
  }  
  return mayor; 
 }
 
 function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
    // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
    // [PISTA]: "arguments" es un arreglo.
    // Tu código:
    if (arguments.length === 0) return 0;
    if (arguments.length === 1) return arguments[0];
 
    let resultado = arguments[0];
    for(let i = 1; i < arguments.length; i++) {
       resultado = resultado * arguments[i];
    }
    return resultado;
 }
 
 function cuentoElementos(array) {
    // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
    // Tu código:
    let mayoresA18 = 0;
 
    for(let i = 0; i < array.length; i++) {
       if(array[i] > 18) {
          mayoresA18 = mayoresA18 +1
       }
    }
    return mayoresA18;
 }
 
 function diaDeLaSemana(numeroDeDia) {
    // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
    // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
    // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
    // Tu código:
 
    if (numeroDeDia === 7 || numeroDeDia === 1) {
       return 'Es fin de semana';
    } 
    if (numeroDeDia === 2 || numeroDeDia === 3 || numeroDeDia === 4 || numeroDeDia === 5 || numeroDeDia === 6) {
       return 'Es dia laboral';
    }
 }
 
 function empiezaConNueve(num) {
    // Esta función recibe por parámetro un número.
    // Debe retornar true si el entero inicia con 9 y false en otro caso.
    // Tu código:
 
   if (num.toString()[0] === '9') return true;
   return false;
 }
 
 function todosIguales(array) {
    // Si todos los elementos del arreglo son iguales, retornar true.
    // Caso contrario retornar false.
    // Tu código:
    
    let numeros = array[0];
    for(let i = 0; i < array.length; i++){
       if (array[i]!== numeros){
          return false;
       } 
      
    }
    return true;
 
 }
 
 function mesesDelAño(array) {
    // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
    // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
    // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
    // Tu código:
 
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++){
       if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre'){
          nuevoArray.push(array[i])
       }
    }
    if (nuevoArray.length === 3) return nuevoArray;
    return 'No se encontraron los meses pedidos';      
    
 }
 
 function tablaDelSeis() {
    // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
    // Tu código:
 
    let multiplosDeSeis = [];
    for (let i = 0; i <= 10; i++){
       multiplosDeSeis.push(i * 6);
    }
    return multiplosDeSeis;
     
 }
 
 function mayorACien(array) {
    // La función recibe un arreglo con enteros entre 0 y 200.
    // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
    // Tu código:
 
    let mayores = [];
 
    for(let i = 0; i < array.length; i++){
       if(array[i] > 100){
          mayores.push(array[i]);
       }
    }
 return mayores;
    
 }

 function sortArray(arrayOfStrings) {
    // Recibes un arreglo de strings.
    // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
    // de la longitud de cada string.
    // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
    // Tu código:
 
    arrayOfStrings = arrayOfStrings.sort((a, b) => a.length - b.length);
    return arrayOfStrings;
 
 }
 
 function buscoInterseccion(array1, array2) {
    // Recibes dos arreglos de números.
    // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
    // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
    // Si no tienen elementos en común, retornar un arreglo vacío.
    // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
    // Tu código:
 
    let newArray = [];
 
    for(let i = 0; i < array1.length; i++) {
       if(array2.includes(array1[i]) && !newArray.includes(array1[i])){
          newArray.push(array1[i]);
       }
    }
    return newArray;  
 
 }
 
 /* ----------------------------------------------------------------------------------
 💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
 -------------------------------------------------------------------------------------*/
 
 function breakStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un arreglo y retornarlo.
    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
    // la ejecución y retornar el string: "Se interrumpió la ejecución".
    // [PISTA]: utiliza el statement 'break'.
    // Tu código:
 
    let valor = []
    for (let i = 0; i < 10; i++){
       valor.push(num += 2)
       if (i === num){
          break;
       }
    }
    if (valor.length < 9) return "Se interrumpió la ejecución";
    return valor 
         
 }
 
 function continueStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un array y retornarlo.
    // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
    // se continua con la siguiente iteración.
    // [PISTA]: utiliza el statement 'continue'.
    // Tu código:
 
    let valor = []
    for (let i = 0; i < 10; i++){
       if (i === 5){
          continue;
       }
       valor.push(num += 2)
    }
    return valor;
 }


//Recibes un arreglo de un arreglo. Junta ambos arreglos en un solo con flat(). APLANA LOS ARREGLOS EN UNO.

function juntarArreglo(array){
   return array.flat()
}

console.log(juntarArreglo([1,2,3,[4,5]]));

//Recibes un arreglo de letras y numeros. Crear un nuevo arreglo que contenga solo los números del arreglo.

function arregloDeNumeros(array){
   return array.flatMap(n => typeof n !== 'number' ? [] : n )
}

console.log(arregloDeNumeros([1, 'a', 2, 'b', 3, 'c']));

/* --------------------------------------------------------- */

function arregloDeNumeros2(array){
   let nuevoArray7 = array.flatMap((n) => {
      if(typeof n !== 'number') return [];
      return n;
   })
   return nuevoArray7
}

console.log(arregloDeNumeros2([1, 'a', 2, 'b', 3, 'c']));


//Recibes un arreglo de letras y numeros. Crear un nuevo arreglo que contenga solo las letras del arreglo.

function arregloDeString(array){
   return array.flatMap(str => typeof str === 'string' ? str : [] )
}

console.log(arregloDeString([1, 'a', 2, 'b', 3, 'c']));

/* --------------------------------------------------------- */

function arregloDeString2(array){
   let nuevoArray6 = array.flatMap((str) => {
      if(typeof str === 'string') return str;
      return []
   })
   return nuevoArray6;
}

console.log(arregloDeString2([1, 'a', 2, 'b', 3, 'c']));


/*___________________________________________________________________________________________________________________*/

/*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. */

function numerosAlCuadrado(array){
   let numeros = array.map((num)=> Math.pow(num, 2));
   return numeros;
}

console.log(numerosAlCuadrado([1, 4, 5]));

/*22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */

function numeroAltoYBajo(array){

   let numeroMayor = array[0]
   let numeroMenor = array[0]

   for(let i = 0; i<array.length; i++){
      if(array[i] > numeroMayor){
         numeroMayor = array[i]
      } else if(array[i]< numeroMenor){
         numeroMenor = array[i]
      }
   }
   return [numeroMayor, numeroMenor]
}
console.log(numeroAltoYBajo([1, 4, 5, 99, -60]))

/*------------------------------------------------*/
//Otra forma corta de resolverlo:

function numeroMinMax(array){
   return (`Valor maximmo: ${Math.max(...array)}, Valor minimo: ${Math.min(...array)}`);
}
console.log(numeroMinMax([1, 4, 5, 99, -60]))

/*23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos: en el primero almacena 
los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], 
   impares: [1,3,5,7,9]}. */

   function arrayDeNumeros(array){
      let numerosPares = [];
      let numerosImpares = [];
      
      for(let i = 0; i < array.length; i++){
         if(array[i] %2 === 0) numerosPares.push(array[i])
         if(array[i] %2 === 1) numerosImpares.push(array[i])
         }
         
      return {
         pares: numerosPares,
         impares: numerosImpares
      }
   }

   console.log(arrayDeNumeros([1,2,3,4,5,6,7,8,9,0]));

   /*------------------------------------------------*/
//Otra forma corta de resolverlo:

function separarParImpar(array) {
   return ({
      pares: array.filter(num => num %2 === 0),
      impares: array.filter(num => num %2 === 1),
   })
}
console.log(separarParImpar([1,2,3,4,5,6,7,8,9,0]))


/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los 
numeros ordenados en forma ascendente y el segundo de forma descendiente, 
pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/

function ordenarNumeros(array){
   return ({
      ascendente: array.map(num => num).sort(),
      descendente: array.map(num => num).sort().reverse(),
   })

}
console.log(ordenarNumeros([7, 5,7,8,6]))


/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].*/

function eliminarDuplicados(array){

   let newArray = [];

   for(let i=0; i<array.length; i++){
      if(!newArray.includes(array[i])){
         newArray.push(array[i])
      }
   }
   return newArray
}
console.log(eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]));

/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) 
devolverá 4.5. */

function promedioNumeros(array) {

   let suma = array.reduce((acumulador, num)=> acumulador + num, 0);
   let promedio = suma / array.length;
   return promedio;
}
console.log(promedioNumeros([9,8,7,6,5,4,3,2,1,0]))


