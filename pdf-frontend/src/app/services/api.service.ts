import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = `${environment.API_URL}`;
  constructor(private http: HttpClient) {}
  getOffer() {
    return this.http.get(this.url);
  }
  getOfferById(data: any) {
    return this.http.get(`${this.url}/offers/get-offer/${data}`);
  }
}
