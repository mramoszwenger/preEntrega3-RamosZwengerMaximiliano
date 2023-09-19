const formularioCotizaciones = document.querySelector('#formularioCotizaciones');
const usuario = document.querySelector('#usuario');
const correo = document.querySelector('#correo');
const servicio = document.querySelector('#servicio');
const campoTerminales = document.querySelector('#campoTerminales');
const campoServidores = document.querySelector('#campoServidores');
const campoHoras = document.querySelector('#campoHoras');
const inputs = document.querySelectorAll('.form-control');
const botonPresupuesto = document.querySelector('#botonPresupuesto');

let validarForm = false;

// Mostrar Cotización

const resultado = document.querySelector('#resultado')
const resultadoTexto = document.querySelector('#resultadoTexto')
const btnSi = document.querySelector('#btnSi')
const btnNo = document.querySelector('#btnNo')

// Funcion Cotizador Rapido

function calcularServicio() {
    const usuarioValor = usuario.value;
    const correoValor = correo.value;
    const servicioValor = servicio.value;
    
    let unidadesValor = 0;

    // Obtener el valor de unidades según el servicio seleccionado
    
    switch (servicioValor) {
        case "Administración de Sistemas":
            unidadesValor = parseInt(terminales.value);
            break;
        case "Soluciones en la Nube":
            unidadesValor = parseInt(servidores.value);
            break;
        case "Consultoría en Innovación y Soluciones Tecnológicas":
            unidadesValor = parseFloat(horas.value);
            break;
        default:
            unidadesValor = 0;
    }

    // Valor Servicios

    let costoServicio = 0;

    const admSistemas = 5538;
    const solNube = 8946;
    const consTecnologica = 5000;
    const porcentajeIva = 0.21;

    switch (servicioValor) {
        case "Administración de Sistemas":
            costoServicio = Math.round(unidadesValor * admSistemas);
            break;
        case "Soluciones en la Nube":
            costoServicio = Math.round(unidadesValor * solNube);
            break;
        case "Consultoría en Innovación y Soluciones Tecnológicas":
            costoServicio = Math.round(unidadesValor * consTecnologica);
            break;
        default:
            costoServicio = 0;
    }

    const costoConIva = (Math.round((costoServicio * porcentajeIva) + costoServicio).toFixed(2).replace('.', ','));

    resultado.classList.remove('disable')
    resultadoTexto.innerHTML = `${usuarioValor}, el servicio de ${servicioValor}, tendría un costo mensual con IVA de: $${costoConIva}`

    console.log("Usuario:", usuarioValor);
    console.log("Correo:", correoValor);
    console.log("Servicio:", servicioValor);
    console.log("Unidades:", unidadesValor);
    console.log("Costo del servicio (sin IVA): $" + costoServicio.toFixed(2).replace('.', ','));
    console.log("Costo del servicio (con IVA): $" + costoConIva);
}

formularioCotizaciones.addEventListener('submit', (e) => {
    e.preventDefault();
    calcularServicio();
    console.log(e);
});

// Habilitar opción según el servicio seleccionado

servicio.addEventListener('change', function () {

    if (servicio.value === "Administración de Sistemas") {
        campoTerminales.style.display = 'block';
        campoServidores.style.display = 'none';
        campoHoras.style.display = 'none';
    } else if (servicio.value === "Soluciones en la Nube") {
        campoTerminales.style.display = 'none';
        campoServidores.style.display = 'block';
        campoHoras.style.display = 'none';
    } else if (servicio.value === "Consultoría en Innovación y Soluciones Tecnológicas") {
        campoTerminales.style.display = 'none';
        campoServidores.style.display = 'none';
        campoHoras.style.display = 'block';
    } else {
        campoTerminales.style.display = 'none';
        campoServidores.style.display = 'none';
        campoHoras.style.display = 'none';
    }
});


// Visualizar eventos en tiempo real

inputs.forEach(input => {
    input.addEventListener('input', (e)=> {
        console.log(e.target);
    });
})

// Validar Datos

formularioCotizaciones.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validar campo de usuario

    if (!usuario.value.trim()) {
        campoError(usuario);
        return;
    } else {
        campoValido(usuario);
    }

    // Validar campo de correo

    if (!correo.value.trim()) {
        campoError(correo);
        return;
    } else {
        campoValido(correo);
    }

    // Validar campo de servicio
    
    if (servicio.value === "") {
        campoError(servicio);
        return;
    } else {
        campoValido(servicio);
    }

    // Validar campo de unidades según el servicio seleccionado

    const servicioValor = servicio.value;
    if (servicioValor === "Administración de Sistemas (por Terminal de Usuario)") {
        if (!campoTerminales.value.trim()) {
            campoError(campoTerminales);
            return;
        } else {
            campoValido(campoTerminales);
        }
    } else if (servicioValor === "Soluciones en la Nube (por Servidor)") {
        if (!campoServidores.value.trim()) {
            campoError(campoServidores);
            return;
        } else {
            campoValido(campoServidores);
        }
    } else if (servicioValor === "Consultoría en Innovación y Soluciones Tecnológicas (por Hora)") {
        if (!campoHoras.value.trim()) {
            campoError(campoHoras);
            return;
        } else {
            campoValido(campoHoras);
        }
    }

});

function campoError(input) {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
}

function campoValido(input) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
}

// Realizar nueva cotización

btnSi.addEventListener('click', () => {
    servicio.selectedIndex = 0;
    campoTerminales.style.display = 'none';
    campoServidores.style.display = 'none';
    campoHoras.style.display = 'none';
    ocultarResultado(true);
});

btnNo.addEventListener('click', () => {
    formularioCotizaciones.reset();
    campoTerminales.style.display = 'none';
    campoServidores.style.display = 'none';
    campoHoras.style.display = 'none';
    ocultarResultado(true);
});

function ocultarResultado(ocultar) {
    if (ocultar) {
        resultado.classList.add('disable');
    } else {
        resultado.classList.remove('disable');
    }
}

// Solicutud Presupuesto a Medida

botonPresupuesto.addEventListener('click', () => {
    const email = 'info@errezetasoluciones.com.ar';
    const usuarioValor = usuario.value;
    const subject = `Solicitud de presupuesto a medida de ${usuarioValor}`;
    const body = 'Hola, me gustaría solicitar un presupuesto a medida para nuestra empresa.'; 
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    window.location.href = mailtoLink;
  });