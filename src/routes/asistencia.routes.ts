import { Router } from "express";
import { AsistenciaController } from "../controller/asistencia.controller";

const router: Router = Router();

router.get("/asistencia", AsistenciaController.getAllAsistencias);

router.post("/asistencia", AsistenciaController.createAsistencia);

export default router;
