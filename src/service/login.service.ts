import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/loginauth';

  constructor(private http: HttpClient) { }

  loginAuthentication(loginInfo): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, loginInfo);
  }

  getEmployee(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${username}`);
  }
}
