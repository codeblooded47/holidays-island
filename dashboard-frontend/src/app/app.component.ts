import { OffersService } from './services/offers.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommonService } from './services/common.service';
import { MainComponent } from './main/main.component';
import { OffersTableComponent } from './offers-table/offers-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './../styles.scss'],
})
export class AppComponent implements OnInit {
  title = 'hotels';
  showNav = true;
  data: string;
  show_sidebar = false;
  show_sidebar_btn = true;
  constructor(private router: Router, private common_service: CommonService) {}

  ngOnInit(): void {
    this.common_service.data$.subscribe((res) => {
      if (res === 'opened') {
        this.show_sidebar = true;
      } else {
        this.show_sidebar = false;
      }
      console.log('parent app data', res);
    });
  }

  showSidebar() {
    if (!this.show_sidebar) {
      this.common_service.changeData('opened');
      this.show_sidebar = true;
    } else {
      this.common_service.changeData('closed');
      this.show_sidebar = false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('is_user_root');
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['login']);
    }
  }
  onOutletLoaded(component) {
    // console.log(component);
    if (component instanceof LoginComponent) {
      this.showNav = false;
    } else {
      this.showNav = true;
    }

    if (
      component.route.params._value.download &&
      component.route.params._value.download === 'download'
    ) {
      this.showNav = false;
    }

    // console.log('compoent', component.route.params._value.download);
    // if (component instanceof OffersTableComponent) {
    //   this.showNav = false;
    // }

    if (component instanceof MainComponent) {
      this.show_sidebar_btn = false;
    } else {
      this.show_sidebar_btn = true;
    }
  }
}
