const inicio = alert("¡Bienvenida/o! Al sistema de cotización rápido. Para presupuestos a medida, contáctanos por correo electrónico.\n\nPRESIONA 'ACEPTAR' PARA CONTINUAR");

let trueOrFalse = true;
let nombre = "";
let email = "";
let servicioRequerido = "";
let servicios = "";
let costoServicio;

class Contacto {
    constructor(nombreContacto, emailContacto, servicioContacto) {
        this.nombre = nombreContacto;
        this.email = emailContacto;
        this.servicio = servicioContacto;
    }
}

let listaDeSolicitudes = [];

const admSistemas = 5538;
const solNube = 8946;
const consTecnologica = 5000;
const porcentajeIva = 0.21;

function obtenerNombre() {
    nombre = prompt("¿Cuál es tu nombre?");
    if (nombre !== null && nombre !== "") {
        return nombre.charAt(0).toUpperCase() + nombre.slice(1);
    } else {
        alert("Debes decirme tu nombre para poder continuar");
        return obtenerNombre();
    }
}

function obtenerEmail() {
    email = prompt("¿Cuál es tu correo electrónico?");
    if (email !== null && email !== "") {
        if (/^\S+@\S+\.\S+$/.test(email)) {
            return email.toUpperCase();
        } else {
            alert("Correo electrónico no válido. Por favor, ingresa un correo válido.");
            return obtenerEmail();
        }
    } else {
        alert("Debes proporcionar un correo electrónico.");
        return obtenerEmail();
    }
}

function cotizadorRapido() {
    servicios = prompt("¿Qué Servicio desea cotizar?\n- (1) Administración de Sistemas\n- (2) Soluciones en la Nube\n- (3) Consultoría en Innovación y Soluciones Tecnológicas\n\n- (0) Volver");

    switch (servicios) {
        case "1":
            const numero1 = Number(prompt("Ingrese la cantidad de computadoras que tiene en su empresa, para calcular el costo aproximado del servicio de Administración de Sistemas"));
            costoServicio = numero1 * admSistemas;
            alert(`El servicio de Administración de Sistemas para su empresa, tendría un valor aproximado de $ARG ${costoServicio} + $ARG ${valorIva(costoServicio)} IVA`);
            break;
        case "2":
            const numero2 = Number(prompt("Ingrese la cantidad de servidores en la nube que necesita para su empresa"));
            costoServicio = numero2 * solNube;
            alert(`El servicio de Cloud Computing tendría un valor aproximado de $ARG ${costoServicio} + $ARG ${valorIva(costoServicio)} IVA`);
            break;
        case "3":
            const numero3 = Number(prompt("Ingrese la cantidad de horas de asesoría que cree necesitar"));
            costoServicio = numero3 * consTecnologica;
            alert(`La Consultoría en Innovación y Soluciones Tecnológicas tendría un valor aproximado de $ARG ${costoServicio} + $ARG ${valorIva(costoServicio)} IVA`);
            break;
        case "0":
            break;
        default:
            alert("Opción no válida. Por favor, selecciona entre la opción '1', '2', '3', o '0'");
            cotizadorRapido();
            break;
    }
}

function listaServicios() {
    servicios = prompt("Listado de servicios:\n- Administración de Sistemas\n- Soluciones en la Nube\n- Consultoría en Innovación y Soluciones Tecnológicas\n\n- (1) Cotizar Servicio\n- (0) Volver");

    switch (servicios) {
        case "1":
            cotizadorRapido();
            break;
        case "0":
            break;
        default:
            alert("Opción no válida. Por favor, selecciona entre la opción '1' o '0'");
            listaServicios();
            break;
    }
}

function valorIva(costoServicio) {
    return costoServicio * porcentajeIva;
}

function presupuestoPersonalizado() {
    servicioRequerido = prompt(`${nombre}, comentanos brevemente ¿Qué tipo de solución tecnológica estas necesitando?`);
    const contacto = prompt(`Gracias ${nombre} por confiar en nuestras soluciones tecnologicas, te solicitamos completar los siguientes datos de contacto, y a la brevedad alguien se pondrá en contacto contigo.\n\n¿Cuál es tu correo electrónico?`);
    if (contacto !== null) {
        email = contacto;
        listaDeSolicitudes.push(new Contacto(nombre.toUpperCase(), email.toUpperCase(), servicioRequerido.toUpperCase()));
        alert("Gracias por tu consulta. Nos pondremos en contacto contigo pronto.");
    }
}

function recorridaListaDeSolicitudes() {
    let mensaje = '';
    for (const contacto of listaDeSolicitudes) {
        let nombre = contacto.nombre;
        let email = contacto.email;
        let servicios = contacto.servicio;
        mensaje += `Datos contacto:\n- Nombre: ${nombre}\n- Correo Electrónico: ${email}\n- Servicio consultado: ${servicios}\n\n`;
    }
    alert(`Este es el listado de solicitudes de presupuestos personalizados\n\n${mensaje}`);
}

while (trueOrFalse) {
    nombre = obtenerNombre();

    const edadRespuesta = prompt(`¡Hola ${nombre}! Debes ser mayor de edad para continuar. ¿Tienes más de 18 años?\n- (S) Si\n- (N) No\n\n Importante: responder por: 'Si' o 'No'`).toLowerCase();

    if (edadRespuesta === "s" || edadRespuesta === "si") {
        trueOrFalse = false;
        const opciones = parseInt(prompt("¿Qué deseas hacer?:\n- (1) Ver lista de servicios\n- (2) Realizar cotización rápida\n- (3) Solicitar presupuesto personalizado\n- (4) Ver lista de solicitud de presupuestos personalizados\n\n- (0) Salir"));
        switch (opciones) {
            case 1:
                listaServicios();
                break;
            case 2:
                cotizadorRapido();
                break;
            case 3:
                presupuestoPersonalizado();
                break;
            case 4:
                if (listaDeSolicitudes.length === 0) {
                    alert("No hay solicitudes de cotización.");
                } else {
                    recorridaListaDeSolicitudes();
                }
                break;
            case 0:
                alert(`¡Hasta luego ${nombre}!`);
                break;
            default:
                alert("Opción no válida. Por favor, selecciona entre la opción '1', '2', '3', '4' o '0'");
                break;
        }

        if (opciones !== 0) {
            const verificar = prompt("¿Quieres hacer otra consulta?\n- (S) Si\n- (N) No").toUpperCase();
            if (verificar === "N") {
                trueOrFalse = false;
            } else {
                trueOrFalse = true;
            }
        }
    } else if (edadRespuesta === "n" || edadRespuesta === "no") {
        alert("Lo siento, debes ser mayor de edad para continuar.\n\nO puedes cambiar tu respuesta por 'Si'... Pero no digas nada 'guiño, guiño...'");
    } else {
        alert("Opción no válida. Por favor, selecciona 'Si' o 'No'");
    }

    console.log(`DATOS CONTACTO:\n- Nombre: ${nombre}\n- Es mayor de edad: ${edadRespuesta}\n- Correo Electrónico: ${email}\n- Servicio Requerido: ${servicioRequerido}\n\nCotizador rápido:\n- Costo Servicio: ${costoServicio}\n- Valor del IVA: ${valorIva(costoServicio)}\n\n`);
}