//Variable para las tarifas por hora para ambos turnos, diurno y nocturno
const tarifaDiurna = 12000;
const tarifaNocturna = 16000;

//Variable con los datos de los 3 empleados, con el dia y turno que les corresponde
const empleados = {
  "Empleado 1": [
    { dia: "Lunes", turno: "nocturno" },
    { dia: "Martes", turno: "nocturno" },
    { dia: "Miércoles", turno: "nocturno" },
    { dia: "Jueves", turno: "diurno" },
    { dia: "Viernes", turno: "diurno" }
  ],
  "Empleado 2": [
    { dia: "Martes", turno: "nocturno" },
    { dia: "Miércoles", turno: "nocturno" },
    { dia: "Jueves", turno: "nocturno" },
    { dia: "Domingo", turno: "diurno" }
  ],
  "Empleado 3": [
    { dia: "Miércoles", turno: "diurno" },
    { dia: "Jueves", turno: "diurno" },
    { dia: "Viernes", turno: "diurno" },
    { dia: "Sábado", turno: "nocturno" },
    { dia: "Domingo", turno: "nocturno" }
  ]
};

//Calcular el salario diario según el turno
function obtenerSalario(turno, dia) {
  //Determinar la tarifa base según el turno
  let salarioPorHora = turno === "diurno" ? tarifaDiurna : tarifaNocturna;

  //Incrementar si es domingo según el turno
  if (dia === "Domingo") {
    salarioPorHora += turno === "diurno" ? 2000 : 3000;
  }

  return salarioPorHora * 10;
}

//Calcular y mostrar el pago semanal para cada empleado
for (let empleado in empleados) {
  let totalSemanal = 0;
  console.log(`Pagos para ${empleado}:`);

  empleados[empleado].forEach(turno => {
    const salarioDiario = obtenerSalario(turno.turno, turno.dia);
    totalSemanal += salarioDiario;
    console.log(`${turno.dia} (${turno.turno}): ${salarioDiario} CLP`);
  });

  console.log(`Total semanal: ${totalSemanal} CLP`);
}
