import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroEntradaRoutingModule } from './registro-entrada-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';


@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    RegistroEntradaRoutingModule,
  ]
})
export class RegistroEntradaModule { }
