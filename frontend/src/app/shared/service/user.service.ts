import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/responsePageable.model';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://127.0.0.1:8000/api/user/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getUserWithFlag(flag: string): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag)
  }

  public registerUser(user:UserModel): Observable<UserModel>{
    return this.httpClient.post<UserModel>(this.apiUrl, user, this.httpOptions)
  }

  public deleteUser(user: UserModel): Observable<UserModel>{
    const url = `${this.apiUrl}/${user.id}`;
    return this.httpClient.delete<UserModel>(url );
  }

  public updateUser(user: UserModel): Observable<UserModel>{
    const url = `${this.apiUrl}/${user.id}`;
    return this.httpClient.put<UserModel>(url, user);
  }

  
}
