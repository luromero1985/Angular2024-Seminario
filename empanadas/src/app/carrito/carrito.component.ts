import { Component, OnInit } from '@angular/core';
import { EmpanadaCarritoService } from '../empanada-carrito.service';
import { Empanada } from '../empanadas-list/Empanada';
import { BehaviorSubject, Observable } from 'rxjs';
import { EmpanadaCompraComponent } from '../empanada-compra/empanada-compra.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})

export class CarritoComponent implements OnInit{

  listaCarrito$!: Observable<Empanada[]>;
  totalPrecio: number = 0;
  totalEmpanadas: number=0;
  listaCarritoActualizada = new BehaviorSubject<Empanada[]>([]);



  constructor(private carrito: EmpanadaCarritoService, private router: Router){
   this.listaCarrito$=carrito.listaCarrito.asObservable();
  }


  ngOnInit(): void {
    this.listaCarrito$.subscribe(empanadas => {
      this.totalPrecio = empanadas.reduce((total, empanada) => total + (empanada.cantidad * empanada.precio), 0);
      this.totalEmpanadas = empanadas.reduce((total, empanada) => total + empanada.cantidad, 0);
    });
  }


  quitarEmpanada(empanada: Empanada): void {
    this.carrito.quitarEmpanada(empanada);
    this.actualizarCarrito();
  }

  actualizarCarrito() {
    this.listaCarrito$.subscribe(empanadas => {
      this.totalPrecio = empanadas.reduce((total, empanada) => total + (empanada.cantidad * empanada.precio), 0);
      this.totalEmpanadas = empanadas.reduce((total, empanada) => total + empanada.cantidad, 0);
      this.listaCarritoActualizada.next(empanadas);
    });
  }

  comprar(): void {
    this.listaCarrito$.subscribe(empanadas => {
      this.router.navigate(['/compra'], {
        state: { empanadas: empanadas, totalPrecio: this.totalPrecio }
      });
    });
  }
}
