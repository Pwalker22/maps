const express = require('express');
const bodyParser = require('body-parser');
const clienteRoutes = require('./routes/cliente.routes');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware para manejar los datos JSON y de formularios
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Usar las rutas de cliente
app.use('/api', clienteRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
