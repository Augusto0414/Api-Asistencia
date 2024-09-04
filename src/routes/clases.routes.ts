import { Router } from "express";
import { ClasesController } from "../controller/clases.controller";
const routes = Router();

routes.get("/clases", ClasesController.getAllClases);

routes.post("/clases", ClasesController.createClase);

routes.get("/clases/:filter", ClasesController.filterClass);

routes.delete("/clases/:id", ClasesController.deleteClass);

routes.put("/clases/:id", ClasesController.updateClass);

export default routes;
