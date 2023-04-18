import Tareas from "../models/Tareas.js";

export const verTareas = async (req, res) => {
  try {
    const tareas = await Tareas.find().lean();
    if (!tareas) {
      return res.status(400).json("Error al traer las tareas");
    }
    res.status(200).json(tareas);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Error interno");
  }
};

export const verUnicaTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const unicaTarea = await Tareas.findById(id).lean();
    if (!unicaTarea) {
      return res.status(400).json("Error al traer la tarea");
    }
    res.status(200).json(unicaTarea);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Error interno");
  }
};

export const crearTarea = async (req, res) => {
  try {
    console.log(req.body)
    const { nombre, descripcion } = req.body;
    if (!nombre || !descripcion) {
      return res.status(400).json("Todos los datos son requeridos");
    }
    const tareaModel = new Tareas(req.body);
    await tareaModel.save();

    res.status(200).json("Tarea creada correctamente");
  } catch (error) {
    console.log(error);
    return res.status(500).json("Error interno");
  }
};

export const actualizarTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const tereaActualizada = await Tareas.findByIdAndUpdate(id, req.body);
    if (!tereaActualizada) {
      return res.status(400).json("Error al actualizar la tarea");
    }

    res.status(200).json("Tarea actualizada correctamente");
  } catch (error) {
    console.log(error);
    return res.status(500).json("Error interno");
  }
};

export const eliminarTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const tereaEliminada = await Tareas.findByIdAndDelete(id);
    if (!tereaEliminada) {
      return res.status(400).json("Error al eliminar la tarea");
    }

    res.status(200).json("Tarea eliminada correctamente");
  } catch (error) {
    console.log(error);
    return res.status(500).json("Error interno");
  }
};
