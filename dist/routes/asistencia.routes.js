"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asistencia_controller_1 = require("../controller/asistencia.controller");
const router = (0, express_1.Router)();
router.get("/asistencia", asistencia_controller_1.AsistenciaController.getAllAsistencias);
router.post("/asistencia", asistencia_controller_1.AsistenciaController.createAsistencia);
exports.default = router;
