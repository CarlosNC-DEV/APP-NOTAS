import { Router } from 'express';
import { crearTarea, verTareas, verUnicaTarea, actualizarTarea, eliminarTarea } from '../controllers/tareas.controllers.js';

const router = Router();

router.post("/tareas", crearTarea);
router.get("/tareas", verTareas);
router.get("/tareas/:id", verUnicaTarea);
router.put("/tareas/:id", actualizarTarea);
router.delete("/tareas/:id", eliminarTarea);

export default router;