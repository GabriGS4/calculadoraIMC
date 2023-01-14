import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { HistorialComponent } from './historial/historial.component';
import { SexoComponent } from './sexo/sexo.component';
import { AlturaPesoComponent } from './altura-peso/altura-peso.component';
import { SuperBotonComponent } from './super-boton/super-boton.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    HistorialComponent,
    SexoComponent,
    AlturaPesoComponent,
    SuperBotonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
