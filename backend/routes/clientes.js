const express = require('express');
const router = express.Router();
const clienteController =  require ('../controllers/clienteController');
//aca van las rutas del crud
router.post('/', clienteController.agregarClientes);
router.get('/', clienteController.mostrarClientes);
router.get('/:id', clienteController.mostrarUnCliente);
router.delete('/:id', clienteController.eliminarClientes);
router.patch('/:id', clienteController.modificarClientes);

module.exports = router;