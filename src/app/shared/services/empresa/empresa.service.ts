import { Injectable } from '@angular/core';
import {GLOBAL_PATH} from '../../models/path/path';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Empresas} from '../../models/empresas/empresas.model';
import {Mensaje} from '../../models/mensaje/mensaje.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private path = GLOBAL_PATH.getPath;

  constructor(
    private http: HttpClient
  ) { }

  getEmpresa(idToken: string): Observable<Empresas> {
    const body = {
      idToken
    };

    return this.http.post<Empresas>(this.path + 'getEmpresa', body);
  }

  updateEmpresa(idToken: string, empresa: Empresas) {
    const body = {
      idToken,
      empresa
    };

    return this.http.post(this.path + 'updateEmpresa', body);
  }

  enviarSolicitud(idToken: string, mensaje: Mensaje) {
    const body = {
      idToken,
      mensaje
    };

    return this.http.post(this.path + 'updateEmpresa', body);
  }
}
