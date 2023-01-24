import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor(private userService: UserService) { }

  datos: User = { id: "", name: "", username: "" }

  onSubmit() {
    this.userService.postUser(this.datos).subscribe(
      (usuario: User) => console.log(usuario)
    )
  }

}
