"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profesor_controller_1 = require("../controller/profesor.controller");
const router = (0, express_1.Router)();
router.post("/profesor", profesor_controller_1.ProfesorController.createProfesor);
router.get("/profesor", profesor_controller_1.ProfesorController.getAllProfesores);
exports.default = router;
