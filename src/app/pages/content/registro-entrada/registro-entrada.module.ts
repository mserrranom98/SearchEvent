import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroEntradaRoutingModule } from './registro-entrada-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';
import {
  DxButtonModule,
  DxDateBoxModule,
  DxFormModule,
  DxSelectBoxModule,
  DxTemplateModule,
  DxTextAreaModule
} from "devextreme-angular";


@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    RegistroEntradaRoutingModule,
    DxButtonModule,
    DxDateBoxModule,
    DxFormModule,
    DxSelectBoxModule, DxTemplateModule
  ]
})
export class RegistroEntradaModule { }
