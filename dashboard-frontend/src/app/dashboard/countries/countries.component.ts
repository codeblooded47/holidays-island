import { Component, OnInit } from '@angular/core';
import { faCoffee, fas, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { CheckLoginService } from '../services/check-login.service';
import { FetchAllOfferService } from '../services/fetch-all-offer.service';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css', './../../../styles.scss'],
})
export class CountriesComponent implements OnInit {
  trash_icon = faTrashAlt;
  country_list = [];
  input_country = '';
  constructor(
    private countryService: FetchAllOfferService,
    private checkLogin: CheckLoginService
  ) {}

  ngOnInit(): void {
    let country_list = this.countryService.fetch_all_country();
    country_list.subscribe((data: any) => {
      this.country_list = data.country_list;
      console.log('state country ', this.country_list);
    });
  }
  addnewCountry() {
    let add_country = this.countryService.add_new_country({
      name: this.input_country,
    });
    add_country.subscribe((data: any) => {
      if (data.status) {
        this.country_list.push(data.doc);
        this.input_country = '';
      }
    });
  }
  valuechange(e) {
    this.input_country = e.target.value;
  }
  remove_country(data) {
    let delted_country = this.countryService.delete_country_by_id({
      _id: data,
    });
    delted_country.subscribe((data: any) => {
      for (var i = 0; i < this.country_list.length; i++) {
        if (this.country_list[i]._id === data.doc._id) {
          this.country_list.splice(i, 1);
        }
      }
    });
  }
}
