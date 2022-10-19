import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./core/services/auth.service";
import { MyButtonComponent } from './ui/components/my-button/my-button.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        HttpClient,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
