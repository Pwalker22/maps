const ClienteDTO = require('../dto/clienteDTO');
const ClienteDAO = require('../dao/clienteDAO');

const addCliente = (req, res) => {
    const { cedula, nombres, apellidos, direccion, latitud, longitud } = req.body;

    if (!cedula || !nombres || !apellidos || !direccion || !latitud || !longitud) {
        return res.status(400).send('Todos los campos son obligatorios');
    }

   
    const nuevoCliente = new ClienteDTO(cedula, nombres, apellidos, direccion, latitud, longitud);


    ClienteDAO.addCliente(nuevoCliente, (err) => {
        if (err) {
            return res.status(500).send('Error al agregar el cliente a la base de datos');
        }
        res.status(201).send('Cliente agregado exitosamente');
    });
};

module.exports = {
    addCliente,
};
