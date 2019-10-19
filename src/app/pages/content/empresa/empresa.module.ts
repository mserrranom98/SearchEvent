import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import {ConsultaComponent} from './consulta/consulta.component';
import {DxDateBoxModule, DxFormModule, DxSelectBoxModule, DxTextAreaModule} from "devextreme-angular";


@NgModule({
  declarations: [
    ConsultaComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    DxSelectBoxModule,
    DxTextAreaModule,
    DxDateBoxModule,
    DxFormModule
  ]
})
export class EmpresaModule { }
