import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdopterRoutingModule } from './adopter-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {UiModule} from "../../ui/ui.module";


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileFormComponent
  ],
  imports: [
    CommonModule,
    AdopterRoutingModule,
    ReactiveFormsModule,
    UiModule
  ]
})
export class AdopterModule { }
