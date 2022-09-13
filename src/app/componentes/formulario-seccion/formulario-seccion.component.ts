import { Component, Output, EventEmitter } from '@angular/core';
import { Seccion } from 'src/app/modelos/seccion';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent {

  @Output() public enviaSeccion = new EventEmitter<Seccion>();

  public newSeccion: Seccion = {
    id:0,
    nomSeccion: ''
  }

  public otraSeccion(nomSeccion: Event): void {
    const nombre = (nomSeccion.target as HTMLInputElement). value;
    this.newSeccion.nomSeccion = nombre;
  }

  public guardaSeccion(): void {
    if (this.newSeccion.nomSeccion === ""){
      alert("Inrgese Seccion")
    } else {
      const copia: Seccion = {
        ...this.newSeccion
      }

      this.enviaSeccion.emit(copia);

      this.newSeccion.nomSeccion= '';
    }
  }
}
