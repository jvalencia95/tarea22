import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    FormularioComponent,
    MenuComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    FormularioComponent,
    MenuComponent,
    LoginComponent,
    ErrorComponent
  ]
})
export class PrincipalModule { }
