import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsultaComponent} from './consulta/consulta.component';


const routes: Routes = [
  {path: 'consulta', component: ConsultaComponent, data: { title: 'Consulta' }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadisticasRoutingModule { }
