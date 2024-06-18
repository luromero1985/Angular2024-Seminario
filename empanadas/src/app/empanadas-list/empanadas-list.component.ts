import { Component, OnInit } from '@angular/core';
import { Empanada } from './Empanada';


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
},
{
  nombre:"Pollo",
  descripcion: "Carne vacuna, cebolla, morrón, aceituna, condimentos. Cocida frita",
  precio: 800,
  stock:0,
  imagen:"assets/img/carne.jpeg",
  novedad: false,
},
{
  nombre:"Calavaza",
  descripcion: "Carne vacuna, cebolla, morrón, aceituna, condimentos. Cocida frita",
  precio: 900,
  stock:100,
  imagen:"assets/img/carne.jpeg",
  novedad: true,
},
{
  nombre:"Morron",
  descripcion: "Carne vacuna, cebolla, morrón, aceituna, condimentos. Cocida frita",
  precio: 900,
  stock:50,
  imagen:"assets/img/carne.jpeg",
  novedad: false,
},
]
constructor(){}
ngOnInit():void{}
}
