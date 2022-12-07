import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';
import { SolicitudDetailComponent } from './pages/solicitud-detail/solicitud-detail.component';
import { VoluntariadosComponent } from './pages/voluntariados/voluntariados.component';
import { RegistrarVoluntariadoComponent } from './pages/registrar-voluntariado/registrar-voluntariado.component';
import { MascotasComponent } from './pages/mascotas/mascotas.component';


@NgModule({
  declarations: [
    SolicitudesComponent,
    SolicitudDetailComponent,
    VoluntariadosComponent,
    RegistrarVoluntariadoComponent,
    MascotasComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
