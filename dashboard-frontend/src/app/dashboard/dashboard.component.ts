import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', './../../styles.scss'],
})
export class DashboardComponent implements OnInit {
  data: string;
  constructor(private common_service: CommonService) {}
  toggleValue = '';
  isSideBarToggled = false;
  showAdminNav = true;
  ngOnInit(): void {
    // subscribe for toggel side bar
    this.common_service.data$.subscribe((res) => {
      if (res === 'opened') {
        this.toggleValue = 'toggled';
        this.isSideBarToggled = true;
      } else {
        this.toggleValue = '';
        this.isSideBarToggled = false;
      }
      console.log('data in child', res);
    });

    // show admin nav if user is root
    let rootUser = localStorage.getItem('is_user_root');
    if (rootUser === 'false') {
      this.showAdminNav = false;
    }
  }
  sideBarToggleCheck() {
    console.log(this.isSideBarToggled);
    if (this.isSideBarToggled) {
      this.common_service.changeData('closed');
    }
  }
}
