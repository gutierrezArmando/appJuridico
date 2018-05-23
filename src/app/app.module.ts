import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainformComponent } from './components/mainform/mainform.component';
import { AgregarexpedientesComponent } from './components/expedientes/agregarexpedientes/agregarexpedientes.component';
import {HttpClientModule} from "@angular/common/http";
import {DatosExpedientesService} from "./servicios/datos-expedientes.service";
import { AgregarPartesComponent } from './components/agregar-partes/agregar-partes.component';
import {PartesService} from "./servicios/partes.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainformComponent,
    AgregarexpedientesComponent,
    AgregarPartesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatosExpedientesService, PartesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
