import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FetchAllOfferService {
  url = `${environment.API_URL}`;

  constructor(private http: HttpClient) {}
  fetch_all_offer() {
    return this.http.get(`${this.url}/offers`);
  }
  deleteOfferById(data) {
    return this.http.delete(`${this.url}/offers/delete-offer/${data}`);
  }

  updateOffersById(data, id) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(data);
    // headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.url}/offers/update-offer/${id}`, body, {
      headers: headers,
    });
  }

  fetch_all_country() {
    return this.http.get(`${this.url}/offers/get-countries`);
  }
  add_new_country(data: any) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(data);
    // headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.url}/offers/update-country`, body, {
      headers: headers,
    });
  }
  delete_country_by_id(data: any) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(data);
    // headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.url}/offers/delete-country`, body, {
      headers: headers,
    });
  }
  // meals services
  fetch_all_meals() {
    return this.http.get(`${this.url}/meals/get-meals`);
  }
  add_new_meals(data: any) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(data);
    // headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.url}/meals/update-meals`, body, {
      headers: headers,
    });
  }
  delete_meals_by_id(data: any) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(data);
    // headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.url}/meals/delete-meals`, body, {
      headers: headers,
    });
  }

  //  hotelsservices
  fetch_all_hotels() {
    return this.http.get(`${this.url}/hotels/get-hotels`);
  }
  add_new_hotels(data: any) {
    // const headers = { 'content-type': 'application/json' };
    // const body = JSON.stringify(data);
    // headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.url}/hotels/update-hotels`, data);
  }
  delete_hotels_by_id(data: any) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(data);
    // headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.url}/hotels/delete-hotels`, body, {
      headers: headers,
    });
  }

  //  rooms services
  fetch_all_rooms() {
    return this.http.get(`${this.url}/rooms/get-rooms`);
  }
  add_new_rooms(data: any) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(data);
    // headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.url}/rooms/update-rooms`, body, {
      headers: headers,
    });
  }
  delete_rooms_by_id(data: any) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(data);
    // headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.url}/rooms/delete-rooms`, body, {
      headers: headers,
    });
  }

  //  inclusions services
  fetch_all_inclusions() {
    return this.http.get(`${this.url}/inclusions/get-inclusions`);
  }
  add_new_inclusions(data: any) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(data);
    // headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.url}/inclusions/update-inclusions`, body, {
      headers: headers,
    });
  }
  delete_inclusions_by_id(data: any) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(data);
    // headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.url}/inclusions/delete-inclusions`, body, {
      headers: headers,
    });
  }
}
