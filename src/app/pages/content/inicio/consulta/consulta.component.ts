import { Component, OnInit } from '@angular/core';
import {ComentariosComponent} from '../comentarios/comentarios.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-consulta',
  styles: [`
    ::ng-deep nb-layout-column {
      display: flex;
      justify-content: center;
    }
    :host {
      display: flex;
    }
    nb-chat {
      width: 300px;
      margin: 1rem;
    }
  `],
  templateUrl: './consulta.component.html'
})
export class ConsultaComponent implements OnInit {
  value: string;
  name: string;

  messages: any[] = [];

  energySources: any[] = [
    { value: 'VIP', name: 'VIP' },
    { value: 'Platea', name: 'Platea' },
    { value: 'General', name: 'General' }
  ];

  countriesInfo  = [{
    country: '13-11-2019',
    VIP: 59.8,
    Platea: 937.6,
    General: 582
  }, {
    country: '14-11-2019',
    VIP: 74.2,
    Platea: 308.6,
    General: 35.1
  }, {
    country: '15-11-2019',
    VIP: 40,
    Platea: 128.5,
    General: 361.8
  }, {
    country: '16-11-2019',
    VIP: 22.6,
    Plantea: 241.5,
    General: 64.9
  }, {
    country: '17-11-2019',
    VIP: 19,
    Platea: 119.3,
    General: 28.9
  }, {
    country: '18-11-2019',
    VIP: 6.1,
    Platea: 123.6,
    General: 77.3
  }];

  energySources2: any[] = [
    { value: 'Estacionamiento', name: 'Estacionamiento' },
    { value: 'Guardarropa', name: 'Guardarropa' }
  ];

  countriesInfo2  = [{
    country: '13-11-2019',
    Estacionamiento: 564.3,
    Guardarropa: 187.9
  }, {
    country: '14-11-2019',
    Estacionamiento: 956.9,
    Guardarropa: 11.3
  }, {
    country: '15-11-2019',
    Estacionamiento: 105,
    Guardarropa: 32.4
  }, {
    country: '16-11-2019',
    Estacionamiento: 120.8,
    Guardarropa: 64.8
  }, {
    country: '17-11-2019',
    Estacionamiento: 204.8,
    Guardarropa: 3.8
  }, {
    country: '18-11-2019',
    Estacionamiento: 85.7,
    Guardarropa: 37.8
  }];

  actividades = [
    {
      NombreActividad: 'Preparar luces',
      FechaInicio: '2019-01-02 08:30',
      FechaTermino: '2019-01-05 12:30',
      Trabajador: 'Marcelo Grageda Gonzalez',
      estado: 'Finalizado',
      comentarios: []
    },
    {
      NombreActividad: 'Registar entrada a estacionamiento',
      FechaInicio: '2019-01-02 20:30',
      FechaTermino: '2019-01-08 22:30',
      Trabajador: 'Marcelo Grageda Gonzalez',
      estado: 'Pendiente',
      comentarios: []
    },
    {
      NombreActividad: 'Registar entrada al evento',
      FechaInicio: '2019-01-02 20:30',
      FechaTermino: '2019-01-05 22:30',
      Trabajador: 'Marcelo Grageda Gonzalez',
      estado: 'Pendiente',
      comentarios: []
    }
  ];

  Estado = [{
    ID: 'Pendiente',
    Name: 'Pendiente'
  }, {
    ID: 'Finalizado',
    Name: 'Finalizado'
  }];

  Trabajadores = [
    {
      ID: 'Marcelo Grageda Gonzalez',
      Name: 'Marcelo Grageda Gonzalez'
    }
  ];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  customizeTooltip(arg: any) {
    return arg.valueText;
  }

  openComentarios(event) {
    this.dialog.open(ComentariosComponent, {data: event.data});
  }
}
