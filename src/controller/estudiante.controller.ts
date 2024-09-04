import { Request, Response } from "express";
import { EstudianteService } from "../service/estudiante.service";

const estudianteService = new EstudianteService();

export class EstudianteController {
  static async createStudent(req: Request, res: Response): Promise<any> {
    try {
      const { firstName, lastName, email } = req.body;

      if (!firstName || !lastName || !email) {
        return res.status(400).send({ message: "Todos los campos son requeridos" });
      }

      const newStudent = await estudianteService.createStudent({ firstName, lastName, email });
      res.status(201).send(newStudent);
    } catch (error) {
      console.error("Error al crear estudiante:", error);
      res.status(500).send({ message: "Error al crear al estudiante", error });
    }
  }
  static async getAllEstudiantes(req: Request, res: Response): Promise<any> {
    try {
      const estudiantes = await estudianteService.getAllEstudiantes();
      res.send(estudiantes);
    } catch (error) {
      console.error("Error al obtener estudiantes:", error);
      res.status(500).send({ message: "Error al obtener estudiantes", error });
    }
  }
}
