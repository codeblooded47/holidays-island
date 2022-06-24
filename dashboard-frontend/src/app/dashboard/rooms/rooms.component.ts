import { Component, OnInit } from '@angular/core';
import { faCoffee, fas, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { CheckLoginService } from '../services/check-login.service';
import { FetchAllOfferService } from '../services/fetch-all-offer.service';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css', './../../../styles.scss'],
})
export class RoomsComponent implements OnInit {
  trash_icon = faTrashAlt;
  rooms_list = [];
  input_country = '';
  constructor(
    private countryService: FetchAllOfferService,
    private checkLogin: CheckLoginService
  ) {}

  ngOnInit(): void {
    let rooms_list = this.countryService.fetch_all_rooms();
    rooms_list.subscribe((data: any) => {
      this.rooms_list = data.rooms_list;
      console.log('state country ', this.rooms_list);
    });
  }
  addnewRooms() {
    let add_country = this.countryService.add_new_rooms({
      name: this.input_country,
    });
    console.log('rooms list', add_country);
    add_country.subscribe((data: any) => {
      if (data.status) {
        this.rooms_list.push(data.doc);
        this.input_country = '';
      }
    });
  }
  valuechange(e) {
    this.input_country = e.target.value;
  }
  remove_Rooms(data) {
    let delted_country = this.countryService.delete_rooms_by_id({
      _id: data,
    });
    delted_country.subscribe((data: any) => {
      for (var i = 0; i < this.rooms_list.length; i++) {
        if (this.rooms_list[i]._id === data.doc._id) {
          this.rooms_list.splice(i, 1);
        }
      }
    });
  }
}
