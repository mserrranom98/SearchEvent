import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EstablecimientosRoutingModule} from './establecimientos-routing.module';
import {ConsultaComponent} from './consulta/consulta.component';


@NgModule({
  declarations: [
    ConsultaComponent
  ],
  imports: [
    CommonModule,
    EstablecimientosRoutingModule
  ]
})
export class EstablecimientosModule {
}
