import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActividadesTrabajadorRoutingModule } from './actividades-trabajador-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';
import {DxDataGridModule, DxTagBoxModule, DxTextAreaModule} from "devextreme-angular";


@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    DxDataGridModule,
    DxTextAreaModule,
    DxTagBoxModule,
    ActividadesTrabajadorRoutingModule
  ]
})
export class ActividadesTrabajadorModule { }
