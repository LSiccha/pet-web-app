import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdopterRoutingModule } from './adopter-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AdopterRoutingModule
  ]
})
export class AdopterModule { }
