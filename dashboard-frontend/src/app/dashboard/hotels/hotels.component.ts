import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { faCoffee, fas, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { CheckLoginService } from '../services/check-login.service';
import { FetchAllOfferService } from '../services/fetch-all-offer.service';
declare var $: any;

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css', './../../../styles.scss'],
})
export class HotelsComponent implements OnInit {
  trash_icon = faTrashAlt;
  hotels_list: Array<any> = new Array<any>();
  input_country = '';
  modal_user_data: any = '';
  showdangerAlert = false;
  alertValue = '';
  showsuccessAlert = false;
  currentImage = '';
  country_list: Array<any> = new Array<any>();
  appUrl = environment.API_URL;
  constructor(
    private hotelService: FetchAllOfferService,
    private _DomSanitizationService: DomSanitizer,
    private checkLogin: CheckLoginService
  ) {}

  sanitizeUrl(url: any) {
    return this._DomSanitizationService.bypassSecurityTrustUrl(url);
  }
  ngOnInit(): void {
    let hotels_list = this.hotelService.fetch_all_hotels();
    hotels_list.subscribe((data: any) => {
      this.hotels_list = data.hotels_list;
      console.log('state country ', this.hotels_list);
    });

    // get country list for dropdown
    this.hotelService.fetch_all_country().subscribe((data: any) => {
      this.country_list = data.country_list;
    });
  }
  addnewHotels() {
    let add_country = this.hotelService.add_new_hotels({
      name: this.input_country,
    });
    add_country.subscribe((data: any) => {
      if (data.status) {
        this.hotels_list.push(data.doc);
        this.input_country = '';
      }
    });
  }
  valuechange(e) {
    this.input_country = e.target.value;
  }
  remove_Hotels(data) {
    let delted_country = this.hotelService.delete_hotels_by_id({
      _id: data,
    });
    delted_country.subscribe((data: any) => {
      for (var i = 0; i < this.hotels_list.length; i++) {
        if (this.hotels_list[i]._id === data.doc._id) {
          this.hotels_list.splice(i, 1);
        }
      }
    });
  }

  // models functitons

  // add  new hotel fouctions
  showAddHotelModal(): void {
    $('#addUserModel').modal('show');
  }

  hideAddHotelModel(): void {
    document.getElementById('close-modal-add-user').click();
  }

  // cofirmation delte model
  showModal(details): void {
    this.modal_user_data = details;
    $('#myModal').modal('show');
  }
  hideModal(): void {
    document.getElementById('close-modal').click();
  }
  onClickSubmit(formValue) {
    this.addNewHotel(formValue);
  }
  addNewHotel(form: NgForm) {
    let postData = form.value;

    if (postData.name === '' || postData.name == null) {
      this.alertValue = 'Please enter name of hotel';
      this.showdangerAlert = true;
      return;
    }
    if (postData.country === '' || postData.name == null) {
      this.alertValue = 'Please enter name of country name';
      this.showdangerAlert = true;

      return;
    }
    if (postData.sampleFile === '' || postData.name == null) {
      this.alertValue = 'Please add image file';
      this.showdangerAlert = true;
      return;
    }
    const formData = new FormData();

    formData.append('name', postData.name);
    formData.append('country', postData.country);
    formData.append('sampleFile', this.currentImage[0]);
    this.hotelService.add_new_hotels(formData).subscribe((data: any) => {
      if (data.status === 'success') {
        this.hotels_list.push(data.doc);
        this.hideAddHotelModel();
        form.resetForm();
        this.showdangerAlert = false;
      }
    });
  }
  getFiles(event) {
    this.currentImage = event.target.files;
  }
}
