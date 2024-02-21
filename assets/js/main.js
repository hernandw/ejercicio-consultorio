import { Paciente, Consulta } from '../modulos/clases.js'


function mostrarPacientes(pac) {
    let resultado = document.getElementById('resultado')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = pac.mostrarMotivo()
    resultado.append(parrafo)


}


function agregarDatos() {
    let nombre = document.getElementById('username').value
    let email = document.getElementById('email').value
    let incidencia = document.getElementById('incidencia').value
    let motivo = document.getElementById('motivo').value
    let paciente = new Consulta(nombre, email, incidencia, motivo)
   mostrarPacientes(paciente)
}

let formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (e) => {
   e.preventDefault()

    agregarDatos()
})