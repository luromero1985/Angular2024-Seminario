import { Injectable } from '@angular/core';
import { Empanada } from './empanadas-list/Empanada';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmpanadaCarritoService {
  
 private _listaCarrito: Empanada[]=[];
  listaCarrito: BehaviorSubject <Empanada[]>= new BehaviorSubject(this._listaCarrito);

 constructor() { }

  agregarAlCarrito(empanada: Empanada) {
    let item =this._listaCarrito.find((v1)=>v1.nombre==empanada.nombre);
    
    if(!item){
    this._listaCarrito.push({...empanada});
    }
      else{
      item.cantidad+=empanada.cantidad;
     }
    console.log(this._listaCarrito);  

    this.listaCarrito.next(this._listaCarrito);
  }

 
}
