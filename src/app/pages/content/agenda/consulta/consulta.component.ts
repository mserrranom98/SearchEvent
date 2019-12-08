import {Component, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html'
})
export class ConsultaComponent implements OnInit {

  calendarPlugins = [dayGridPlugin];

  currentDate: Date = new Date(2017, 4, 25);

  appointmentsData = [{
    Evento: 'Website Re-Design Plan',
    Establecimiento: 'Website Re-Design Plan',
    startDate: new Date(2017, 4, 22, 9, 30),
    endDate: new Date(2017, 4, 22, 11, 30)
  }, {
    Actividad: 'Book Flights to San Fran for Sales Trip',
    startDate: new Date(2017, 4, 22, 12, 0),
    endDate: new Date(2017, 4, 22, 13, 0),
    allDay: true
  }, {
    Evento: 'Install New Router in Dev Room',
    Establecimiento: 'Install New Router in Dev Room',
    startDate: new Date(2017, 4, 22, 14, 30),
    endDate: new Date(2017, 4, 22, 15, 30)
  }, {
    Actividad: 'Approve Personal Computer Upgrade Plan',
    startDate: new Date(2017, 4, 23, 10, 0),
    endDate: new Date(2017, 4, 23, 11, 0)
  }, {
    Evento: 'Final Budget Review',
    Establecimiento: 'Install New Router in Dev Room',
    startDate: new Date(2017, 4, 23, 12, 0),
    endDate: new Date(2017, 4, 23, 13, 35)
  }, {
    Actividad: 'New Brochures',
    startDate: new Date(2017, 4, 23, 14, 30),
    endDate: new Date(2017, 4, 23, 15, 45)
  }, {
    Evento: 'Install New Database',
    Establecimiento: 'Install New Router in Dev Room',
    startDate: new Date(2017, 4, 24, 9, 45),
    endDate: new Date(2017, 4, 24, 11, 15)
  }, {
    Actividad: 'Approve New Online Marketing Strategy',
    startDate: new Date(2017, 4, 24, 12, 0),
    endDate: new Date(2017, 4, 24, 14, 0)
  }, {
    Evento: 'Upgrade Personal Computers',
    Establecimiento: 'Install New Router in Dev Room',
    startDate: new Date(2017, 4, 24, 15, 15),
    endDate: new Date(2017, 4, 24, 16, 30)
  }, {
    Actividad: 'Customer Workshop',
    startDate: new Date(2017, 4, 25, 11, 0),
    endDate: new Date(2017, 4, 25, 12, 0),
    allDay: true
  }, {
    text: 'Prepare 2015 Marketing Plan',
    startDate: new Date(2017, 4, 25, 11, 0),
    endDate: new Date(2017, 4, 25, 13, 30)
  }, {
    text: 'Brochure Design Review',
    startDate: new Date(2017, 4, 25, 14, 0),
    endDate: new Date(2017, 4, 25, 15, 30)
  }, {
    text: 'Create Icons for Website',
    startDate: new Date(2017, 4, 26, 10, 0),
    endDate: new Date(2017, 4, 26, 11, 30)
  }, {
    text: 'Upgrade Server Hardware',
    startDate: new Date(2017, 4, 26, 14, 30),
    endDate: new Date(2017, 4, 26, 16, 0)
  }, {
    text: 'Submit New Website Design',
    startDate: new Date(2017, 4, 26, 16, 30),
    endDate: new Date(2017, 4, 26, 18, 0)
  }, {
    text: 'Launch New Website',
    startDate: new Date(2017, 4, 26, 12, 20),
    endDate: new Date(2017, 4, 26, 14, 0)
  }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
