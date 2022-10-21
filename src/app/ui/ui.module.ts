import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyButtonComponent} from "./components/my-button/my-button.component";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    MyButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyButtonComponent,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class UiModule { }
