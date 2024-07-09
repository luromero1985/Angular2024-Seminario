import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Empanada } from '../empanadas-list/Empanada';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})


export class InputIntegerComponent implements OnInit {
  constructor() { }


  @Input()
  cantidad!: number;

  @Input()
  max!: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  MaxReached: EventEmitter<String> = new EventEmitter<String>();

  ngOnInit(): void {
  }

  masCantidad(): void {
    if (this.cantidad < this.max) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    } else {
      this.MaxReached.emit("Alanzaste el máximo")
    }
  }

  menosCantidad(): void {
    if (this.cantidad > 0) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  cambiaCantidad(event: any): void {

    const inputElement = event.target as HTMLInputElement;
    const newValue = inputElement.value;

    // Verifica si el valor es numérico
    if (/^\d+$/.test(newValue)) {
      let numericValue = parseInt(newValue, 10);

      // Verifica si está dentro del rango permitido
      if (numericValue >= 0 && numericValue <= this.max) {
        this.cantidad = numericValue;
        this.cantidadChange.emit(this.cantidad);
      } else if (numericValue > this.max) {
        this.cantidad = this.max;
        inputElement.value = this.max.toString();
        this.cantidadChange.emit(this.cantidad);
      } else {
        this.cantidad = 0;
        inputElement.value = '0';
        this.cantidadChange.emit(this.cantidad);
      }
    } else {
      // Si no es numérico, revierte al valor anterior
      inputElement.value = this.cantidad.toString();
      this.cantidadChange.emit(this.cantidad);
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
