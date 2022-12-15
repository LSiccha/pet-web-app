export interface VoluntariadoModel {
  admin: {
    id: string
  },
  id: string,
  nombres: string,
  edad: number,
  dni: string,
  celular: string,
  direccion: string,
  correo: string,
  fechaRegistro: Date | string
}
