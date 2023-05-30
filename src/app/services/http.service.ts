import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';
import { TypeUser } from '../interfaces/type-user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getUsers(): Observable<User[]> {
    const url = `${this.apiUrl}users/get/all`;
    return this.http.get<User[]>(url);
  }

  public getTypeUsers(): Observable<TypeUser[]> {
    const url = `${this.apiUrl}type-users/get/all`;
    return this.http.get<TypeUser[]>(url);
  }

  public getUser(id: number): Observable<User> {
    const url = `${this.apiUrl}users/get/${id}`;
    return this.http.post<User>(url, id);
  }

  public saveUser(user: User): Observable<User> {
    const url = `${this.apiUrl}users/create/user`;
    return this.http.post<User>(url, user);
  }

  public deleteUser(id: number): Observable<User> {
    const url = `${this.apiUrl}users/delete/${id}`;
    return this.http.delete<User>(url);
  }

}
