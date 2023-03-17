import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  public nombre: string = 'Ironman';
  public edad: number = 33;


  //Metodo
  obtenerNombre():string {

    let palabra = `La palabra es : ${this.nombre} -- ${this.edad}`;

    return palabra;
  }

  //Getter
  get nombreCapitalizado() {

    let nombreCap = this.nombre.toUpperCase();

    return nombreCap;
  }

  //way data binding

  cambiarNombre():void {
    this.nombre = 'Spiderman';
  }

  cambiarEdad():void {
    this.edad = 40;
  }


}
