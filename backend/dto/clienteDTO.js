class ClienteDTO {
    constructor(cedula, nombres, apellidos, direccion, latitud, longitud) {
        this.cedula = cedula;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.latitud = latitud;
        this.longitud = longitud;
    }
}

module.exports = ClienteDTO;
