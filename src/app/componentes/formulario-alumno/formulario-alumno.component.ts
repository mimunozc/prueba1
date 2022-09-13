import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';
import { Seccion } from 'src/app/modelos/seccion';
import { RegistroHistorial } from 'src/app/modelos/registro-historial';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent {

  @Input() public clase!: Array<Seccion>;
  @Output() public envioAlumno = new EventEmitter<Alumno>();
  @Output() public envioRegistro = new EventEmitter<RegistroHistorial>();

  public newClass: Seccion = {
    id:0,
    nomSeccion: ''
  }

  public newAlumno: Alumno = {
    rut: 0,
    nombre: '',
    apellido: '',
    edad:0,
    class: this.newClass
  }

  public fecha: number = Date.now();

  public cambioRut(event: Event): void {
    const rut = parseInt((event.target as HTMLInputElement).value);
    this.newAlumno.rut = rut;
  }

  public cambioEdad(event: Event): void {
    const edad = parseInt((event.target as HTMLInputElement).value);
    this.newAlumno.edad = edad;
  }

  public cambioNombre(event: Event): void {
    const nombre = (event.target as HTMLInputElement).value;
    this.newAlumno.nombre = nombre;
  }

  public cambioApellido(event: Event): void {
    const apellido = (event.target as HTMLInputElement).value;
    this.newAlumno.apellido = apellido;
  }


  public traerId(event: Event): void{
    const idSeccion = parseInt((event.target as HTMLInputElement).value);
    const otro = this.clase[idSeccion - 1]
    this.newAlumno.class = otro;
  }

  public registroAlumno(): void {

    if(this.newAlumno.apellido === '' || this.newAlumno.nombre === '' || this.newAlumno.rut === 0 || this.newAlumno.edad === 0 || this.newAlumno.class.id === 0) {

    } else {
      const copia: Alumno = {
        ...this.newAlumno
      }

      this.envioAlumno.emit(copia);

      const newRegistro: RegistroHistorial = {
        fecha: this.fecha,
        alumno: copia
      }

      const copiaRegistro: RegistroHistorial = {
        ...newRegistro
      }

      this.envioRegistro.emit(copiaRegistro);

      this.newAlumno.rut= 0;
      this.newAlumno.nombre= '';
      this.newAlumno.apellido= '';
      this.newAlumno.edad= 0;
      alert("Alumno Registrado")
    }
  }




}
