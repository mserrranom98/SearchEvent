import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {TrabajadoresService} from '../../../../shared/services/trabajadores/trabajadores.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DxFormComponent} from 'devextreme-angular';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html'
})
export class ChangePasswordComponent implements OnInit {
  @ViewChild(DxFormComponent, { static: false }) form: DxFormComponent;

  private token: string;
  rut: string;
  cuenta = {password: '', confirmPassword: '', correo: ''};
  buttonOptions: any = {
    text: 'Register',
    type: 'success',
    useSubmitBehavior: true
  };

  constructor(
    private trabajadoresService: TrabajadoresService,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
  ) {
    this.token = localStorage.getItem('token');
    this.rut = data.rut;
    this.cuenta.correo = data.correo;
  }

  ngOnInit() {
  }

  passwordComparison = () => {
    return this.form.instance.option('formData').Password;
  };

  changePassword(event) {
    console.log(event);
    if (this.cuenta.password !== '' && this.cuenta.confirmPassword !== '') {
      if (this.cuenta.password === this.cuenta.confirmPassword) {
        console.log('INICIO DE ACTUALIZACION DE CONTRASEÑA:');
        this.trabajadoresService.chagePassword(this.token, this.cuenta).subscribe((response: any) => {
          console.log(response.message);
          this.dialogRef.close();
        }, error => {
          console.log(error);
        });
      }
    }
  }

  cerrar() {
    this.dialogRef.close();
  }

}
