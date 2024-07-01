import { Component, OnInit } from '@angular/core';
import { EmpanadaCarritoService } from '../empanada-carrito.service';
import { Empanada } from '../empanadas-list/Empanada';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})

export class CarritoComponent implements OnInit{

  listaCarrito$!: Observable<Empanada[]>;
  totalPrecio: number = 0;
  totalEmpanadas: number=0;


  constructor(private carrito: EmpanadaCarritoService){
   this.listaCarrito$=carrito.listaCarrito.asObservable();
  }

  ngOnInit(): void {
    this.listaCarrito$.subscribe(empanadas => {
      this.totalPrecio = empanadas.reduce((total, empanada) => total + (empanada.cantidad * empanada.precio), 0);
      this.totalEmpanadas = empanadas.reduce((total, empanada) => total + empanada.cantidad, 0);
    });
  }



}
