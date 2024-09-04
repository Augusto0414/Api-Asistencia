import { Router } from "express";
import { ProfesorController } from "../controller/profesor.controller";
const router = Router();

router.post("/profesor", ProfesorController.createProfesor);
router.get("/profesor", ProfesorController.getAllProfesores);

export default router;
