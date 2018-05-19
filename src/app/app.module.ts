import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainformComponent } from './components/mainform/mainform.component';
import { AgregarexpedientesComponent } from './components/expedientes/agregarexpedientes/agregarexpedientes.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainformComponent,
    AgregarexpedientesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
