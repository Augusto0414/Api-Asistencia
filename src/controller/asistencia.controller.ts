import { Request, Response } from "express";
import { AsistenciaService } from "../service/asistencia.service";
import pool from "../database/config";
import { Clases, Estudiante } from "../models";

const asistenciaService = new AsistenciaService();

export class AsistenciaController {
  static async getAllAsistencias(req: Request, res: Response): Promise<any> {
    try {
      const asistencias = await asistenciaService.getAllAsistencias();
      res.json(asistencias);
    } catch (error) {
      console.error("Error al obtener asistencias: ", error);
      res.status(500).send({ message: "Hubo un error al obtener las asistencias." });
    }
  }
  static async createAsistencia(req: Request, res: Response): Promise<any> {
    try {
      const { date, status, classId, studentId } = req.body;

      const [day, month, year] = date.split("/");
      const formattedDate = `${year}-${month}-${day}`;

      if (!date || !status || !classId || !studentId) {
        return res
          .status(400)
          .json({ message: "Los campos 'date', 'status', 'classId' y 'studentId' son requeridos." });
      }

      const claseRepository = pool.getRepository(Clases);
      const estudianteRepository = pool.getRepository(Estudiante);

      const clase = await claseRepository.findOneBy({ id: classId });
      const estudiante = await estudianteRepository.findOneBy({ id: studentId });

      if (!clase) {
        return res.status(404).json({ message: "Clase no encontrada." });
      }

      if (!estudiante) {
        return res.status(404).json({ message: "Estudiante no encontrado." });
      }

      const asistencia = await asistenciaService.createAsistencia({
        date: formattedDate,
        status,
        classEntity: clase,
        student: estudiante,
      });

      res.status(201).json(asistencia);
    } catch (error) {
      console.error("Error al crear asistencia: ", error);
      res.status(500).send({ message: "Hubo un error al crear la asistencia." });
    }
  }
}
