const express = require ("express")
const conectarBD = require("./config/db")
const cors = require ("cors");

// configuracion express y puerto
const app = express();
//configuramos el puerto en una variables
const PORT = process.env.PORT || 5000;


// enlazamos la conexion de la base de datos
conectarBD();
//habilitar cors
app.use(cors());
// habilitar express json
app.use(express.json({extended: true}));

app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/clientes', require('./routes/clientes'));




app.listen(PORT, () => {
    console.log("el servidor esta conectado");
});

