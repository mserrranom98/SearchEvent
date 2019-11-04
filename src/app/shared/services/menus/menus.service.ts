import { Injectable } from '@angular/core';
import {GLOBAL_PATH} from '../../models/path/path';
import {HttpClient} from '@angular/common/http';
import {Menus} from '../../models/menus/menus.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  private path = GLOBAL_PATH.getPath;

  constructor(
    private http: HttpClient
  ) { }

  getMenus(idToken: string): Observable<Menus[]> {
    const body = {
      idToken
    };

    return this.http.post<Menus[]>(this.path + 'getPath', body);
  }

}
