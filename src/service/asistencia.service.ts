import { Like } from "typeorm";
import pool from "../database/config";
import { Asistencia } from "../models";

export class AsistenciaService {
  private asistenciaRepository = pool.getRepository(Asistencia);
  async getAllAsistencias(): Promise<Asistencia[]> {
    return await this.asistenciaRepository.find();
  }
  async createAsistencia(dataAsistencia: Partial<Asistencia>): Promise<Asistencia> {
    const newAsistencia = this.asistenciaRepository.create(dataAsistencia);
    return await this.asistenciaRepository.save(newAsistencia);
  }
  async filterAsistencia(filter: string): Promise<Asistencia[]> {
    return await this.asistenciaRepository.find({
      where: {
        student: Like(`%${filter}%`),
      },
    });
  }
  async deleteAsistencia(id: string): Promise<void> {
    await this.asistenciaRepository.delete({ id });
  }
  async updateAsistenciaStatus(id: string, status: boolean): Promise<Asistencia> {
    const asistenciaToUpdate = await this.asistenciaRepository.findOne({ where: { id } });
    if (!asistenciaToUpdate) {
      throw new Error("Asistencia no encontrada.");
    }
    asistenciaToUpdate.status = status;
    return await this.asistenciaRepository.save(asistenciaToUpdate);
  }
}
