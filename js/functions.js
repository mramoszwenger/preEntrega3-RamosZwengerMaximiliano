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

    let costoServicio = 0;

    switch (servicioValor) {
        case "admSistemas":
            costoServicio = unidadesValor * admSistemas;
            break;
        case "solNube":
            costoServicio = unidadesValor * solNube;
            break;
        case "consTecnologica":
            costoServicio = unidadesValor * consTecnologica;
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

// Solicutud Presupuesto a Medida

botonPresupuesto.addEventListener('click', () => {
    const email = 'info@errezetasoluciones.com.ar';
    const usuarioValor = usuario.value;
    const subject = `Solicitud de presupuesto a medida de ${usuarioValor}`;
    const body = 'Hola, me gustaría solicitar un presupuesto a medida para nuestra empresa.'; 
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    window.location.href = mailtoLink;
  });
  

inputs.forEach(input => {
    input.addEventListener('input', (e)=> {
        console.log(e.target.value);
    });
})