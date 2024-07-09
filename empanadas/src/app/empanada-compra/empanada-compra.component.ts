import { Component, Input } from '@angular/core';
import { Empanada } from '../empanadas-list/Empanada';
import { EmpanadaCarritoService } from '../empanada-carrito.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-empanada-compra',
  templateUrl: './empanada-compra.component.html',
  styleUrl: './empanada-compra.component.scss'
})
export class EmpanadaCompraComponent {

  empanadas: Empanada[] = [];
  totalPrecio: number = 0;


  constructor(private router: Router) {
    // Recibe datos pasados por el estado del Router
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.empanadas = navigation.extras.state['empanadas'] || [];
      this.totalPrecio = navigation.extras.state['totalPrecio'] || 0;
    }
  }

  ngOnInit(): void {}
  
  volver(): void {
    this.router.navigate(['/empanadas']).then(() => {
      window.location.reload();
    });
  }
}

