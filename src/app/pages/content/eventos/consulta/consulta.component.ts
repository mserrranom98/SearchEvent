import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import {EditarComponent} from '../editar/editar.component';
import {DetalleComponent} from '../detalle/detalle.component';
import {MatDialog} from '@angular/material';
import {AgregarComponent} from '../agregar/agregar.component';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  eventos = [
    {
      NombreEvento: 'Concierto de Scorpion',
      FechaPublicacion: '2019-01-01 00:00',
      FechaInicio: '2019-12-01 20:30',
      FechaFinalizacion: '2019-12-01 22:30',
      Categoria: 'Metal',
      estado: 'Finalizado',
      Establecimiento: 'Establecimiento #01'
    },
    {
      NombreEvento: 'Concierto de Metallica',
      FechaPublicacion: '2020-01-01 00:00',
      FechaInicio: '2020-12-01 20:30',
      FechaFinalizacion: '2020-12-01 22:30',
      Categoria: 'Metal',
      estado: 'Creado',
      Establecimiento: 'Establecimiento #20'
    },
    {
      NombreEvento: 'Concierto de Rammstein',
      FechaPublicacion: '2019-12-01 00:00',
      FechaInicio: '2020-10-01 20:30',
      FechaFinalizacion: '2020-10-01 22:30',
      Categoria: 'Metal',
      estado: 'Publicado',
      Establecimiento: 'Establecimiento #05'
    },
  ];

  constructor(
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  openEditar(event) {
    this.dialog.open(EditarComponent, {width: 'auto', height: 'auto', data: event.data});
  }

  openDetalle(event) {
    this.dialog.open(DetalleComponent, {width: 'auto', height: 'auto', data: event.data});
  }

  openAgregar(event) {
    this.dialog.open(AgregarComponent, {width: 'auto', height: 'auto', data: event.data});
  }

}
