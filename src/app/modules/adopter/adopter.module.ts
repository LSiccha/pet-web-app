import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdopterRoutingModule } from './adopter-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileFormComponent
  ],
  imports: [
    CommonModule,
    AdopterRoutingModule,
    MatToolbarModule,
    ReactiveFormsModule
  ]
})
export class AdopterModule { }
