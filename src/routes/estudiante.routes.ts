import { Router } from "express";
import { EstudianteController } from "../controller/estudiante.controller";

const router = Router();

router.post("/estudiante", EstudianteController.createStudent);
router.get("/estudiante", EstudianteController.getAllEstudiantes);
router.put("/estudiante/:id", EstudianteController.updateStudent);
router.delete("/estudiante/:id", EstudianteController.deleteStudent);

export default router;
