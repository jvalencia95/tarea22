import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  apiUser = environment.apiUrl + "users/"


  getUsersAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUser)
  }

  getUserId(userId: string): Observable<User> {
    const url = this.apiUser + userId
    return this.http.get<User>(url)
  }

  postUser(usuario: User): Observable<User> {
    return this.http.post<User>(this.apiUser, usuario)
  }


  getUsersAllInterceptor(): Observable<any> {
    return this.http.get(this.apiUser, { observe: "response" })
  }
}
