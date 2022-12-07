import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';
import { SolicitudDetailComponent } from './pages/solicitud-detail/solicitud-detail.component';
import { VoluntariadosComponent } from './pages/voluntariados/voluntariados.component';
import { RegistrarVoluntariadoComponent } from './pages/registrar-voluntariado/registrar-voluntariado.component';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import {UiModule} from "../../ui/ui.module";


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
    AdminRoutingModule,
    UiModule
  ]
})
export class AdminModule { }
