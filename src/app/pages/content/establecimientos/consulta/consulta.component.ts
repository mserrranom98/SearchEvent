import {Component, OnInit} from '@angular/core';
import {RegionesService} from '../../../../shared/services/regiones/regiones.service';
import {Regiones} from '../../../../shared/models/regiones/regiones.model';
import {EstablecimientosService} from '../../../../shared/services/establecimientos/establecimientos.service';
import {SectoresService} from '../../../../shared/services/sectores/sectores.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html'
})
export class ConsultaComponent implements OnInit {

  private token: string;

  establecimientos = [];

  estados = [
    {
      ID: true,
      Name: 'Habilitado'
    },
    {
      ID: false,
      Name: 'Deshabilitado'
    }
  ];

  regiones: Regiones[] = [];

  constructor(
    private regionesService: RegionesService,
    private establecimientosService: EstablecimientosService,
    private sectoresService: SectoresService
  ) {
    this.regiones = this.regionesService.getRegiones();
    this.token = localStorage.getItem('token');
  }

  ngOnInit() {
    this.getEstablecimientos();
  }

  getEstablecimientos() {
    this.establecimientosService.getEstablecimientos(this.token).subscribe((response: any) => {
      console.log(response.message);
      if (response.code === '0') {
        this.establecimientos = response.establecimientos;
      }
    }, error => {
      console.log(error);
    });
  }

  updateEstablecimiento(event) {
    console.log('INICIO DE ACTUALIZACION DE ESTABLECIMIENTO:');
    this.establecimientosService.updateEstablecimiento(this.token, event.data).subscribe((response: any) => {
      console.log(response.message);
    }, error => {
      console.log(error);
    });
  }

  addEstablecimiento(event) {
    console.log('INICIO DE CREACION DE ESTABLECIMIENTO:');
    this.establecimientosService.addEstablecimiento(this.token, event.data).subscribe((response: any) => {
      console.log(response.message);
    }, error => {
      console.log(error);
    });
  }

  updateSector(event) {
    console.log('INICIO DE ACTUALIZACION DE SECTOR:');
    this.sectoresService.updateSector(this.token, event.data).subscribe((response: any) => {
      console.log(response.message);
    }, error => {
      console.log(error);
    });
  }

  addSector(event) {
    console.log('INICIO DE CREACION DE SECTOR:');
    this.sectoresService.addSector(this.token, event.data).subscribe((response: any) => {
      console.log(response.message);
    }, error => {
      console.log(error);
    });
  }

  validarEstablecimiento(e) {
    if (e.isValid && this.establecimientos.filter((item) => item.nombre.trim().toLowerCase() === e.newData.nombre.trim().toLowerCase()).length > 0) {
      e.isValid = false;
      e.errorText = 'El establecimiento ya existe';
    }
  }

  validarSector(e) {
    console.log(e);
    if (e.isValid && this.establecimientos.filter((item) => item.nombre.trim().toLowerCase() === e.newData.nombre.trim().toLowerCase()).length > 0) {
      e.isValid = false;
      e.errorText = 'El establecimiento ya existe';
    }
  }

  onEditorPreparing(e) {
    if (e.row) {
      if (e.row.inserted && e.dataField === 'estado') {
        e.editorOptions.value = true;
        e.editorOptions.disabled = true;
      }
    }
  }

}
