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
    static getAllSessions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sessions = yield sessionService.getAllSessions();
                return res.json(sessions);
            }
            catch (error) {
                console.error("Error al obtener sesiones: ", error);
                res.status(500).send({ message: "Error interno del servidor" });
            }
        });
    }
    static createSession(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newSession = yield sessionService.createSession(req.body);
                return res.status(201).send(newSession);
            }
            catch (error) {
                console.error("Error al crear sesion: ", error);
                res.status(500).send({ message: "Error interno del servidor" });
            }
        });
    }
}
exports.SessionController = SessionController;
