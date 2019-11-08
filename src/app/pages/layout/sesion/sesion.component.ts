import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html'
})
export class SesionComponent implements OnInit {

  formUsuario: FormGroup;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    /** Inicializa los campos necesarios para ingresar al sistema */
    this.formUsuario = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    const email = this.formUsuario.getRawValue().email;
    const password = this.formUsuario.getRawValue().password;

    console.log('INICIO DE SESION:');
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(value => {
      console.log('Ingreso al sistema exitoso');
      this.getToken();
      this.router.navigate(['/cuentas/consulta'], {relativeTo: this.route.parent});
    }).catch(error => {
      console.log(error.message);
    });
  }

  getToken() {
    console.log('INICIO DE CONSULTA DE TOKEN');
    firebase.auth().currentUser.getIdToken(true).then((idToken: string) => {
      console.log('Se recupero exitosamente el token');
      localStorage.setItem('token', idToken);
    }).catch(error => {
      console.log(error);
    });
  }

}
