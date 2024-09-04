import { Router } from "express";
import { EstudianteController } from "../controller/estudiante.controller";

const router = Router();

router.post("/estudiante", EstudianteController.createStudent);
router.get("/estudiante", EstudianteController.getAllEstudiantes);

export default router;
