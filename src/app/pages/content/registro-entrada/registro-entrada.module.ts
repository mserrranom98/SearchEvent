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
import {ZXingScannerModule} from "@zxing/ngx-scanner";


@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    RegistroEntradaRoutingModule,
    DxButtonModule,
    DxDateBoxModule,
    DxFormModule,
    DxSelectBoxModule, DxTemplateModule, ZXingScannerModule
  ]
})
export class RegistroEntradaModule { }
