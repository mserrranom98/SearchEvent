import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadisticasRoutingModule } from './estadisticas-routing.module';
import {ConsultaComponent} from './consulta/consulta.component';
import {DxChartModule} from "devextreme-angular";


@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    EstadisticasRoutingModule,
    DxChartModule
  ]
})
export class EstadisticasModule { }
