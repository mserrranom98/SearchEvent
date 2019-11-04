import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import {HttpClient} from '@angular/common/http';
import {GLOBAL_PATH} from '../../models/path/path';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private path = GLOBAL_PATH.getPath;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  isAuthenticated() {
    const idToken = localStorage.getItem('token');
    console.log(idToken);
    const body = {
      idToken
    };

    this.http.post(this.path + 'verificarToken', body).subscribe((res: any) => {
      if (res.code !== '0') {
        this.router.navigate(['/login'], { relativeTo: this.route.parent });
      }
    }, error => {
      console.log(error);
      this.router.navigate(['/login'], { relativeTo: this.route.parent });
    });

    return true;

    /*firebase.auth().currentUser.getIdToken(true).then((idToken: string) => {
      const body = {
        idToken
      };

      this.http.post(this.path + 'verificarToken', body).subscribe((res: any) => {
        if (res.code === '0') {
          return true;
        } else {
          this.router.navigate(['/login'], { relativeTo: this.route.parent });
          return false;
        }
      }, error => {
        console.log(error);
        this.router.navigate(['/login'], { relativeTo: this.route.parent });
        return false;
      });
    }).catch(error => {
      console.log(error);
      this.router.navigate(['/login'], { relativeTo: this.route.parent });
      return false;
    });*/
  }
}
