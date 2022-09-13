import { Seccion } from "./seccion"

export interface Alumno {
  rut: number,
  nombre: string,
  apellido: string,
  edad: number,
  class: Seccion
}
