const db = require('../config/dbConnection');

const addCliente = (cliente, callback) => {
    const { cedula, nombres, apellidos, direccion, latitud, longitud } = cliente;

    const sql = `INSERT INTO clientes (cedula, nombres, apellidos, direccion, latitud, longitud) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(sql, [cedula, nombres, apellidos, direccion, latitud, longitud], (err, results) => {
        if (err) {
            console.error('Error al agregar el cliente:', err.message);
            return callback(err);
        }
        console.log(`Cliente agregado con ID ${results.insertId}`);
        callback(null);
    });
};

module.exports = {
    addCliente,
};
