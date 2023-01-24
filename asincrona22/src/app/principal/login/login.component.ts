import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private autenticacion: AutenticacionService, private router: Router) { }

  urlRedireccion = "";

  login() {
    if (this.usu !== "test" || this.pass !== "test") {
      this.mostrar = false
      return
    }
    else {
      this.mostrar = true
      this.autenticacion.login();
      console.log(this.autenticacion.urlUsuarioIntentaAcceder)
      this.urlRedireccion = this.autenticacion.urlUsuarioIntentaAcceder;
      this.autenticacion.urlUsuarioIntentaAcceder = "";
      this.router.navigate([this.urlRedireccion]);
    }
  }

  usu = "";
  pass = "";
  mostrar = false
}
