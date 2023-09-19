const formularioCotizaciones = document.querySelector('#formularioCotizaciones');
const usuario = document.querySelector('#usuario');
const correo = document.querySelector('#correo');
const servicio = document.querySelector('#servicio');
const unidades = document.querySelector('#unidades');
const inputs = document.querySelectorAll('.form-control');
const botonPresupuesto = document.querySelector('#botonPresupuesto');

let validarForm = false;

// Funcion Cotizador Rapido

function calcularServicio() {
    const usuarioValor = usuario.value;
    const correoValor = correo.value;
    const servicioValor = servicio.value;
    const unidadesValor = unidades.value;

    // Valor Servicios
    let costoServicio = 0;

    const admSistemas = 5538;
    const solNube = 8946;
    const consTecnologica = 5000;
    const porcentajeIva = 0.21;

    switch (servicioValor) {
        case "Administración de Sistemas (por Terminal de Usuario)":
            costoServicio = Math.round(unidadesValor * admSistemas);
            break;
        case "Soluciones en la Nube (por Servidor)":
            costoServicio = Math.round(unidadesValor * solNube);
            break;
        case "Consultoría en Innovación y Soluciones Tecnológicas (por Hora)":
            costoServicio = Math.round(unidadesValor * consTecnologica);
            break;
        default:
            costoServicio = 0;
    }

    const costoConIva = (Math.round((costoServicio * porcentajeIva) + costoServicio).toFixed(2).replace('.', ','));

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

inputs.forEach(input => {
    input.addEventListener('input', (e)=> {
        console.log(e.target.value);
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

    // Validar campo de unidades
    if (!unidades.value.trim()) {
        campoError(unidades);
        return;
    } else {
        campoValido(unidades);
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

// Solicutud Presupuesto a Medida

botonPresupuesto.addEventListener('click', () => {
    const email = 'info@errezetasoluciones.com.ar';
    const usuarioValor = usuario.value;
    const subject = `Solicitud de presupuesto a medida de ${usuarioValor}`;
    const body = 'Hola, me gustaría solicitar un presupuesto a medida para nuestra empresa.'; 
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    window.location.href = mailtoLink;
  });