/* const estudiantes = [
  { nombre: "Juan Pérez", edad: 20, pais: "México", notas: [80, 90, 85] },
  { nombre: "María López", edad: 22, pais: "Argentina", notas: [70, 75, 72] },
  { nombre: "Carlos Ramírez", edad: 21, pais: "Chile", notas: [88, 92, 95] },
  { nombre: "Ana Torres", edad: 19, pais: "Perú", notas: [65, 70, 68] },
  { nombre: "Luis Gómez", edad: 23, pais: "Colombia", notas: [90, 93, 97] },
  { nombre: "Fernanda Ruiz", edad: 20, pais: "Bolivia", notas: [85, 80, 88] },
  { nombre: "Pedro Silva", edad: 24, pais: "Uruguay", notas: [60, 65, 70] },
  { nombre: "Sofía Castro", edad: 22, pais: "Ecuador", notas: [95, 92, 96] },
  {
    nombre: "Andrés Fernández",
    edad: 21,
    pais: "Venezuela",
    notas: [78, 82, 80],
  },
  { nombre: "Camila Díaz", edad: 20, pais: "Paraguay", notas: [88, 85, 90] },
  { nombre: "Rodrigo Morales", edad: 23, pais: "México", notas: [70, 75, 72] },
  { nombre: "Valentina Rojas", edad: 19, pais: "Chile", notas: [98, 95, 99] },
  {
    nombre: "Martín Herrera",
    edad: 22,
    pais: "Argentina",
    notas: [85, 87, 83],
  },
  { nombre: "Daniela Paredes", edad: 21, pais: "Perú", notas: [90, 92, 89] },
  { nombre: "Jorge Mendoza", edad: 24, pais: "Colombia", notas: [60, 62, 65] },
  { nombre: "Lucía Aguilar", edad: 20, pais: "Bolivia", notas: [80, 85, 82] },
  { nombre: "Diego Vargas", edad: 23, pais: "Uruguay", notas: [75, 70, 72] },
  { nombre: "Isabella León", edad: 19, pais: "Ecuador", notas: [92, 94, 90] },
  {
    nombre: "Mateo Castillo",
    edad: 21,
    pais: "Venezuela",
    notas: [65, 60, 68],
  },
  { nombre: "Gabriela Soto", edad: 22, pais: "Paraguay", notas: [99, 97, 100] },
];
 */

document.addEventListener("DOMContentLoaded", () => {
  function eliminarFila(boton) {
    const fila = boton.closest("tr");
    const nombre = fila.querySelector("td").innerText;

    const confirmacion = confirm(
      `¿Estás seguro de que deseas eliminar a "${nombre}"?`
    );

    if (confirmacion) {
      fila.remove();
      alert(`Alumno "${nombre}" eliminado correctamente.`);
    }
  }

  function editarFila(boton) {
    const fila = boton.closest("tr");
    const celdas = fila.querySelectorAll("td");

    const nombre = prompt("Nuevo nombre:", celdas[0].innerText);
    const edad = prompt("Nueva edad:", celdas[1].innerText);
    const pais = prompt("Nuevo país:", celdas[2].innerText);

    if (nombre && edad && pais) {
      celdas[0].innerText = nombre;
      celdas[1].innerText = edad;
      celdas[2].innerText = pais;
    }
  }

  function modificarNotas(boton) {
    const fila = boton.closest("tr");
    const celdas = fila.querySelectorAll("td");
    const notasCelda = celdas[3];
    const promedioCelda = celdas[4];

    let notas = notasCelda.innerText.trim().split(" ").map(Number);

    if (notas.length !== 5) {
      alert("El estudiante debe tener exactamente 5 notas para modificarlas.");
      return;
    }

    for (let i = 0; i < 5; i++) {
      const nuevaNota = prompt(
        `Modificar nota ${i + 1} (actual: ${notas[i]}):`,
        notas[i]
      );
      const notaNum = parseInt(nuevaNota);

      if (!isNaN(notaNum) && notaNum >= 0 && notaNum <= 100) {
        notas[i] = notaNum;
      } else {
        alert("Nota inválida. Se mantuvo la nota original.");
      }
    }

    notasCelda.innerText = notas.join(" ");

    const suma = notas.reduce((a, b) => a + b, 0);
    const promedio = Math.round(suma / notas.length);
    promedioCelda.innerText = promedio;
  }

  document.querySelectorAll("tbody tr").forEach((fila) => {
    const botones = fila.querySelectorAll("button");
    botones[0].addEventListener("click", () => eliminarFila(botones[0]));
    botones[1].addEventListener("click", () => editarFila(botones[1]));
    botones[2].addEventListener("click", () => modificarNotas(botones[2]));
  });
});
