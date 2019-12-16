import { Injectable } from '@angular/core';
import {GLOBAL_PATH} from '../../models/path/path';
import {HttpClient} from '@angular/common/http';
import {Establecimientos} from '../../models/establecimientos/establecimientos.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstablecimientosService {

  private path = GLOBAL_PATH.getPath;

  constructor(
    private http: HttpClient
  ) { }

  getEstablecimientos(idToken: string): Observable<Establecimientos> {
    const body = {
      idToken
    };

    return this.http.post<Establecimientos>(this.path + 'getEstablecimientos', body);
  }

  updateEstablecimiento(idToken: string, establecimiento: Establecimientos) {
    const body = {
      idToken,
      establecimiento
    };

    return this.http.post(this.path + 'updateEstablecimiento', body);
  }

  addEstablecimiento(idToken: string, establecimiento: Establecimientos) {
    const body = {
      idToken,
      establecimiento
    };

    return this.http.post(this.path + 'addEstablecimiento', body);
  }
}
