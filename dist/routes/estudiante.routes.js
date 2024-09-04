"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estudiante_controller_1 = require("../controller/estudiante.controller");
const router = (0, express_1.Router)();
router.post("/estudiante", estudiante_controller_1.EstudianteController.createStudent);
router.get("/estudiante", estudiante_controller_1.EstudianteController.getAllEstudiantes);
exports.default = router;
