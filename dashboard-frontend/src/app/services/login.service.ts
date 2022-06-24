import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = `${environment.API_URL}/api/auth`;
  constructor(private http: HttpClient) {}
  loginUser(data: any) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(data);
    // headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.url}/signin`, body, {
      headers: headers,
    });
  }
}
