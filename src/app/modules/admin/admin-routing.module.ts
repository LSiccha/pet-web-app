import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "../adopter/pages/profile/profile.component";
import {ShelterComponent} from "../adopter/pages/shelter/shelter.component";
import {PetComponent} from "../adopter/pages/pet/pet.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shelter'
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'shelter',
    component: ShelterComponent
  },
  {
    path: 'pet/:id',
    component: PetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
