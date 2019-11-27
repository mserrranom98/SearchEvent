import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

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
    Nombre: 'Kent',
    Apellido: 'Samuelson',
    Rut: '1-9',
    Correo: 'trabajador@prueba.cl',
    Estado: '1',
    Contraseña: '1234',
    Perfil: '3',
  }, {
    ID: 9,
    Nombre: 'Taylor',
    Apellido: 'Riley',
    Rut: '1-9',
    Correo: 'trabajador@prueba.cl',
    Estado: '1',
    Contraseña: '1234',
    Perfil: '3',
  }];

  customers = [{
    ID: 1,
    Sector: 'VIP',
    FechaInicio: '25-11-2019',
    FechaTermino: '30-11-2019',
    Cantidad: '100',
    Precio: '5.000',
  }, {
    ID: 2,
    Sector: 'Galeria',
    FechaInicio: '02-12-2019',
    FechaTermino: '30-12-2019',
    Cantidad: '500',
    Precio: '3.000',
  }, {
    ID: 3,
    Sector: 'Platea',
    FechaInicio: '02-01-2020',
    FechaTermino: '30-02-2020',
    Cantidad: '200',
    Precio: '4.000',
  }
];

  entradas = [{
    ID: 1,
    Sector: 'VIP',
    Capacidad: '1000',
    CantidadVentas: '900',
    Precio: '90.000', promociones: [
      {ID: 1, FechaInicio: '26-11-2019', FechaTermino: '02-02-2020', Cantidad: '100', Precio: '85.000'},
      {ID: 2, FechaInicio: '02-02-2020', FechaTermino: '02-03-2020', Cantidad: '100', Precio: '60.000'}
    ],
  }, {
    ID: 2,
    Sector: 'Galeria',
    Capacidad: '20000',
    CantidadVentas: '16000',
    Precio: '50.000', promociones: [
      {ID: 1, FechaInicio: '26-11-2019', FechaTermino: '02-02-2020', Cantidad: '1000', Precio: '45.000'},
      {ID: 2, FechaInicio: '02-02-2020', FechaTermino: '02-03-2020', Cantidad: '1000', Precio: '30.000'}
    ],
  }, {
    ID: 3,
    Sector: 'Platea',
    Capacidad: '8000',
    CantidadVentas: '7000',
    Precio: '75.000', promociones: [
      {ID: 1, FechaInicio: '26-11-2019', FechaTermino: '02-02-2020', Cantidad: '500', Precio: '70.000'},
      {ID: 2, FechaInicio: '02-02-2020', FechaTermino: '02-03-2020', Cantidad: '500', Precio: '60.000'}
    ],
  }];

  servicios = [{
    ID: 1,
    Sector: 'Estacionamiento',
    Capacidad: '500',
    CantidadVentas: '450',
    Precio: '3.000',
  }, {
    ID: 2,
    Sector: 'Guardarropa',
    Capacidad: '600',
    CantidadVentas: '600',
    Precio: '2.500',
  }];

  images  = [
    'images/gallery/1.jpg',
    'images/gallery/2.jpg',
    'images/gallery/3.jpg',
    'images/gallery/4.jpg',
    'images/gallery/5.jpg',
    'images/gallery/6.jpg',
    'images/gallery/7.jpg',
    'images/gallery/8.jpg',
    'images/gallery/9.jpg',
  ];


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

}
