import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  url = `${environment.API_URL}/offers`;

  constructor(private http: HttpClient) {}

  getOffer() {
    return this.http.get(this.url);
  }

  createOffer(data) {
    return this.http.post(this.url, data);
  }
  deleteDB() {
    return this.http.delete(this.url);
  }
  getOfferById(data) {
    return this.http.get(`${this.url}/get-offer/${data}`);
  }

  downloadPackage(id) {
    const headers = { responseType: 'blob' };

    return this.http.get(
      'http://localhost:8080/download/pdf/609ed2e0b8acbf001540e719',
      {
        headers: headers,
      }
    );
  }
}
