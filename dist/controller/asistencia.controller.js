"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsistenciaController = void 0;
const asistencia_service_1 = require("../service/asistencia.service");
const config_1 = __importDefault(require("../database/config"));
const models_1 = require("../models");
const asistenciaService = new asistencia_service_1.AsistenciaService();
class AsistenciaController {
    static getAllAsistencias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const asistencias = yield asistenciaService.getAllAsistencias();
                res.json(asistencias);
            }
            catch (error) {
                console.error("Error al obtener asistencias: ", error);
                res.status(500).send({ message: "Hubo un error al obtener las asistencias." });
            }
        });
    }
    static createAsistencia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { date, status, classId, studentId } = req.body;
                const [day, month, year] = date.split("/");
                const formattedDate = `${year}-${month}-${day}`;
                if (!date || !status || !classId || !studentId) {
                    return res
                        .status(400)
                        .json({ message: "Los campos 'date', 'status', 'classId' y 'studentId' son requeridos." });
                }
                const claseRepository = config_1.default.getRepository(models_1.Clases);
                const estudianteRepository = config_1.default.getRepository(models_1.Estudiante);
                const clase = yield claseRepository.findOneBy({ id: classId });
                const estudiante = yield estudianteRepository.findOneBy({ id: studentId });
                if (!clase) {
                    return res.status(404).json({ message: "Clase no encontrada." });
                }
                if (!estudiante) {
                    return res.status(404).json({ message: "Estudiante no encontrado." });
                }
                const asistencia = yield asistenciaService.createAsistencia({
                    date: formattedDate,
                    status,
                    classEntity: clase,
                    student: estudiante,
                });
                res.status(201).json(asistencia);
            }
            catch (error) {
                console.error("Error al crear asistencia: ", error);
                res.status(500).send({ message: "Hubo un error al crear la asistencia." });
            }
        });
    }
}
exports.AsistenciaController = AsistenciaController;
