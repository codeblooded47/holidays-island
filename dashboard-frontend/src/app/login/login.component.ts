import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../services/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface loginRespData {
  status: boolean;
  id: string;
  username: string;
  email: string;
  accessToken: string;
  message: string;
  is_root: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './../../styles.scss'],
})
export class LoginComponent implements OnInit {
  showError = false;
  errorMassage = '';

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    let token = localStorage.getItem('token');

    if (token) {
      this.router.navigate(['']);
    }
  }

  onClickSubmit(formData) {
    let data = this.loginService.loginUser({
      username: formData.username,
      password: formData.password,
    });
    data.subscribe((data: loginRespData) => {
      console.log('login', data);
      if (data.status) {
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('is_user_root', String(data.is_root));
        this.router.navigate(['/']);
      } else {
        this.showError = true;
        this.errorMassage = data.message;
      }
    });
  }
}
