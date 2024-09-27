//Crear un algoritmo capaz de solicitar 3 notas de un alumno por 
//Pantalla y obtener el promedio ponderado. Este promedio 
//Ponderado es de la siguiente forma:
//Nota 1 = 40%
//Nota 2 = 30% 
//Nota 3 = 30%
//Si el estudiante obtiene un promedio inferior a 3.95 se debe 
//Imprimir por pantalla que ha reprobado la asignatura, si obtuvo 
//un promedio entre 3.95 a 4.94 el estudiante va a examen. Si la 
//Nota es igual o superior a 4.95 el alumno se exime de la asignatura.

//Solicitar las 3 notas del alumno por pantalla con sus respectivos porcentajes
let nota1 = Number(prompt("Ingrese la primera nota (40%): ", ""));
let nota2 = Number(prompt("Ingrese la segunda nota (30%): ", ""));
let nota3 = Number(prompt("Ingrese la tercera nota (30%): ", ""));

//Verificar que las notas esten dentro del rango de 1 a 7, también puede ser 1.7, etc.
if (isNaN(nota1) || nota1 < 1 || nota1 > 7) {
    console.log("La primera nota debe ser un número entre 1 y 7.");
} else if (isNaN(nota2) || nota2 < 1 || nota2 > 7) {
    console.log("La segunda nota debe ser un número entre 1 y 7.");
} else if (isNaN(nota3) || nota3 < 1 || nota3 > 7) {
    console.log("La tercera nota debe ser un número entre 1 y 7.");
} else {
    
    //Calcular el promedio final sumando las notas
    let promedio = (nota1 * 0.40) + (nota2 * 0.30) + (nota3 * 0.30);

    //Mensaje para mostrar el promedio agregando el toFixed(2) por el tema de decimales
    console.log(`El promedio ponderado del alumno es: ${promedio.toFixed(2)}`);

    //Identificar si el estudiante va a examen, pasa la asignatura o reprueba
    if (promedio < 3.95) {
        console.log("El estudiante ha reprobado la asignatura.");
    } else if (promedio >= 3.95 && promedio < 4.95) {
        console.log("El estudiante debe ir a examen.");
    } else {
        console.log("El estudiante se exime de la asignatura.");
    }
}
