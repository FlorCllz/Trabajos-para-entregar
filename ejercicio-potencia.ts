/*Realice un programa que devuelva la potencia de un número. 
La base y el exponente deben ser ingresados por teclado. 
Sólo deben admitirse exponentes mayores o iguales a cero. 
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos.
*/

import * as readlineSync from 'readline-sync';
let base : number = readlineSync.questionInt("Ingrese base: ");
let exponente : number = readlineSync.questionInt("Ingrese el exponente: "); 
let resultado = potencia (base,exponente);
console.log (resultado);

function potencia(base : number, exponente: number){
    if (exponente >= 0) {    
    return base ** exponente
    } else {
        console.log ("Ingrese un exponente mayor a 0")
    }
}