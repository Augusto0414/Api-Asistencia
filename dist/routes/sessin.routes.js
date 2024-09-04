"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const session_controller_1 = require("../controller/session.controller");
const router = (0, express_1.Router)();
router.get("/sessions", session_controller_1.SessionController.getAllSessions);
router.post("/session", session_controller_1.SessionController.createSession);
exports.default = router;
