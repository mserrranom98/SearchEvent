import { Injectable } from '@angular/core';
import {GLOBAL_PATH} from '../../models/path/path';
import {HttpClient} from '@angular/common/http';
import {Trabajadores} from "../../models/trabajadores/trabajadores.model";

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {

  private path = GLOBAL_PATH.getPath;

  constructor(
    private http: HttpClient
  ) { }

  getTrabajadores(idToken: string) {
    const body = {
      idToken
    };

    return this.http.post(this.path + 'getTrabajadores', body);
  }

  updateTrabajador(idToken: string, trabajador: Trabajadores) {
    const body = {
      idToken,
      trabajador
    };

    return this.http.post(this.path + 'updateTrabajador', body);
  }

  chagePassword(idToken: string, trabajador) {
    const body = {
      idToken,
      trabajador
    };

    return this.http.post(this.path + 'changePassword', body);
  }

  addTrabajador(idToken: string, trabajador: Trabajadores) {
    const body = {
      idToken,
      trabajador
    };

    return this.http.post(this.path + 'addTrabajador', body);
  }

}
