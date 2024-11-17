const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'pwalker2024', 
  database: 'maps' 
});


connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos MySQL como ID ' + connection.threadId);
});

module.exports = connection;
