const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers')

module.exports = function () {



  //Agrega nuevos pacientes via POST
  router.post('/pacientes',
    pacienteController.nuevoCliente
  );

  //obtiene todos lo registros en la base de datos

  router.get('/pacientes',
    pacienteController.obtenerPacientes
  )

  //obtiene un paciente en especifico
  router.get('/pacientes/:id',
    pacienteController.obtenerPaciente
  );

  //actualizar un registro con un id especifico
  router.put('/pacientes/:id',
    pacienteController.actualizarPaciente
  );


  //elimina un paciente por su ID
  router.delete('/pacientes/:id',
    pacienteController.borrarPaciente
  );


  return router;
}