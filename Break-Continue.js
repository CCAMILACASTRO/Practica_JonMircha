/*----------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/

// BREAK:
/* Permite salirse de la estructura en la que esta si se cumple la condicion, y luego se corta y sale del FOR */

let numeros = [1,2,3,4,5,6,7,8,9,0]

for(let i = 0; i < numeros.length; i++) {
    if(i === 5){
        break;            /* Cuando i valga 5, sale del for */
    }                     
    console.log(numeros[i])  /* Mientras i no valga 5, imprime el valor de la posicion de i */
}

// CONTINUE:
/* No sale de la estructura, sino que OMITE el codigo que se ejecuta en esa iteracion si la condicion se cumple,
luego CONTINUA con el resto de los elementos que no cumplen con la condicion */

for(let i = 0; i < numeros.length; i++) {
    if(i === 5){
        continue;
    }
    console.log(numeros[i])
}

//EJ: imprimir solo numeros pares.

for(let i = 0; i < numeros.length; i++) {
    if(i %2  === 0){
        continue;
    }
    console.log(numeros[i])
}

//EJ: imprimir solo numeros imprares.

for(let i = 0; i < numeros.length; i++) {
    if(i %2  === 1){
        continue;
    }
    console.log(numeros[i])
}

