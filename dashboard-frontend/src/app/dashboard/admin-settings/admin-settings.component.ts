import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminServiceService } from '../services/admin-service.service';
import { CheckLoginService } from '../services/check-login.service';
declare var $: any;

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css', './../../../styles.scss'],
})
export class AdminSettingsComponent implements OnInit {
  isUserAdmin = false;
  accesToken = '';
  users_list: Array<any> = new Array<any>();
  modal_user_data: any = '';
  showdangerAlert = false;
  alertValue = '';
  showsuccessAlert = false;
  constructor(
    private adminService: AdminServiceService,
    private checkLogin: CheckLoginService
  ) {}

  ngOnInit(): void {
    this.accesToken = localStorage.getItem('token');
    let rootUser = localStorage.getItem('is_user_root');
    if (rootUser === 'true') {
      this.isUserAdmin = true;
      this.adminService
        .fetch_all_user(this.accesToken)
        .subscribe((data: any) => {
          this.users_list = data.data;
          console.log('chekcing', data);
        });
    }
  }
  showAddUserModal(): void {
    $('#addUserModel').modal('show');
  }

  hideAddUserModal(): void {
    document.getElementById('close-modal-add-user').click();
  }

  // confimation modal fun
  delete_user() {
    this.adminService
      .delete_user(this.accesToken, { email: this.modal_user_data.email })
      .subscribe((data: any) => {
        if (data.status) {
          console.log(data.id);
          const index = this.users_list.findIndex(
            (user) => user._id === data.id
          );
          this.users_list.splice(index, 1);

          this.hideModal();
        }
      });
  }
  showModal(details): void {
    this.modal_user_data = details;
    $('#myModal').modal('show');
  }

  hideModal(): void {
    this.showdangerAlert = false;
    this.showsuccessAlert = false;
    document.getElementById('close-modal').click();
  }
  onClickSubmit(formValue) {
    this.addNewUser(formValue);
  }

  addNewUser(form: NgForm) {
    let postData = form.value;
    if (postData.is_root == '' || postData.is_root === null) {
      postData.is_root = false;
    }
    console.log(postData);
    this.adminService
      .add_new_user(this.accesToken, postData)
      .subscribe((data: any) => {
        if (data.status) {
          console.log('user add status', data);
          form.resetForm();
          this.alertValue = data.message;
          this.showdangerAlert = false;
          this.showsuccessAlert = true;

          this.users_list.push(data);
        } else {
          this.alertValue = data.message;
          this.showdangerAlert = true;
          this.showsuccessAlert = false;
        }
      });
  }
}
