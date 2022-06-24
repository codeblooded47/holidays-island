import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OffersService } from 'src/app/services/offers.service';
import { CheckLoginService } from '../services/check-login.service';
import { FetchAllOfferService } from '../services/fetch-all-offer.service';

@Component({
  selector: 'app-edit-package',
  templateUrl: './edit-package.component.html',
  styleUrls: ['./edit-package.component.css', './../../../styles.scss'],
})
export class EditPackageComponent implements OnInit {
  title = 'hotels';
  public employeeForm: FormGroup;
  country_list = [];
  hotels_list = [];
  meals_list = [];
  rooms_list = [];
  inclusions_list = [];
  id: number;
  private sub: any;

  data = {
    Offers: [
      {
        Offer: '',
        Hotels: [
          {
            HotelName: '',
            countryName: '',
            NightNumber: '',
            RoomType: '',
            RegisterDate: '',
            price: '',
            foods: '',
            image1: [''],
            teps1: [''],
            teps2: [''],
            teps3: [''],
            teps4: [''],
            teps5: [''],
            teps6: [''],
            teps7: [''],
            teps8: [''],
            teps9: [''],
            teps10: [''],
          },
        ],
      },
    ],
  };

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private offerService: OffersService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private dashboradOfferService: FetchAllOfferService,
    private checkLogin: CheckLoginService
  ) {
    this.myForm = this.fb.group({
      name: [],
      _id: '',
      Offers: this.fb.array([]),
    });

    // this.setCities();
    // this.router.navigate(['/login']);
  }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.getOfferById(params['id']);
    });
    let token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
    }
    this.update_data_list();
  }
  getOfferById(id) {
    this.offerService.getOfferById(id).subscribe((data: any) => {
      let control = <FormArray>this.myForm.controls.Offers;
      this.myForm.controls.name.setValue(data.name);
      this.myForm.controls._id.setValue(data._id);
      console.log('packdge name', data);
      data.Offers.forEach((x) => {
        control.push(
          this.fb.group({
            Offer: x.Offer,
            Hotels: this.setAddressLines(x),
          })
        );
      });
    });
  }

  update_data_list() {
    this.dashboradOfferService.fetch_all_country().subscribe((data: any) => {
      if (data.status == 'success') {
        this.country_list = data.country_list;
      }
    });
    this.dashboradOfferService.fetch_all_meals().subscribe((data: any) => {
      if (data.status == 'success') {
        this.meals_list = data.meals_list;
      }
    });
    this.dashboradOfferService.fetch_all_hotels().subscribe((data: any) => {
      if (data.status == 'success') {
        this.hotels_list = data.hotels_list;
      }
    });
    this.dashboradOfferService.fetch_all_rooms().subscribe((data: any) => {
      if (data.status == 'success') {
        this.rooms_list = data.rooms_list;
      }
    });
    this.dashboradOfferService.fetch_all_inclusions().subscribe((data: any) => {
      if (data.status == 'success') {
        this.inclusions_list = data.inclusions_list;
      }
    });
  }
  onSubmit() {
    console.log('form value', this.myForm.value);
    this.dashboradOfferService
      .updateOffersById(this.myForm.value, this.id)
      .subscribe((data: any) => {
        console.log('response data', data.doc.id);
        if (data.status) {
          this.router.navigate(['/offers', data.doc.id]);
          this.toastr.success('تم حفظ البيانات', 'العروض');
        } else {
          this.toastr.error('فشلت عملة الحفظ', 'العروض');
        }
      });
    // this.offerService.createOffer(this.myForm.value).subscribe((data: any) => {
    //   console.log('response data', data.doc.id);
    //   if (data.status == 'success') {
    //     this.router.navigate(['/offers', data.doc.id]);
    //     this.toastr.success('تم حفظ البيانات', 'العروض');
    //   } else {
    //     this.toastr.error('فشلت عملة الحفظ', 'العروض');
    //   }
    // });
  }

  addNewCity() {
    let control = <FormArray>this.myForm.controls.Offers;
    control.push(
      this.fb.group({
        Offer: [''],
        Hotels: this.fb.array([]),
      })
    );
  }

  deleteCity(index) {
    let control = <FormArray>this.myForm.controls.Offers;
    control.removeAt(index);
  }

  addNewAddressLine(control) {
    control.push(
      this.fb.group({
        HotelName: [''],
        countryName: [''],
        NightNumber: [''],
        RoomType: [''],
        RegisterDate: [''],
        price: [''],
        foods: [''],
        image1: [''],
        teps1: [''],
        teps2: [''],
        teps3: [''],
        teps4: [''],
        teps5: [''],
        teps6: [''],
        teps7: [''],
        teps8: [''],
        teps9: [''],
        teps10: [''],
      })
    );
  }

  deleteAddressLine(control, index) {
    control.removeAt(index);
  }

  setCities() {
    let control = <FormArray>this.myForm.controls.Offers;
    this.data.Offers.forEach((x) => {
      control.push(
        this.fb.group({
          Offer: x.Offer,
          Hotels: this.setAddressLines(x),
        })
      );
    });
  }

  setAddressLines(x) {
    let arr = new FormArray([]);
    x.Hotels.forEach((y) => {
      arr.push(
        this.fb.group({
          HotelName: y.HotelName,
          countryName: y.countryName,
          NightNumber: y.NightNumber,
          RoomType: y.RoomType,
          RegisterDate: y.RegisterDate,
          price: y.price,
          foods: y.foods,
          image1: y.image1,
          teps1: y.teps1,
          teps2: y.teps2,
          teps3: y.teps3,
          teps4: y.teps4,
          teps5: y.teps5,
          teps6: y.teps6,
          teps7: y.teps7,
          teps8: y.teps8,
          teps9: y.teps9,
          teps10: y.teps10,
        })
      );
    });
    return arr;
  }

  deleteDB() {
    this.offerService.deleteDB().subscribe((state: any) => {
      if (state.status == 'success') {
        this.toastr.success('تم حذف البيانات', 'العروض');
      } else {
        this.toastr.error('فشلت عملة الحذف', 'العروض');
      }
    });
  }
  onCountryChange(e) {
    this.dashboradOfferService.fetch_all_hotels().subscribe((data: any) => {
      if (data.status == 'success') {
        this.hotels_list = [];
        data.hotels_list.forEach((element) => {
          if (element.country === e) {
            this.hotels_list.push(element);
            console.log(element);
          }
        });
      }
    });
  }
}
