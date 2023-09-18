const formularioCotizaciones = document.querySelector('#formularioCotizaciones');
const usuario = document.querySelector('#usuario');
const correo = document.querySelector('#correo');
const servicio = document.querySelector('#servicio');
const unidades = document.querySelector('#unidades');
const inputs = document.querySelectorAll('.form-control');

let validarForm = false;

// Valor Servicios

const admSistemas = 5538;
const solNube = 8946;
const consTecnologica = 5000;
const porcentajeIva = 0.21;

// Funciones

function calcularServicio() {
    const usuarioValor = usuario.value;
    const correoValor = correo.value;
    const servicioValor = servicio.value;
    const unidadesValor = unidades.value;

    const costoServicio = (Math.round(unidadesValor*5000).toFixed(2).replace('.', ','));

    console.log(usuarioValor, correoValor, servicioValor, unidadesValor, costoServicio);
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