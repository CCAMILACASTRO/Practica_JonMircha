// ------------------------------------------------------------------------------------------------------------------//
// **********************************    TIPO DE OPERADORES  ********************************************************//
// ------------------------------------------------------------------------------------------------------------------//

/* ARITMETICOS: +  -  *  /  %  () agrupacion.
- Se operan por orden de precedencia. 1° ()  2° * / %   3° + - de izquierda a derecha */

let a = 5 + 5;
console.log(a) 

let b = 5 + 5 * 5;
console.log(b);

let c = 5 / 2;
console.log(c) // la division devuelve el resultado de su propia division

let modulo = 5 % 2; 
console.log(modulo) // el modulo devuelve lo que sobra de la operacion de division. 

let d = 5 + (5-10) * 3;
console.log(d);

// ------------------------------------------------------------------------------------------------------------------//

/* COMPARACION: 
> mayor que...      >= mayor o igual que...
< menor que...      <= menor o igual que...
= asignacion (lo que esta del lado derecho se lo asigna a lo que esta del lado izquierdo del signo)
== igualdad (compara los valores)
=== (compara valores y tipo de dato)
!= diferente (compara valores)
!== diferente estricto(compara valores y tipo de dato) */

//EJ.
console.log(7 > 5);
console.log(8 < 10);
console.log(8 <= 9);
console.log(7 >= 5);
console.log(7 == '7');
console.log(7 === '7')
console.log(7 === 7);
console.log(8 !== '8');

// ------------------------------------------------------------------------------------------------------------------//

// LOGICOS:

//NOT: Niega, es decir, lo que es verdadero lo vuelve falso y viceversa.

console.log(true);
console.log(!true);

// OR (o): cuando tengo 2 o + condiciones, con que una se cumpla, el OR validara verdadero

console.log((9 === 9) || ('9' === 9)); /*una de las dos se cumplio por eso da resultado true*/


// && (y): cuando tengo 2 o + condiciones, TODAS deben cumplirse para que el && valide verdadero.

console.log((9 === 9) && (9 === '9')); /* da resultado false porque solo se cumple una de las dos. */


