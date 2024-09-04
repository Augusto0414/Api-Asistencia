import { Router } from "express";
import { AsistenciaController } from "../controller/asistencia.controller";

const router: Router = Router();

router.get("/asistencia", AsistenciaController.getAllAsistencias);

router.post("/asistencia", AsistenciaController.createAsistencia);

router.put("/asistencia/:id", AsistenciaController.updateAsistencia);

router.delete("/asistencia/:id", AsistenciaController.deleteAsistencia);

router.get("/asistencia/filter", AsistenciaController.filterAsistencias);

export default router;
