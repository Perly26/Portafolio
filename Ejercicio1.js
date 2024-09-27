//Realizar un programa en JavaScript con lo aprendido en clases 
//Que permita ingresar un número por pantalla y saber si es un 
//Número par o número impar.

//Mensaje que se mostrará en pantalla
let numero = prompt("Ingrese un número por favor: ", "");
numero = Number(numero);

//Verificar si el número que fue ingresado es un valor númerico
if (isNaN(numero)) {
    console.log("Por favor, ingrese un número válido.");
// Verificar si el número es par o impar    
} else {
//Si el residuo de la división del número ingresado y 2 es 
//Igual a cero, el número es par, de lo contrario es impar
    if (numero % 2 === 0) {
        console.log(`El número ${numero} es par.`);
    } else {
        console.log(`El número ${numero} es impar.`);
    }
}
