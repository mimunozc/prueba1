import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { FormularioSeccionComponent } from './componentes/formulario-seccion/formulario-seccion.component';
import { ListaAlumnoComponent } from './componentes/lista-alumno/lista-alumno.component';
import { ListaHistorialComponent } from './componentes/lista-historial/lista-historial.component';
import { RegistroHistorialComponent } from './componentes/registro-historial/registro-historial.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    FormularioAlumnoComponent,
    FormularioSeccionComponent,
    ListaAlumnoComponent,
    ListaHistorialComponent,
    RegistroHistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
