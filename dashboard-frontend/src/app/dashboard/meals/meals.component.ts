import { Component, OnInit } from '@angular/core';
import { faCoffee, fas, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { CheckLoginService } from '../services/check-login.service';
import { FetchAllOfferService } from '../services/fetch-all-offer.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css', './../../../styles.scss'],
})
export class MealsComponent implements OnInit {
  trash_icon = faTrashAlt;
  meals_list = [];
  input_country = '';
  constructor(
    private countryService: FetchAllOfferService,
    private checkLogin: CheckLoginService
  ) {}

  ngOnInit(): void {
    let meals_list = this.countryService.fetch_all_meals();
    meals_list.subscribe((data: any) => {
      this.meals_list = data.meals_list;
      console.log('state country ', this.meals_list);
    });
  }
  addnewMeals() {
    let add_country = this.countryService.add_new_meals({
      name: this.input_country,
    });
    add_country.subscribe((data: any) => {
      if (data.status) {
        this.meals_list.push(data.doc);
        this.input_country = '';
      }
    });
  }
  valuechange(e) {
    this.input_country = e.target.value;
  }
  remove_Meals(data) {
    let delted_country = this.countryService.delete_meals_by_id({
      _id: data,
    });
    delted_country.subscribe((data: any) => {
      for (var i = 0; i < this.meals_list.length; i++) {
        if (this.meals_list[i]._id === data.doc._id) {
          this.meals_list.splice(i, 1);
        }
      }
    });
  }
}
