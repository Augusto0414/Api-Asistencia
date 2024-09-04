import { Router } from "express";
import estudent from "./estudiante.routes";
import profesor from "./profesor.routes";
import clases from "./clases.routes";
import asistencia from "./asistencia.routes";
const router = Router();
router.use(estudent);
router.use(profesor);
router.use(asistencia);
router.use(clases);

export default router;
