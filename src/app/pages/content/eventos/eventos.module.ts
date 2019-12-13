import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import {ConsultaComponent} from './consulta/consulta.component';
import {
  DxCheckBoxModule,
  DxDataGridModule, DxDateBoxModule, DxFileUploaderModule,
  DxFormModule, DxGalleryModule, DxNumberBoxModule,
  DxSelectBoxModule,
  DxTemplateModule,
  DxTextAreaModule, DxToolbarModule
} from 'devextreme-angular';
import {MatButtonModule, MatDialogModule, MatStepperModule} from '@angular/material';
import { EditarComponent } from './editar/editar.component';
import { DetalleComponent } from './detalle/detalle.component';
import { AgregarComponent } from './agregar/agregar.component';


@NgModule({
  declarations: [ConsultaComponent, EditarComponent, DetalleComponent, AgregarComponent],
  imports: [
    CommonModule,
    EventosRoutingModule,
    MatStepperModule,
    DxDataGridModule,
    DxDateBoxModule,
    DxFileUploaderModule,
    DxFormModule,
    DxSelectBoxModule, DxTemplateModule, DxGalleryModule,
    DxDataGridModule,
    DxNumberBoxModule,
    DxCheckBoxModule,
    DxToolbarModule,
    MatDialogModule,
    DxTextAreaModule, MatButtonModule
  ],
  entryComponents: [EditarComponent, DetalleComponent, AgregarComponent]
})
export class EventosModule { }
