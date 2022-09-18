// Agrego info apretando el botón enviar del form de dudas

class Consulta {
    constructor(nombreyapellido, telefono, mail, duda) {
        this.nombreyapellido = nombreyapellido;
        this.telefono = telefono;
        this.mail = mail;
        this.duda = duda;
    }
}
const consulta = document.querySelector('#consulta')


function mostrarDatos() {
    const nombreyapellido = $('#nombreyapellido').val()
    const telefono = $('#telefono').val()
    const mail = $('#mail').val()
    const duda = $('#duda').val()
    let consulta = new Consulta(nombreyapellido, telefono, mail, duda)
    localStorage.setItem("consulta", JSON.stringify(consulta))
    imprimir()

}

if (localStorage.getItem("consulta") != null) {
    imprimir()
} else {
}

function imprimir() {
    let dato = JSON.parse(localStorage.getItem("consulta"))
    consulta.innerHTML = `<p class="textoDescripcion"> Tu nombre es: ${dato.nombreyapellido} </p>
    <p class="textoDescripcion"> Tu telefono es: ${dato.telefono}</p>
    <p class="textoDescripcion"> Tu correo electrónico es: ${dato.mail}</p>
    <p class="textoDescripcion"> y tu duda es: ${dato.duda}.</p>`
}

let botonEnviar = $('#btnEnviar').on('click', mostrarDatos)