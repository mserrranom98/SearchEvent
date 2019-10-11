import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html'
})
export class SesionComponent implements OnInit {

  formUsuario: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    /** Inicializa los campos necesarios para ingresar al sistema */
    this.formUsuario = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login() {

  }

}
