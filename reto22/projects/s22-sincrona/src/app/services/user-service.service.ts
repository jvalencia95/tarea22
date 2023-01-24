import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  // Crear una instancia de HttpClient
  constructor( private http: HttpClient ) { }

  // Definir la URL
  url = environment.apiURL + 'users/';

  // Métodos GET para obtener datos de la API users

  getAll(): Observable<Users[]> {
    return this.http.get<Users[]>(this.url) // Lo almacena
  }

  getUserId(userId: string): Observable<Users> {
    const url = this.url + userId;
    return this.http.get<Users>(url)
  }

  postUser(user: Users): Observable<Users>{
    return this.http.post<Users>(this.url, user)
  }

  // Método GET para el Interceptor

  getAllInterceptor(): Observable<any> {
    // Al ejecutar la API, necesita saber cual es la respuesta(response)
    return this.http.get(this.url, {observe: 'response'})
  }

}
