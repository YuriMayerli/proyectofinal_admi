const Cliente = require('../models/Cliente');
const bcryptjs = require ("bcryptjs");
const { validationResult } = require ("express-validator");
const jwt = require ("jsonwebtoken");




//La funcion para agregar un cliente
exports.agregarClientes = async (req, res) => {

    try {

        let Clientes = new Cliente(req.body)
        await Clientes.save();
        res.send(Clientes);
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar el cliente')
    }
}


//Funcion para mostrar cliente
exports.mostrarClientes = async (req, res) => {

    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar el cliente')
    }
}



//Mostrar el cliente

exports.mostrarUnCliente = async (req, res) => {
    try {
        let clientes = await Cliente.findById(req.params.id);

        if (!clientes) {
            res.status(404).json({ msg: "No se encuentra el cliente con ese ID" });
        }

        res.send(clientes);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar el cliente en la basde de datos');
    }
}



//funcion para eliminar
exports.eliminarClientes = async (req, res) => {
    try {
        //Aqui busca el id buscado
        let clientes = await Cliente.findById(req.params.id);

        //Verifica si no existe y si es el caso muestra el mensaje
        if (!clientes) {
            res.status(404).json({ msg: "El cliente no existe" });
            return
        }

        await Cliente.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: "El cliente fue eliminado" });

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar el cliente en la base de datos');
    }
}



//Modificar un cliente
exports.modificarClientes = async (req, res) => {
    try {
        let cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!cliente) {
            return res.status(404).send('Cliente no encontrado');
        }
        res.json(cliente)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al modificar el cliente');
    }
}