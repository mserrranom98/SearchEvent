import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActividadesTrabajadorRoutingModule } from './actividades-trabajador-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';


@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    ActividadesTrabajadorRoutingModule
  ]
})
export class ActividadesTrabajadorModule { }
