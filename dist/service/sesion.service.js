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
exports.SessionService = void 0;
const typeorm_1 = require("typeorm");
const config_1 = __importDefault(require("../database/config"));
const models_1 = require("../models");
class SessionService {
    constructor() {
        this.sessionRepository = config_1.default.getRepository(models_1.Session);
    }
    getAllSessions() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.sessionRepository.find({ relations: ["classEntity"] });
        });
    }
    createSession(dataSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const newSession = this.sessionRepository.create(dataSession);
            return yield this.sessionRepository.save(newSession);
        });
    }
    deleteSession(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.sessionRepository.delete({ id });
        });
    }
    getSessionById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.sessionRepository.findOne({ where: { id }, relations: ["classEntity"] });
        });
    }
    findSessionsByDate(date) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.sessionRepository.find({
                where: { sessionDate: (0, typeorm_1.Like)(`%${date}%`) },
                relations: ["classEntity"],
            });
        });
    }
}
exports.SessionService = SessionService;
