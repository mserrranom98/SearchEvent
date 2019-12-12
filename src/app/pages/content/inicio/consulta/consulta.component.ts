import { Component, OnInit } from '@angular/core';

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

  employees = [{
    ID: 1,
    NombreActividad: 'John',
    FechaInicio: 'Heart',
    FechaTermino: '1-9',
    Trabajador: 'admin@prueba.cl',
    Estado: '1',
  }, {
    ID: 2,
    NombreActividad: 'Robert',
    FechaInicio: 'Reagan',
    FechaTermino: '1-9',
    Trabajador: 'trabajador@prueba.cl',
    Estado: '2',
  }, {
    ID: 3,
    NombreActividad: 'Greta',
    FechaInicio: 'Sis',
    FechaTermino: '1-9',
    Trabajador: 'trabajador@prueba.cl',
    Estado: '1',
  }, {
    ID: 4,
    NombreActividad: 'Brett',
    FechaInicio: 'Wade',
    FechaTermino: '1-9',
    Trabajador: 'admin@prueba.cl',
    Estado: '1',
  }, {
    ID: 5,
    NombreActividad: 'Sandra',
    FechaInicio: 'Johnson',
    FechaTermino: '1-9',
    Trabajador: 'organizador@prueba.cl',
    Estado: '1',
  }, {
    ID: 6,
    NombreActividad: 'Kevin',
    FechaInicio: 'Carter',
    FechaTermino: '1-9',
    Trabajador: 'trabajador@prueba.cl',
    Estado: '2',
  }, {
    ID: 7,
    NombreActividad: 'Cynthia',
    FechaInicio: 'Stanwick',
    FechaTermino: '1-9',
    Trabajador: 'trabajador@prueba.cl',
    Estado: '1',
  }, {
    ID: 8,
    NombreActividad: 'Kent',
    FechaInicio: 'Samuelson',
    FechaTermino: '1-9',
    Trabajador: 'Kent',
    Estado: '1',
  }, {
    ID: 9,
    NombreActividad: 'Taylor',
    FechaInicio: 'Riley',
    FechaTermino: '1-9',
    Trabajador: 'Taylor',
    Estado: '1'
  }];

  Estado = [{
    ID: '1',
    Name: 'Habilitado'
  }, {
    ID: '2',
    Name: 'Deshabilitado'
  }];

  Perfil = [{
    ID: '1',
    Name: 'Trabajador'
  }, {
    ID: '2',
    Name: 'Organizador'
  }, {
    ID: '3',
    Name: 'Administrador'
  }];

  constructor() { }

  ngOnInit() {
  }

  customizeTooltip(arg: any) {
    return arg.valueText;
  }

  sendMessage(event: any, userName: string, avatar: string, reply: boolean) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply,
      type: files.length ? 'file' : 'text',
      files,
      user: {
        name: userName,
        avatar,
      },
    });
  }
}
