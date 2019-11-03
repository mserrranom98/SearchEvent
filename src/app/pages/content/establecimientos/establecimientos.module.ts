import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EstablecimientosRoutingModule} from './establecimientos-routing.module';
import {ConsultaComponent} from './consulta/consulta.component';
import {DxDataGridModule} from 'devextreme-angular';


@NgModule({
  declarations: [
    ConsultaComponent
  ],
  imports: [
    CommonModule,
    EstablecimientosRoutingModule,
    DxDataGridModule
  ]
})
export class EstablecimientosModule {
}
