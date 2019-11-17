import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html'
})
export class ConsultaComponent implements OnInit {
  value: string;
  name: string;

  energySources: any[] = [
    { value: 'hydro', name: 'Hydro-electric' },
    { value: 'oil', name: 'Oil' },
    { value: 'gas', name: 'Natural gas' },
    { value: 'coal', name: 'Coal' },
    { value: 'nuclear', name: 'Nuclear' }
  ];

  countriesInfo  = [{
  country: 'USA',
  hydro: 59.8,
  oil: 937.6,
  gas: 582,
  coal: 564.3,
  nuclear: 187.9
}, {
  country: 'China',
  hydro: 74.2,
  oil: 308.6,
  gas: 35.1,
  coal: 956.9,
  nuclear: 11.3
}, {
  country: 'Russia',
  hydro: 40,
  oil: 128.5,
  gas: 361.8,
  coal: 105,
  nuclear: 32.4
}, {
  country: 'Japan',
  hydro: 22.6,
  oil: 241.5,
  gas: 64.9,
  coal: 120.8,
  nuclear: 64.8
}, {
  country: 'India',
  hydro: 19,
  oil: 119.3,
  gas: 28.9,
  coal: 204.8,
  nuclear: 3.8
}, {
  country: 'Germany',
  hydro: 6.1,
  oil: 123.6,
  gas: 77.3,
  coal: 85.7,
  nuclear: 37.8
}];

  employees = [{
    ID: 1,
    Nombre: 'John',
    Apellido: 'Heart',
    Rut: '1-9',
    Correo: 'admin@prueba.cl',
    Estado: '1',
    Contraseña: '1234',
    Perfil: '3',
  }, {
    ID: 2,
    Nombre: 'Robert',
    Apellido: 'Reagan',
    Rut: '1-9',
    Correo: 'trabajador@prueba.cl',
    Estado: '2',
    Contraseña: '1234',
    Perfil: '1',
  }, {
    ID: 3,
    Nombre: 'Greta',
    Apellido: 'Sis',
    Rut: '1-9',
    Correo: 'trabajador@prueba.cl',
    Estado: '1',
    Contraseña: '1234',
    Perfil: '1',
  }, {
    ID: 4,
    Nombre: 'Brett',
    Apellido: 'Wade',
    Rut: '1-9',
    Correo: 'admin@prueba.cl',
    Estado: '1',
    Contraseña: '1234',
    Perfil: '3',
  }, {
    ID: 5,
    Nombre: 'Sandra',
    Apellido: 'Johnson',
    Rut: '1-9',
    Correo: 'organizador@prueba.cl',
    Estado: '1',
    Contraseña: '1234',
    Perfil: '2',
  }, {
    ID: 6,
    Nombre: 'Kevin',
    Apellido: 'Carter',
    Rut: '1-9',
    Correo: 'trabajador@prueba.cl',
    Estado: '2',
    Contraseña: '1234',
    Perfil: '3',
  }, {
    ID: 7,
    Nombre: 'Cynthia',
    Apellido: 'Stanwick',
    Rut: '1-9',
    Correo: 'trabajador@prueba.cl',
    Estado: '1',
    Contraseña: '1234',
    Perfil: '3',
  }, {
    ID: 8,
    NombreActividad: 'Kent',
    FechaInicio: 'Samuelson',
    FechaTermino: '1-9',
    Trabajador: 'Kent',
    Estado: '1',
    Contraseña: '1234',
    Perfil: '3',
  }, {
    ID: 9,
    Nombre: 'Taylor',
    Apellido: 'Riley',
    Rut: '1-9',
    Correo: 'Taylor',
    Estado: '1',
    Contraseña: '1234',
    Perfil: '3',
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

}
