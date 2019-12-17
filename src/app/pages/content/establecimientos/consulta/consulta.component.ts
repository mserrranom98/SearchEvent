import {Component, OnInit} from '@angular/core';
import {RegionesService} from '../../../../shared/services/regiones/regiones.service';
import {EstablecimientosService} from '../../../../shared/services/establecimientos/establecimientos.service';
import {SectoresService} from '../../../../shared/services/sectores/sectores.service';
import {Regiones} from '../../../../shared/models/regiones/regiones.model';
import {Sectores} from '../../../../shared/models/sectores/sectores.model';
import {Establecimientos} from '../../../../shared/models/establecimientos/establecimientos.model';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html'
})
export class ConsultaComponent implements OnInit {

  constructor(
    private regionesService: RegionesService,
    private establecimientosService: EstablecimientosService,
    private sectoresService: SectoresService
  ) {
    this.regiones = this.regionesService.getRegiones();
    this.comunas = this.regionesService.getComunas();
    this.token = localStorage.getItem('token');
  }

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

  regiones: any[] = [];
  comunas: any[] = [];

  static setEstablecimiento(result): Establecimientos {
    const establecimiento: Establecimientos = new Establecimientos();
    establecimiento.id = require('uuid/v1');
    establecimiento.cantidad = result.cantidad;
    establecimiento.comuna = result.comuna;
    establecimiento.estado = result.estado;
    establecimiento.nombre = result.nombre;
    establecimiento.region = result.region;
    establecimiento.ubicacion = result.ubicacion;

    return establecimiento;
  }

  static setSector(result): Sectores {
    const sector: Sectores = new Sectores();
    sector.id = require('uuid/v1');
    sector.nombre = result.nombre;
    sector.capacidad = result.capacidad;

    return sector;
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
    this.establecimientosService.updateEstablecimiento(this.token, ConsultaComponent.setEstablecimiento(event.data)).subscribe((response: any) => {
      console.log(response.message);
    }, error => {
      console.log(error);
    });
  }

  addEstablecimiento(event) {
    console.log('INICIO DE CREACION DE ESTABLECIMIENTO:');
    this.establecimientosService.addEstablecimiento(this.token, ConsultaComponent.setEstablecimiento(event.data)).subscribe((response: any) => {
      console.log(response.message);
    }, error => {
      console.log(error);
    });
  }

  updateSector(event, idEstablecimiento) {
    console.log('INICIO DE ACTUALIZACION DE SECTOR:');
    this.sectoresService.updateSector(this.token, idEstablecimiento, ConsultaComponent.setSector(event.data)).subscribe((response: any) => {
      console.log(response.message);
    }, error => {
      console.log(error);
    });
  }

  addSector(event, idEstablecimiento) {
    console.log('INICIO DE CREACION DE SECTOR:');
    this.sectoresService.addSector(this.token, idEstablecimiento, event.data).subscribe((response: any) => {
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
      if (e.parentType === 'dataRow' && e.dataField === 'comuna') {
        console.log(e.row.data.idRegion);
        e.editorOptions.disabled = (typeof e.row.data.idRegion !== 'number');
      }
    }
  }

  getComunas(options): any {
    console.log(options);
    if (options) {
      const regionesServiceDev = new RegionesService();
      return regionesServiceDev.getComunas();
    }
    return {
      store: this.comunas,
      filter: options.data ? ['idRegion', '=', options.data.idRegion] : null
    };
  }

  setRegionValue(rowData: any, value: any): void {
    rowData.comuna = null;
    (this as any).defaultSetCellValue(rowData, value);
  }

}
