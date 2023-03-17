import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  public heroes:string[] = ['Fernando', 'Adrian', 'Jose', 'Hanna'];

  public heroeBorrado:string = '';


  borrarHeroe() {
    let heroeD = this.heroes.shift() || '';
    return this.heroeBorrado  = heroeD;
  }
}
