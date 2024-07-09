import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WowEmpanadasComponent } from './wow-empanadas/wow-empanadas.component';
import { WowNosotrosComponent } from './wow-nosotros/wow-nosotros.component';
import { EmpanadaCompraComponent } from './empanada-compra/empanada-compra.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'empanadas',
    pathMatch:'full'
  },

  {
    path:'empanadas',
    component:WowEmpanadasComponent
  }
,
  {
    path:'nosotros',
    component:WowNosotrosComponent
  },
  {
    path: 'compra',
    component: EmpanadaCompraComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
