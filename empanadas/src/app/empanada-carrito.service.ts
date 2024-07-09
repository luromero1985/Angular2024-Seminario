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
    //find controla si ya esta el elemento en la lista, en caso de estar no vuelve a agregarlo, sino que modifica solo la cantidad numerica
    let item =this._listaCarrito.find((v1)=>v1.nombre==empanada.nombre);
    
    if(!item){
      //... hace una copia de mi objeto
    this._listaCarrito.push({...empanada});
    }
      else{
      item.cantidad+=empanada.cantidad;
     }
    console.log(this._listaCarrito);  

    this.listaCarrito.next(this._listaCarrito);
  }



  quitarEmpanada(empanada: Empanada): void {
    const index = this._listaCarrito.findIndex((item) => item.nombre === empanada.nombre);

    if (index !== -1) {
      this._listaCarrito[index].cantidad--;

      if (this._listaCarrito[index].cantidad === 0) {
        this._listaCarrito.splice(index, 1);
      }

      this.listaCarrito.next(this._listaCarrito);
    }
  }
}
