import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminServiceService {
  url = `${environment.API_URL}/api/auth`;

  constructor(private http: HttpClient) {}

  fetch_all_user(auth) {
    const headers = {
      'content-type': 'application/json',
      'x-access-token': auth,
    };
    // const body = JSON.stringify(data);
    // headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.url}/listalluser`, null, {
      headers: headers,
    });
  }

  add_new_user(auth, data) {
    const headers = {
      'content-type': 'application/json',
      'x-access-token': auth,
    };
    const body = JSON.stringify(data);
    // headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.url}/createuser`, data, {
      headers: headers,
    });
  }
  delete_user(auth, data) {
    const headers = {
      'content-type': 'application/json',
      'x-access-token': auth,
    };
    const body = JSON.stringify(data);
    // headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.url}/deleteuser`, data, {
      headers: headers,
    });
  }
}
