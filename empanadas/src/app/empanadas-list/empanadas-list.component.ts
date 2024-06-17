import { Component } from '@angular/core';

@Component({
  selector: 'app-empanadas-list',
  templateUrl: './empanadas-list.component.html',
  styleUrl: './empanadas-list.component.scss'
})
export class EmpanadasListComponent {
empanada={
  "nombre":"Carne",
  "descripcion": "Carne vacuna, cebolla, morrón, aceituna, condimentos. Cocida frita",
  "precio": 900,
  "stock":180,
  "imagen":"assets/img/carne.jpeg"
}
constructor(){}
ngOnInit():void{}
}
