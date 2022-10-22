import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SampleComponent } from './pages/sample/sample.component';
import {UiModule} from "../../ui/ui.module";


@NgModule({
  declarations: [
    SampleComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UiModule
  ]
})
export class HomeModule { }
