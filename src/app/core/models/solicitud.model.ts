import {Pet} from "./pet.model";
import {User} from "./user.model";

export interface SolicitudModel {
  id: string,
  mascota: Pet,
  adoptante: User,
  fechaSolicitud: Date,
  aceptada: boolean,
  enEspera: boolean,
  mensaje: string
}
