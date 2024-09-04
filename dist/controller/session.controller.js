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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionController = void 0;
const sesion_service_1 = require("../service/sesion.service");
const sessionService = new sesion_service_1.SessionService();
class SessionController {
    static createSession(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { sessionDate, classId } = req.body;
                const newSession = yield sessionService.createSession({
                    sessionDate,
                    classEntity: { id: classId },
                });
                res.status(201).json(newSession);
            }
            catch (error) {
                console.error("Error al crear sesión: ", error);
                res.status(500).send({ message: "Hubo un error al crear la sesión." });
            }
        });
    }
    static getSessionById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { sessionId } = req.params;
                const session = yield sessionService.getSessionById(sessionId);
                if (!session) {
                    return res.status(404).json({ message: "Sesión no encontrada" });
                }
                res.json(session);
            }
            catch (error) {
                console.error("Error al obtener la sesión: ", error);
                res.status(500).send({ message: "Hubo un error al obtener la sesión." });
            }
        });
    }
    static getAllSessions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sessions = yield sessionService.getAllSessions();
                res.json(sessions);
            }
            catch (error) {
                console.error("Error al obtener las sesiones: ", error);
                res.status(500).send({ message: "Hubo un error al obtener las sesiones." });
            }
        });
    }
}
exports.SessionController = SessionController;
