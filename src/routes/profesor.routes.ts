import { Router } from "express";
import { ProfesorController } from "../controller/profesor.controller";
const router = Router();

router.post("/profesor", ProfesorController.createProfesor);
router.get("/profesor", ProfesorController.getAllProfesores);
router.put("/profesor/:id", ProfesorController.updateProfesor);
router.delete("/profesor/:id", ProfesorController.deleteProfesor);

export default router;
