import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

    //creo una propiedad llamada valor
    public valor:number = 0;

    public base:number = 5;
  
    acumulador(data:number){
      this.valor = this.valor+data;
    }

}
