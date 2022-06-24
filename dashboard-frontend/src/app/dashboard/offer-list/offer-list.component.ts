import { Component, OnInit } from '@angular/core';
import { CheckLoginService } from '../services/check-login.service';
import { FetchAllOfferService } from '../services/fetch-all-offer.service';
declare var $: any;

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css', './../../../styles.scss'],
})
export class OfferListComponent implements OnInit {
  constructor(
    private fetchAllOffer: FetchAllOfferService,
    private checkLogin: CheckLoginService
  ) {}
  offer_list: any = [];
  modal_data: any = [];
  modal_visible_value = '';
  ngOnInit(): void {
    let data = this.fetchAllOffer.fetch_all_offer();
    data.subscribe((data) => {
      this.offer_list = data;
      console.log('fetched all ofers', data);
    });
  }

  delete_package() {
    this.fetchAllOffer
      .deleteOfferById(this.modal_data._id)
      .subscribe((data: any) => {
        if (data.status === 'success' && data.data !== null) {
          this.hideModal();
          for (var i = 0; i < this.offer_list.length; i++) {
            if (this.offer_list[i]._id === data.data._id) {
              this.offer_list.splice(i, 1);
            }
          }
        }
      });
  }
  showModal(details): void {
    this.modal_data = details;

    $('#myModal').modal('show');
  }

  hideModal(): void {
    document.getElementById('close-modal').click();
  }
}
