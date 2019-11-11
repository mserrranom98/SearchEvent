import {Component, Inject, OnInit} from '@angular/core';
import {TrabajadoresService} from '../../../../shared/services/trabajadores/trabajadores.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material/typings/dialog';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html'
})
export class ChangePasswordComponent implements OnInit {

  private token: string;
  formPassword: FormGroup;
  rut: string;

  constructor(
    private trabajadoresService: TrabajadoresService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
  ) {
    this.token = localStorage.getItem('token');
    this.rut = data.rut;
  }

  ngOnInit() {
    this.formPassword = this.fb.group({
      correo: this.data.correo,
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}')]),
      confirmPassword: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}')])
    });
  }

  changePassword() {
    if (this.formPassword.valid && this.formPassword.getRawValue().password === this.formPassword.getRawValue().confirmPassword) {
      console.log('INICIO DE ACTUALIZACION DE CONTRASEÑA:');
      this.trabajadoresService.chagePassword(this.token, this.formPassword.getRawValue()).subscribe((response: any) => {
        console.log(response.message);
        this.dialogRef.close();
      }, error => {
        console.log(error);
      });
    }
  }

}
