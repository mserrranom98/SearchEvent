import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html'
})
export class ConsultaComponent implements OnInit {
  employees = [{
    ID: 1,
    Nombre: 'Estadio',
    Capacidad: '10000',
    Ubicacion: 'Calle 1',
    Estado: '1',
    sectores: [
      {ID: 1, Nombre: 'VIP', Capacidad: '500'},
      {ID: 2, Nombre: 'Galeria', Capacidad: '10000'}
    ],
  }, {
    ID: 2,
    Nombre: 'Salon',
    Capacidad: '500',
    Ubicacion: 'Alameda #1140',
    Estado: '1',
    sectores: [
      {ID: 1, Nombre: 'Salon', Capacidad: '500'},
      {ID: 2, Nombre: 'Estacionamiento', Capacidad: '60'}
    ],
  }, {
    ID: 3,
    Nombre: 'Hotel',
    Capacidad: '200',
    Ubicacion: 'Manuel Montt #534',
    Estado: '2',
    sectores: [
      {ID: 1, Nombre: 'Salon', Capacidad: '200'},
      {ID: 2, Nombre: 'Estacionamiento', Capacidad: '50'}
    ],
  }, {
    ID: 4,
    Nombre: 'Local',
    Capacidad: '500',
    Ubicacion: 'Bellavista #520',
    Estado: '1',
    sectores: [
      {ID: 1, Nombre: 'Local', Capacidad: '500'},
      {ID: 2, Nombre: 'Guardarropa', Capacidad: '1000'}
    ],
  }, {
    ID: 5,
    Nombre: 'Centro de eventos',
    Capacidad: '840',
    Ubicacion: 'Mapocho #100',
    Estado: '1',
    sectores: [
      {ID: 1, Nombre: 'Centro', Capacidad: '800'},
      {ID: 2, Nombre: 'Estacionamiento', Capacidad: '60'},
      {ID: 3, Nombre: 'Guardarropa', Capacidad: '80'}
    ],
  }, {
    ID: 6,
    Nombre: 'Casa priedra',
    Capacidad: '600',
    Ubicacion: 'Matucana #150',
    Estado: '1',
    sectores: [
      {ID: 1, Nombre: 'Establecimiento', Capacidad: '600'},
      {ID: 2, Nombre: 'Estacionamiento', Capacidad: '60'}
    ],
  }, {
    ID: 7,
    Nombre: 'Centro de eventos',
    Capacidad: '840',
    Ubicacion: 'Mapocho #100',
    Estado: '1',
    sectores: [
      {ID: 1, Nombre: 'Centro', Capacidad: '800'},
      {ID: 2, Nombre: 'Estacionamiento', Capacidad: '60'},
      {ID: 3, Nombre: 'Guardarropa', Capacidad: '80'}
    ],
  }, {
    ID: 8,
    Nombre: 'Centro de eventos',
    Capacidad: '840',
    Ubicacion: 'Mapocho #100',
    Estado: '1',
    sectores: [
      {ID: 1, Nombre: 'Centro', Capacidad: '800'},
      {ID: 2, Nombre: 'Estacionamiento', Capacidad: '60'},
      {ID: 3, Nombre: 'Guardarropa', Capacidad: '80'}
    ],
  }, {
    ID: 9,
    Nombre: 'Centro de eventos',
    Capacidad: '840',
    Ubicacion: 'Mapocho #100',
    Estado: '1',
    sectores: [
      {ID: 1, Nombre: 'Centro', Capacidad: '800'},
      {ID: 2, Nombre: 'Estacionamiento', Capacidad: '60'},
      {ID: 3, Nombre: 'Guardarropa', Capacidad: '80'}
    ],
  }, {
    ID: 10,
    Nombre: 'Centro de eventos',
    Capacidad: '840',
    Ubicacion: 'Mapocho #100',
    Estado: '1',
    sectores: [
      {ID: 1, Nombre: 'Centro', Capacidad: '800'},
      {ID: 2, Nombre: 'Estacionamiento', Capacidad: '60'},
      {ID: 3, Nombre: 'Guardarropa', Capacidad: '80'}
    ],
  }];

  states = [{
    ID: 1,
    Name: 'Alabama'
  }, {
    ID: 2,
    Name: 'Alaska'
  }, {
    ID: 3,
    Name: 'Arizona'
  }, {
    ID: 4,
    Name: 'Arkansas'
  }, {
    ID: 5,
    Name: 'California'
  }, {
    ID: 6,
    Name: 'Colorado'
  }, {
    ID: 7,
    Name: 'Connecticut'
  }, {
    ID: 8,
    Name: 'Delaware'
  }, {
    ID: 9,
    Name: 'District of Columbia'
  }, {
    ID: 10,
    Name: 'Florida'
  }, {
    ID: 11,
    Name: 'Georgia'
  }, {
    ID: 12,
    Name: 'Hawaii'
  }, {
    ID: 13,
    Name: 'Idaho'
  }, {
    ID: 14,
    Name: 'Illinois'
  }, {
    ID: 15,
    Name: 'Indiana'
  }, {
    ID: 16,
    Name: 'Iowa'
  }, {
    ID: 17,
    Name: 'Kansas'
  }, {
    ID: 18,
    Name: 'Kentucky'
  }, {
    ID: 19,
    Name: 'Louisiana'
  }, {
    ID: 20,
    Name: 'Maine'
  }, {
    ID: 21,
    Name: 'Maryland'
  }, {
    ID: 22,
    Name: 'Massachusetts'
  }, {
    ID: 23,
    Name: 'Michigan'
  }, {
    ID: 24,
    Name: 'Minnesota'
  }, {
    ID: 25,
    Name: 'Mississippi'
  }, {
    ID: 26,
    Name: 'Missouri'
  }, {
    ID: 27,
    Name: 'Montana'
  }, {
    ID: 28,
    Name: 'Nebraska'
  }, {
    ID: 29,
    Name: 'Nevada'
  }, {
    ID: 30,
    Name: 'New Hampshire'
  }, {
    ID: 31,
    Name: 'New Jersey'
  }, {
    ID: 32,
    Name: 'New Mexico'
  }, {
    ID: 33,
    Name: 'New York'
  }, {
    ID: 34,
    Name: 'North Carolina'
  }, {
    ID: 35,
    Name: 'Ohio'
  }, {
    ID: 36,
    Name: 'Oklahoma'
  }, {
    ID: 37,
    Name: 'Oregon'
  }, {
    ID: 38,
    Name: 'Pennsylvania'
  }, {
    ID: 39,
    Name: 'Rhode Island'
  }, {
    ID: 40,
    Name: 'South Carolina'
  }, {
    ID: 41,
    Name: 'South Dakota'
  }, {
    ID: 42,
    Name: 'Tennessee'
  }, {
    ID: 43,
    Name: 'Texas'
  }, {
    ID: 44,
    Name: 'Utah'
  }, {
    ID: 45,
    Name: 'Vermont'
  }, {
    ID: 46,
    Name: 'Virginia'
  }, {
    ID: 47,
    Name: 'Washington'
  }, {
    ID: 48,
    Name: 'West Virginia'
  }, {
    ID: 49,
    Name: 'Wisconsin'
  }, {
    ID: 50,
    Name: 'Wyoming'
  }, {
    ID: 51,
    Name: 'North Dakota'
  }];



  Estado = [{
    ID: '1',
    Name: 'Habilitado'
  }, {
    ID: '2',
    Name: 'Deshabilitado'
  }];

  solicitudUpdate() {  }

  constructor() { }

  ngOnInit() {
  }

}
