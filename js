// ================================================
// SECCIÓN A: Variables y Salida
// ================================================

// Datos del alumno
const nombreAlumno = "sandra guadalupe jimenez perez";
const matriculaAlumno = "100023807";
const carreraAlumno = "licenciatura en sistemas computacionales";
const semestreAlumno = "5 Semestre";

document.getElementById('btnMostrarInfo').addEventListener('click', () => {
    const contenedorSalida = document.getElementById('salidaDatos');
    
    // Uso de template literals para formatear la salida
    const mensajeInfo = `Alumno: ${nombreAlumno} | Matrícula: ${matriculaAlumno} | Carrera: ${carreraAlumno} | Semestre: ${semestreAlumno}`;
    
    // 1. Uso de console.log() - Registro de datos del alumno
    console.log("[Sección A] Datos del alumno mostrados:", {
        nombre: nombreAlumno,
        matricula: matriculaAlumno,
        carrera: carreraAlumno,
        semestre: semestreAlumno
    });

    contenedorSalida.textContent = mensajeInfo;
});


// ================================================
// SECCIÓN B: Calculadora de Calificaciones
// ================================================

document.getElementById('btnCalcularPromedio').addEventListener('click', () => {
    const p1 = parseFloat(document.getElementById('parcial1').value);
    const p2 = parseFloat(document.getElementById('parcial2').value);
    const p3 = parseFloat(document.getElementById('parcial3').value);
    const divResultado = document.getElementById('resultadoCalificacion');

    // Validación de entradas
    if (isNaN(p1) || isNaN(p2) || isNaN(p3)) {
        divResultado.textContent = "Por favor, ingresa las 3 calificaciones válidas.";
        divResultado.className = "fw-bold fs-5 text-warning";
        return;
    }

    // Cálculo del promedio
    const promedio = (p1 + p2 + p3) / 3;
    const promedioFormateado = promedio.toFixed(2);

    // 2. Uso de console.log() - Registro del cálculo intermedio
    console.log(`[Sección B] Parciales: [${p1}, ${p2}, ${p3}] -> Promedio obtenido: ${promedioFormateado}`);

    // Evaluación de aprobación (≥ 70)
    if (promedio >= 70) {
        divResultado.textContent = `Aprobado con un promedio de ${promedioFormateado}`;
        divResultado.className = "fw-bold fs-5 text-success";
    } else {
        divResultado.textContent = `Reprobado con un promedio de ${promedioFormateado}`;
        divResultado.className = "fw-bold fs-5 text-danger";
    }
});


// ================================================
// SECCIÓN C: Lista Dinámica
// ================================================

const inputElemento = document.getElementById('inputElemento');
const btnAgregar = document.getElementById('btnAgregar');
const btnLimpiar = document.getElementById('btnLimpiar');
const listaDinamica = document.getElementById('listaDinamica');

// Evento para agregar un elemento
btnAgregar.addEventListener('click', () => {
    const texto = inputElemento.value.trim();

    if (texto !== "") {
        const nuevoLi = document.createElement('li');
        nuevoLi.className = "list-group-item d-flex justify-content-between align-items-center";
        nuevoLi.textContent = texto;

        listaDinamica.appendChild(nuevoLi);
        inputElemento.value = ""; // Limpiar el input

        // 3. Uso de console.log() - Registro del elemento agregado y total actual
        console.log(`[Sección C] Elemento agregado: "${texto}". Total de elementos en lista: ${listaDinamica.children.length}`);
    }
});

// Evento para limpiar la lista completa
btnLimpiar.addEventListener('click', () => {
    listaDinamica.innerHTML = "";
    console.log("[Sección C] Lista limpiada por completo.");
});


// ================================================
// SECCIÓN D: Cambio de Estilos
// ================================================

const seccionEstilos = document.getElementById('seccionEstilos');
const btnAzul = document.getElementById('btnFondoAzul');
const btnVerde = document.getElementById('btnFondoVerde');
const btnAmarillo = document.getElementById('btnFondoAmarillo');
const btnRestaurar = document.getElementById('btnFondoRestaurar');

// Función auxiliar para gestionar la remoción de clases de color
function limpiarClasesFondo() {
    seccionEstilos.classList.remove('bg-custom-azul', 'bg-custom-verde', 'bg-custom-amarillo');
}

btnAzul.addEventListener('click', () => {
    limpiarClasesFondo();
    seccionEstilos.classList.add('bg-custom-azul');
});

btnVerde.addEventListener('click', () => {
    limpiarClasesFondo();
    seccionEstilos.classList.add('bg-custom-verde');
});

btnAmarillo.addEventListener('click', () => {
    limpiarClasesFondo();
    seccionEstilos.classList.add('bg-custom-amarillo');
});

btnRestaurar.addEventListener('click', () => {
    limpiarClasesFondo();
});