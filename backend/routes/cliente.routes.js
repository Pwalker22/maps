const express = require('express');
const router = express.Router();
const clienteController = require('../controller/clienteController');


router.post('/clientes', clienteController.addCliente);

module.exports = router;
