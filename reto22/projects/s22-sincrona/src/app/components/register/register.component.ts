import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private formBuilder: FormBuilder , private _snackBar: MatSnackBar, public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  hide: boolean = true;

  // Estructura del Reactive Form
  registroForm = this.formBuilder.group({
    firstname: ['', [ Validators.required ]],
    lastname: ['', [ Validators.required ]],
    username:['', [ Validators.required ]],
    password: ['', [ Validators.required, Validators.pattern('[0-9]{8}') ]]
  }); 

  get firstname(){ return this.registroForm.get('firstname'); };
  get lastname(){ return this.registroForm.get('lastname'); };
  get username(){ return this.registroForm.get('username'); };
  get password(){ return this.registroForm.get('password'); };


  //Generar el metodo submit para registrar los datos del formulario en una array
  datos = new Array;

  onSubmit(){
    this.datos.push({
      'fisrtname': this.registroForm.get('firstname')?.value,
      'lastname': this.registroForm.get('lastname')?.value,
      'username': this.registroForm.get('username')?.value,
      'password': this.registroForm.get('password')?.value
    });

    this.registroForm.reset();

    console.log(this.datos);
  }

  listoParaEnviar: boolean = false;

  // _snackBar Position
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  SendForm(){
    if(!this.registroForm.valid && !this.listoParaEnviar){
      this._snackBar.open('Por favor, rellene todos los campos', 'Cerrar', {
        duration: 3000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });

      return;
    } else {
      this._snackBar.open('El registro se ha creado con éxito', 'Cerrar', {
        duration: 3000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
  
      this.listoParaEnviar = true;
    }

  }

  // Criterio para evitar que el usuario abandone el componente
  SalirDeRuta(): Observable<boolean> | boolean{  
      // Si el input se volvió dirty
      if( this.registroForm.dirty ){
        const dialogRef = this.dialog.open(ConfirmDialogComponent);
        return dialogRef.afterClosed();
      }

      return true;
  }

}
