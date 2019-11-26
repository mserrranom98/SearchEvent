import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import {ConsultaComponent} from './consulta/consulta.component';
import {
  DxCheckBoxModule,
  DxDataGridModule, DxDateBoxModule, DxFileUploaderModule,
  DxFormModule, DxNumberBoxModule,
  DxSelectBoxModule,
  DxTemplateModule,
  DxTextAreaModule
} from "devextreme-angular";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatStepperModule} from "@angular/material";


@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    EventosRoutingModule,
    MatStepperModule,
    DxDataGridModule,
    DxDateBoxModule,
    DxFileUploaderModule,
    DxFormModule,
    DxSelectBoxModule, DxTemplateModule,
    DxDataGridModule,
    DxNumberBoxModule,
    DxCheckBoxModule,
    DxTextAreaModule
  ]
})
export class EventosModule { }
