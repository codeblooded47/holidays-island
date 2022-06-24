import { Component, OnInit } from '@angular/core';
import { faCoffee, fas, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { CheckLoginService } from '../services/check-login.service';
import { FetchAllOfferService } from '../services/fetch-all-offer.service';

@Component({
  selector: 'app-inclusions',
  templateUrl: './inclusions.component.html',
  styleUrls: ['./inclusions.component.css', './../../../styles.scss'],
})
export class InclusionsComponent implements OnInit {
  trash_icon = faTrashAlt;
  inclusions_list = [];
  input_country = '';
  constructor(
    private countryService: FetchAllOfferService,
    private checkLogin: CheckLoginService
  ) {}

  ngOnInit(): void {
    let inclusions_list = this.countryService.fetch_all_inclusions();
    inclusions_list.subscribe((data: any) => {
      this.inclusions_list = data.inclusions_list;
      console.log('state country ', this.inclusions_list);
    });
  }
  addnewInclusions() {
    let add_country = this.countryService.add_new_inclusions({
      name: this.input_country,
    });
    add_country.subscribe((data: any) => {
      if (data.status) {
        this.inclusions_list.push(data.doc);
        this.input_country = '';
      }
    });
  }
  valuechange(e) {
    this.input_country = e.target.value;
  }
  remove_Inclusions(data) {
    let delted_country = this.countryService.delete_inclusions_by_id({
      _id: data,
    });
    delted_country.subscribe((data: any) => {
      for (var i = 0; i < this.inclusions_list.length; i++) {
        if (this.inclusions_list[i]._id === data.doc._id) {
          this.inclusions_list.splice(i, 1);
        }
      }
    });
  }
}
