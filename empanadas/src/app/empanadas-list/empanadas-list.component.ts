import { Component, OnInit } from '@angular/core';
import { Empanada } from './Empanada';
import { EmpanadaCarritoService } from '../empanada-carrito.service';
import { EmpanadaDataService } from '../empanada-data.service';


@Component({
  selector: 'app-empanadas-list',
  templateUrl: './empanadas-list.component.html',
  styleUrl: './empanadas-list.component.scss'
})


export class EmpanadasListComponent implements OnInit {
//vamos a trabajar con una lista de empanadas
empanadas: Empanada[]=[];  

constructor(private carrito: EmpanadaCarritoService, private empanadaDataService: EmpanadaDataService){

}
ngOnInit():void{
  this.empanadaDataService.getAll().subscribe((empanadas:Empanada[])=> {
    this.empanadas=[];
    this.empanadas= empanadas}
  );
}

agregarAlCarrito(empanada: Empanada): void{
  this.carrito.agregarAlCarrito(empanada);
  empanada.stock-=empanada.cantidad;
  empanada.cantidad=0;
}

maxReached(m: String){
  alert(m);
}

}
