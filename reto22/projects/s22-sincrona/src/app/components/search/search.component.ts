import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  thead = ['id', 'nombre', 'usuario'];

  // Consumir instancia de User Service
  constructor( private userService: UserServiceService) { }

  show: boolean = false;
  resultado: boolean = true;
  user!: Users | null;

  getUserId(id: string) {
    this.resultado = true;
    this.user = null;
    this.userService.getUserId(id).subscribe({
      next: (userSolo: Users) => { this.user = userSolo; this.show = false },
      error: (e) => { console.error(e); this.resultado = false },
      complete: () => console.info('La API funcionó con éxito')
    })
  }

  ngOnInit(): void {
    this.show = true;
    this.resultado = true;
  }

}
