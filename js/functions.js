const formularioCotizaciones = document.querySelector('#formularioCotizaciones');
const usuario = document.querySelector('#usuario');
const correo = document.querySelector('#correo');
const servicio = document.querySelector('#servicio');
const unidades = document.querySelector('#unidades');
const inputs = document.querySelectorAll('.form-control');
const botonPresupuesto = document.querySelector('#botonPresupuesto');

let validarForm = false;

// Valor Servicios

const admSistemas = 5538;
const solNube = 8946;
const consTecnologica = 5000;
const porcentajeIva = 0.21;

// Funcion Cotizador Rapido

function calcularServicio() {
    const usuarioValor = usuario.value;
    const correoValor = correo.value;
    const servicioValor = servicio.value;
    const unidadesValor = unidades.value;

    switch (servicioValor) {
        case "admSistemas":
            costoServicio = (unidadesValor * admSistemas);
            break;
        case "solNube":
            costoServicio = (unidadesValor * solNube);
            break;
        case "consTecnologica":
            costoServicio = (unidadesValor * consTecnologica);
            break;
        default:
            costoServicio = 0;
    }

    const costoConIva = ((costoServicio * porcentajeIva) + costoServicio);
    console.log("Usuario:", usuarioValor);
    console.log("Correo:", correoValor);
    console.log("Servicio:", servicioValor);
    console.log("Unidades:", unidadesValor);
    console.log("Costo del servicio (sin IVA): $" + costoServicio.toFixed(2));
    console.log("Costo del servicio (con IVA): $" + costoConIva.toFixed(2).replace('.', ','));
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