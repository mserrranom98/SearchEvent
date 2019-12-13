import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import {ConsultaComponent} from './consulta/consulta.component';
import {DxChartModule, DxDataGridModule, DxFormModule, DxSwitchModule} from "devextreme-angular";
import {NbChatModule, NbCheckboxModule} from '@nebular/theme';
import { ComentariosComponent } from './comentarios/comentarios.component';
import {MatDialogModule} from '@angular/material';


@NgModule({
  declarations: [ConsultaComponent, ComentariosComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    DxDataGridModule,
    DxFormModule,
    DxChartModule, NbCheckboxModule,
    DxSwitchModule,
    NbChatModule,
    MatDialogModule,
  ],
  entryComponents: [ComentariosComponent]
})
export class InicioModule { }
