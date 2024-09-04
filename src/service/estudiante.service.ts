import { Estudiante } from "../models";
import pool from "../database/config";

export class EstudianteService {
  private estudianteRepository = pool.getRepository(Estudiante);

  async getAllEstudiantes(): Promise<Estudiante[]> {
    return await this.estudianteRepository.find();
  }

  async createStudent(student: Partial<Estudiante>): Promise<Estudiante> {
    const newStudent = this.estudianteRepository.create(student);
    return await this.estudianteRepository.save(newStudent);
  }
}
