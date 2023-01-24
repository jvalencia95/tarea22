import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedUser: boolean = false;

  constructor( public authentication: AuthenticationService ) { }

  ngOnInit(): void {
    this.loggedUser = this.authentication.isLoggedIn('');
    this.authentication.changeLoginStatus$.subscribe(
      (loggedStatus: boolean) => this.loggedUser = loggedStatus
    )
  }

  LogOut() {
    this.authentication.logOut();
  }

}
