import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = 'http://127.0.0.1/brujula/';

  constructor(private http: HttpClient) {}

  login(login: any): Observable<Request> {
    return this.http.post<Request>(`${this.URL}auth/login.php`, login);
  }

  registro(registro: any): Observable<Request> {
    return this.http.post<Request>(`${this.URL}auth/registro.php`, registro);
  }


}
