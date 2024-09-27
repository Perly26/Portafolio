//Construir un programa permita calcular e imprimir el resultado de la siguiente sumatoria:
//S = 500 + 456 + 510 + 454 + 520 + 452 + ... + 800

//Variables contadores de suma, que acumulan los numeros y de los número de inicio de la secuencia
let suma1 = 0;
let suma2 = 0;
let num1 = 500;
let num2 = 456;

//Verifica que el numero llegue hasta 800
while (num1 <= 800) {
    // Sumar el valor de num1 a la variable suma1, incrementa el num1 en 10 para la secuencia
    suma1 += num1; 
    num1 += 10;

    // Sumar el valor de num2 a la variable suma2, disminuye el num2 por 2 para la secuencia
    suma2 += num2;  
    num2 -= 2;   
} 

//Operación para calcular el valor total de la secuencia una vez finalizada
let sumatotal = suma1 + suma2;

//Mensaje del resultado final de la sumatoria
console.log("El resultado de la sumatoria es:", sumatotal);
