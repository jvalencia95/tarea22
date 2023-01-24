import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;

  loading: boolean = false;

  // Reactive Form

  constructor( private formBuilder: FormBuilder, private authentication : AuthenticationService, private router: Router, private _snackBar: MatSnackBar ) { }

  redirect!: string;

  LogIn() {
    if(this.registerForm.valid) {
      this.fakeLoading();
    } else {
      this.Error()
    }
  }

  CorrectUser() {
    this.authentication.logIn();
    this.redirect = this.authentication.urlUsuarioIntentaAcceder; // Rute redireccionar
    this.authentication.urlUsuarioIntentaAcceder = '/home';
    this.router.navigate(['/home']);
  }

  registerForm!: FormGroup;

  InitForm(): FormGroup {
      return this.formBuilder.group({
        email: ['', [Validators.required, Validators.pattern('^[aA-zZ0-9._%+-ñÑ]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', [Validators.required]]
      })
  }

  get email() { return this.registerForm.get('email') };
  get password() { return this.registerForm.get('password') }

  // Button Error SnackBar 
  Error() {
    this._snackBar.open('El email o contraseña ingresados son inválidos', '', {
      duration: 3000,
    });
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.CorrectUser();
    }, 1500);
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }

  ngOnInit(): void {
    this.registerForm = this.InitForm();
  }

}
