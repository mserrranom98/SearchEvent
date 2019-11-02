import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import {ConsultaComponent} from './consulta/consulta.component';
import {
  DxButtonModule,
  DxDateBoxModule, DxFileUploaderModule,
  DxFormModule,
  DxPopupModule,
  DxSelectBoxModule, DxTemplateModule,
  DxTextAreaModule
} from "devextreme-angular";


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
    DxFormModule,
    DxPopupModule,
    DxTemplateModule,
    DxButtonModule,
    DxFileUploaderModule
  ]
})
export class EmpresaModule { }
