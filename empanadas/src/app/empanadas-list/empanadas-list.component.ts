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
constructor(){}
ngOnInit():void{}

masCantidad(empanada: Empanada):void{
  if(empanada.cantidad<empanada.stock){
  empanada.cantidad++;
}
}

menosCantidad(empanada: Empanada):void{
  if(empanada.cantidad>0){
  empanada.cantidad--;
}
}

cambiaCantidad(event:any, empanada: Empanada):void{

  const inputElement = event.target as HTMLInputElement;
    const newValue = inputElement.value;

    // Verificar si el valor es numérico
    if (/^\d+$/.test(newValue)) {
      let numericValue = parseInt(newValue, 10);

      // Verificar si está dentro del rango permitido
      if (numericValue >= 0 && numericValue <= empanada.stock) {
        empanada.cantidad = numericValue;
      } else if (numericValue > empanada.stock) {
        empanada.cantidad = empanada.stock;
        inputElement.value = empanada.stock.toString();
      } else {
        empanada.cantidad = 0;
        inputElement.value = '0';
      }
    } else {
      // Si no es numérico, revertir al valor anterior
      inputElement.value = empanada.cantidad.toString();
    }
  }

  validateInput(event: KeyboardEvent): void {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Delete'];
    const isNumberKey = /^[0-9]$/;

    if (!isNumberKey.test(event.key) && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }
}
