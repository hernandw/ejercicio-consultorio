class Paciente {
    constructor(nombre, email) {
        this._nombre = nombre
        this._email = email
    }

    get nombre {}
    mostrarDatos() {
        return `El paciente ${this.nombre} con correo ${this.email}`
    }
}


class Consulta extends Paciente{
    constructor(nombre, email, incidencia, motivo) {
        super(nombre, email)
        this.incidencia = incidencia
        this.motivo = motivo
    }
    mostrarMotivo() {
        return `El paciente ${this.nombre} con correo ${this.email} viene ${this.incidencia} y el motivo de la consulta ${this.motivo}`;
    }
}


export {
    Paciente,
    Consulta
}