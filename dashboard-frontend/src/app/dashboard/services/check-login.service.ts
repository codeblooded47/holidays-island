import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CheckLoginService {
  constructor(private router: Router) {
    let token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
    }
  }
}
