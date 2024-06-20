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

  constructor(private carrito: EmpanadaCarritoService){
   this.listaCarrito$=carrito.listaCarrito.asObservable();
  }

  ngOnInit(): void {}



}
