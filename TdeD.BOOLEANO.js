//------------------------------------------------------------------------------------------------------------------//
//********************************************* BOOLEANOS **********************************************************//
//------------------------------------------------------------------------------------------------------------------//

let verdadero = true;
let falso = false; // estan en azul porque son palabras reservadas.
console.log(typeof verdadero, typeof falso);    

Boolean(' ') // false
Boolean('texto') // true
Boolean(1) // true
Boolean({}) // true
Boolean(0) // false
Boolean(-1) // true
Boolean(true) // true
Boolean([]) // true
Boolean(false) // false
Boolean('string') // true
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false

console.log(Boolean())