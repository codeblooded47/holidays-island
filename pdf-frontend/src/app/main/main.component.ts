import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  title = 'pdf-server';
  d: any[] = [];
  companyName: any;
  id!: number;
  private sub: any;
  showDownload: boolean = true;
  totalprintpagecount!: number;
  constructor(
    private api: ApiService,
    private _DomSanitizationService: DomSanitizer,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.getOfferById(params['id']);
    });
  }
  sanitizeUrl(url: any) {
    return this._DomSanitizationService.bypassSecurityTrustUrl(url);
  }
  getOfferById(id: any) {
    this.api.getOfferById(id).subscribe((data: any) => {
      console.log('offer by id', data);

      let count = 0;
      data.Offers.forEach((ele: any) => {
        count++;
        ele.Hotels.forEach((val: any) => {
          count++;
        });
      });
      count++;
      this.totalprintpagecount = count;
      // console.log(this.totalprintpagecount);

      this.d.push(data.Offers);
      this.companyName = data.name;
    });
  }
}
