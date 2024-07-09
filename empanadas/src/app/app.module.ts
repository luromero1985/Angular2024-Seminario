import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpanadasListComponent } from './empanadas-list/empanadas-list.component';
import { FormsModule } from '@angular/forms';
import { WowEmpanadasComponent } from './wow-empanadas/wow-empanadas.component';
import { CarritoComponent } from './carrito/carrito.component';
import { WowNosotrosComponent } from './wow-nosotros/wow-nosotros.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpanadaCompraComponent } from './empanada-compra/empanada-compra.component';



@NgModule({
  declarations: [
    AppComponent,
    EmpanadasListComponent,
    WowEmpanadasComponent,
    CarritoComponent,
    WowNosotrosComponent,
    InputIntegerComponent,
    EmpanadaCompraComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
