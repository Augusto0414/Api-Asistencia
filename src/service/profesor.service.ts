import { Profesor } from "../models";
import pool from "../database/config";

export class ProfesorService {
  private profesorRepository = pool.getRepository(Profesor);
  async getAllProfesores(): Promise<Profesor[]> {
    return await this.profesorRepository.find();
  }

  async createProfesor(dataProfesor: Partial<Profesor>): Promise<Profesor> {
    const newProfesor = this.profesorRepository.create(dataProfesor);
    return await this.profesorRepository.save(newProfesor);
  }
}
