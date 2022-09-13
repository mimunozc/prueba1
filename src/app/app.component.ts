import { Component } from '@angular/core';
import { Seccion } from './modelos/seccion';
import { Alumno } from './modelos/alumno';
import { RegistroHistorial } from './modelos/registro-historial';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AsistenciaAPP';


  public seccionGrabada: Array<Seccion> = [];
  public alumnoGrabado: Array<Alumno> = [];
  public registroGrabado: Array<RegistroHistorial> = [];

  public muestra = false;

  public muestraAlumno = false;

  public tomarSeccion(seccion: Seccion): void {
    const id: number  = this.seccionGrabada.length +1;
    seccion.id = id;
    this.seccionGrabada.push(seccion);
  }

  public tomarAlumno(alumno: Alumno): void {
    this.alumnoGrabado.push(alumno)
  }

  public tomarRegistro(registro: RegistroHistorial): void {
    this.registroGrabado.push(registro);
  }

  public listaAlumno(): void {
    this.muestraAlumno = !this.muestraAlumno;
  }

  public muestraHistorial(): void {
    this.muestra = !this.muestra;
  }

}
