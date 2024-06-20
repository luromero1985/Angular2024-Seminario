import { Component, OnInit } from '@angular/core';
import { Empanada } from './Empanada';
import { EmpanadaCarritoService } from '../empanada-carrito.service';


@Component({
  selector: 'app-empanadas-list',
  templateUrl: './empanadas-list.component.html',
  styleUrl: './empanadas-list.component.scss'
})


export class EmpanadasListComponent implements OnInit {

empanadas: Empanada[] = [
  {
  nombre:"Carne",
  descripcion: "Carne vacuna, cebolla, morrón, aceituna, condimentos. Cocida frita",
  precio: 900,
  stock:180,
  imagen:"assets/img/carne.jpeg",
  novedad: false,
  cantidad:0,
},
{
  nombre:"Pollo",
  descripcion: "Carne vacuna, cebolla, morrón, aceituna, condimentos. Cocida frita",
  precio: 800,
  stock:0,
  imagen:"assets/img/carne.jpeg",
  novedad: false,
  cantidad:0,
},
{
  nombre:"Calavaza",
  descripcion: "Carne vacuna, cebolla, morrón, aceituna, condimentos. Cocida frita",
  precio: 900,
  stock:100,
  imagen:"assets/img/carne.jpeg",
  novedad: true,
  cantidad:0,
},
{
  nombre:"Morron",
  descripcion: "Carne vacuna, cebolla, morrón, aceituna, condimentos. Cocida frita",
  precio: 900,
  stock:50,
  imagen:"assets/img/carne.jpeg",
  novedad: false,
  cantidad:0,
},
]
  

constructor(private carrito: EmpanadaCarritoService){}
ngOnInit():void{}

agregarAlCarrito(empanada: Empanada): void{
  this.carrito.agregarAlCarrito(empanada);
  empanada.stock-=empanada.cantidad;
  empanada.cantidad=0;
}

maxReached(m: String){
  alert(m);
}

}
