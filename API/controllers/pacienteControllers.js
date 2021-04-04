const Paciente = require('../models/Paciente');

//cuando se crea un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {

  //crear objeto paciente objeto req.body
  const paciente = new Paciente(req.body);
  try {
    await paciente.save();
    res.json({ mensaje: 'El Cliente se Agrego Correctamente' });
  } catch (error) {
    console.log(error);
    next();
  };
}
//obtiene todos los pacientes
exports.obtenerPacientes = async (req, res, next) => {
  try {
    const pacientes = await Paciente.find({});
    res.json(pacientes);
  } catch (error) {
    console.log(error);
    next();
  }
}

//obtiene un paciente en especifico por su id
exports.obtenerPaciente = async (req, res, next) => {
  try {
    const npacientes = await Paciente.findById(req.params.id);
    res.json(npacientes);
  } catch (error) {
    console.log(error);
    next();
  }
}
//actualiza un registro por su ID
exports.actualizarPaciente = async (req, res, next) => {
  try {
    const spacientes = await Paciente.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    });
    res.json(spacientes);
  } catch (error) {
    console.log(error);
    next();
  }
}

//elimina un paciente por su id
exports.borrarPaciente = async (req, res, next) => {
  try {
    await Paciente.findOneAndDelete({ _id: req.params.id });
    res.json({ mensaje: 'El paciente fue Eliminado' });
  } catch (error) {
    console.log(error);
    next();
  }
}


